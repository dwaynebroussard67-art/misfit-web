import React, { useState } from 'react';
import { useForge } from '../context/ForgeContext';
import { Ghost, Loader2 } from 'lucide-react';

interface GhostWrapperProps {
  children: React.ReactNode;
  file: string;
}

const GhostWrapper: React.FC<GhostWrapperProps> = ({ children, file }) => {
  const { isGhostActive } = useForge();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [instruction, setInstruction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/forge/ghost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filepath: file, instruction })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatus({ type: 'success', msg: 'The Ghost has rewritten the code. Hot-reloading...' });
        setTimeout(() => setIsModalOpen(false), 2000);
      } else {
        setStatus({ type: 'error', msg: data.message || 'Ghost failed to manifest.' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Connection to the Void failed.' });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isGhostActive) return <>{children}</>;

  return (
    <div 
      className={`ghost-wrapper ${isHovered ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsModalOpen(true);
      }}
      style={{
        position: 'relative',
        cursor: 'crosshair',
        outline: isHovered ? '2px dashed #ff3c3c' : 'none',
        outlineOffset: '4px',
        transition: 'outline 0.2s ease'
      }}
    >
      {children}
      
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: '-25px',
          right: '0',
          backgroundColor: '#ff3c3c',
          color: 'white',
          fontSize: '0.7rem',
          padding: '2px 8px',
          borderRadius: '4px',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Ghost size={12} /> Ghost AI: {file.split('/').pop()}
        </div>
      )}

      {isModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{
            backgroundColor: '#111',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid #333',
            width: '90%',
            maxWidth: '500px',
            color: 'white'
          }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#ff3c3c' }}>
              <Ghost /> Ghost Command
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '20px' }}>
              Instruct the Ghost AI to rewrite <strong>{file}</strong>.
            </p>
            
            <textarea
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              placeholder="e.g., Change the title to 'Holy Fire', add a new red button that says 'Join the War', and center the layout."
              style={{
                width: '100%',
                height: '120px',
                backgroundColor: '#000',
                border: '1px solid #444',
                color: 'white',
                padding: '10px',
                borderRadius: '8px',
                marginBottom: '20px',
                fontFamily: 'inherit'
              }}
            />

            {status && (
              <div style={{
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '20px',
                fontSize: '0.8rem',
                backgroundColor: status.type === 'success' ? '#003300' : '#330000',
                color: status.type === 'success' ? '#00ff00' : '#ff0000',
                border: `1px solid ${status.type === 'success' ? '#00ff00' : '#ff0000'}`
              }}>
                {status.msg}
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ backgroundColor: 'transparent', border: '1px solid #444', color: '#888', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                disabled={isLoading || !instruction}
                style={{ 
                  backgroundColor: '#ff3c3c', 
                  border: 'none', 
                  color: 'white', 
                  padding: '10px 20px', 
                  borderRadius: '5px', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: (isLoading || !instruction) ? 0.5 : 1
                }}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : 'Forging Code'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GhostWrapper;
