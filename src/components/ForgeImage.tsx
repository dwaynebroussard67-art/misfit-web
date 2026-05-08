import React, { useState, useEffect } from 'react';
import { useForge } from '../context/ForgeContext';
import { Upload, Library } from 'lucide-react';

interface ForgeImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

interface Asset {
  id: number;
  name: string;
  data: string;
}

const ForgeImage: React.FC<ForgeImageProps> = ({ id, defaultSrc, alt, className, style }) => {
  const { isForgeActive, siteData, updateSiteData } = useForge();
  const [isHovered, setIsHovered] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);

  const src = siteData[id] || defaultSrc;

  useEffect(() => {
    if (isForgeActive && showPicker) {
      fetch('/api/assets')
        .then(res => res.json())
        .then(data => setAssets(data))
        .catch(err => console.error("Failed to load gallery assets:", err));
    }
  }, [isForgeActive, showPicker]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      updateSiteData(id, base64String);
    };
    reader.readAsDataURL(file);
  };

  const selectAsset = (assetData: string) => {
    updateSiteData(id, assetData);
    setShowPicker(false);
  };

  return (
    <div 
      style={{ position: 'relative', display: 'inline-block', ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} className={className} style={{ display: 'block', width: '100%', height: 'auto' }} />
      
      {isForgeActive && isHovered && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          cursor: 'default',
          border: '2px dashed #ff3c3c',
          zIndex: 10
        }}>
          <label style={{ cursor: 'pointer', textAlign: 'center', color: '#fff' }}>
            <Upload size={24} />
            <div style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>UPLOAD NEW</div>
            <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          </label>
          
          <button 
            onClick={() => setShowPicker(true)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#fff', 
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <Library size={24} />
            <div style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>GALLERY</div>
          </button>
        </div>
      )}

      {showPicker && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: 1000,
          padding: '40px',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#ff3c3c' }}>SELECT FROM GALLERY</h2>
            <button onClick={() => setShowPicker(false)} style={{ color: '#fff', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}>×</button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
            {assets.map(asset => (
              <div 
                key={asset.id} 
                onClick={() => selectAsset(asset.data)}
                style={{ cursor: 'pointer', border: '1px solid #333', borderRadius: '8px', overflow: 'hidden' }}
              >
                <img src={asset.data} alt={asset.name} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
              </div>
            ))}
            {assets.length === 0 && <p style={{ color: '#555' }}>Gallery is empty.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgeImage;
