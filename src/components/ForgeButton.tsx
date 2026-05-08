import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForge } from '../context/ForgeContext';
import { Link as LinkIcon, Edit3, EyeOff } from 'lucide-react';

interface ForgeButtonProps {
  id: string;
  defaultText: string;
  defaultTo: string;
  className?: string;
  style?: React.CSSProperties;
}

const ForgeButton: React.FC<ForgeButtonProps> = ({ id, defaultText, defaultTo, className, style }) => {
  const { isForgeActive, siteData, updateSiteData } = useForge();
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState('');
  const [tempTo, setTempTo] = useState('');

  // Use keys like id + "_text", id + "_to", id + "_visible"
  const text = siteData[`${id}_text`] || defaultText;
  const to = siteData[`${id}_to`] || defaultTo;
  const isVisible = siteData[`${id}_visible`] !== 'false';

  if (!isVisible && !isForgeActive) return null;

  if (isForgeActive && isEditing) {
    return (
      <div style={{ 
        display: 'inline-flex', 
        flexDirection: 'column', 
        gap: '10px', 
        padding: '15px', 
        backgroundColor: '#1a1a1a', 
        border: '1px solid #ff3c3c',
        borderRadius: '8px',
        zIndex: 50,
        opacity: isVisible ? 1 : 0.5
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Edit3 size={16} color="#ff3c3c" />
          <input 
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            placeholder="Button Text"
            style={{ background: '#222', color: '#fff', border: '1px solid #333', padding: '5px' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LinkIcon size={16} color="#ff3c3c" />
          <input 
            value={tempTo}
            onChange={(e) => setTempTo(e.target.value)}
            placeholder="URL (e.g. /home)"
            style={{ background: '#222', color: '#fff', border: '1px solid #333', padding: '5px' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
          <button 
            onClick={() => {
              updateSiteData(`${id}_text`, tempText);
              updateSiteData(`${id}_to`, tempTo);
              setIsEditing(false);
            }}
            style={{ backgroundColor: '#ff3c3c', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
          >
            SAVE
          </button>
          <button 
            onClick={() => {
              updateSiteData(`${id}_visible`, isVisible ? 'false' : 'true');
              setIsEditing(false);
            }}
            style={{ backgroundColor: '#444', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
          >
            {isVisible ? 'HIDE BUTTON' : 'SHOW BUTTON'}
          </button>
          <button 
            onClick={() => setIsEditing(false)}
            style={{ backgroundColor: '#222', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
          >
            CANCEL
          </button>
        </div>
      </div>
    );
  }

  const baseStyle = {
    ...style,
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#ff3c3c',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '4px',
    border: isForgeActive ? '1px dashed #fff' : 'none',
    cursor: isForgeActive ? 'pointer' : 'pointer',
    position: 'relative' as const,
    opacity: isVisible ? 1 : 0.3
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      {to.startsWith('http') ? (
        <a href={to} target="_blank" rel="noopener noreferrer" className={className} style={baseStyle}>
          {isVisible ? text : '[HIDDEN BUTTON]'}
        </a>
      ) : (
        <Link to={to} className={className} style={baseStyle}>
          {isVisible ? text : '[HIDDEN BUTTON]'}
        </Link>
      )}
      
      {isForgeActive && (
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', display: 'flex', gap: '5px' }}>
          {!isVisible && <EyeOff size={16} color="#ff3c3c" style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '2px' }} />}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTempText(text);
              setTempTo(to);
              setIsEditing(true);
            }}
            style={{
              backgroundColor: '#fff',
              color: '#ff3c3c',
              border: '1px solid #ff3c3c',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <Edit3 size={12} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgeButton;
