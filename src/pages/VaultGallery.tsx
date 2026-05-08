import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Image as ImageIcon, Plus } from 'lucide-react';

interface Asset {
  id: number;
  name: string;
  data: string;
  type: string;
}

const VaultGallery = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadAssets = async () => {
    try {
      const res = await fetch('/api/assets');
      const data = await res.json();
      setAssets(data);
    } catch (err) {
      console.error("Failed to load assets:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('forge_active') !== 'true') {
      navigate('/forge-login');
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadAssets();
  }, [navigate]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Data = reader.result as string;
        try {
          await fetch('/api/assets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: file.name,
              data: base64Data,
              type: file.type
            })
          });
          loadAssets(); // Refresh list
        } catch (err) {
          console.error("Upload failed:", err);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const deleteAsset = async (id: number) => {
    if (!window.confirm("Are you sure you want to remove this asset?")) return;
    try {
      await fetch(`/api/assets/${id}`, { method: 'DELETE' });
      loadAssets();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="welcome-container" style={{ padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#ff3c3c' }}>THE VAULT</h1>
        <p style={{ color: '#888' }}>Containment Unit & Asset Management</p>
      </header>

      {/* Upload Unit */}
      <div style={{ 
        border: '2px dashed #333', 
        padding: '40px', 
        borderRadius: '15px', 
        textAlign: 'center',
        marginBottom: '40px',
        backgroundColor: '#0a0a0a'
      }}>
        <label style={{ cursor: 'pointer' }}>
          <Plus size={48} color="#ff3c3c" />
          <div style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>TRANSFER NEW ASSETS</div>
          <p style={{ color: '#555', fontSize: '0.9rem' }}>Upload images from your device to the containment unit</p>
          <input type="file" multiple accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
        </label>
      </div>

      {/* Gallery Grid */}
      {loading ? (
        <p style={{ textAlign: 'center' }}>Accessing Vault...</p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
          gap: '20px' 
        }}>
          {assets.map(asset => (
            <div key={asset.id} style={{ 
              backgroundColor: '#111', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              border: '1px solid #222',
              position: 'relative'
            }}>
              <img src={asset.data} alt={asset.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <div style={{ padding: '8px', fontSize: '0.7rem', color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {asset.name}
              </div>
              <button 
                onClick={() => deleteAsset(asset.id)}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  background: 'rgba(0,0,0,0.7)',
                  border: 'none',
                  color: '#ff3c3c',
                  padding: '5px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {assets.length === 0 && !loading && (
        <div style={{ textAlign: 'center', padding: '60px', color: '#333' }}>
          <ImageIcon size={64} style={{ marginBottom: '20px' }} />
          <p>Containment unit is empty. Transfer assets to begin.</p>
        </div>
      )}
    </div>
  );
};

export default VaultGallery;
