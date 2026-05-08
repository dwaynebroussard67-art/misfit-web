import { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface Asset {
  id: number;
  name: string;
  data: string;
  type: string;
}

const ArtGallery = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    loadAssets();
  }, []);

  return (
    <div className="welcome-container" style={{ padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ color: '#ff3c3c', fontSize: '3rem', fontWeight: 'bold' }}>ART GALLERY</h1>
        <p style={{ color: '#888', fontStyle: 'italic', fontSize: '1.2rem' }}>
          "Visual testimonies of the war we fight and the hope we carry."
        </p>
      </header>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '100px' }}>
          <p style={{ fontSize: '1.5rem', color: '#555' }}>Illuminating the gallery...</p>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '30px',
          padding: '0 20px'
        }}>
          {assets.map(asset => (
            <div key={asset.id} className="gallery-item" style={{ 
              backgroundColor: '#111', 
              borderRadius: '15px', 
              overflow: 'hidden', 
              border: '1px solid #222',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img 
                  src={asset.data} 
                  alt={asset.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '20px', backgroundColor: '#0a0a0a' }}>
                <h3 style={{ margin: 0, color: '#eee', fontSize: '1.1rem' }}>{asset.name}</h3>
                <p style={{ color: '#555', fontSize: '0.8rem', marginTop: '5px' }}>
                  {asset.type.split('/')[1].toUpperCase()} ASSET
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {assets.length === 0 && !loading && (
        <div style={{ textAlign: 'center', padding: '100px', color: '#333' }}>
          <ImageIcon size={80} style={{ marginBottom: '20px', opacity: 0.2 }} />
          <p style={{ fontSize: '1.2rem' }}>The gallery is currently being curated. Check back soon.</p>
        </div>
      )}

      <style>{`
        .gallery-item:hover {
          transform: translateY(-10px);
          border-color: #ff3c3c;
        }
      `}</style>
    </div>
  );
};

export default ArtGallery;
