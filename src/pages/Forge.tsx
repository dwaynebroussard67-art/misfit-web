import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hammer, Image, ShoppingBag, Brain, Play, Square, LogOut, Eye, EyeOff, Layout, Plus, Trash2, Ghost } from 'lucide-react';
import { useForge } from '../context/ForgeContext';

interface DynamicPage {
  path: string;
  title: string;
}

const Forge = () => {
  const [autopilot, setAutopilot] = useState(false);
  const [showArchitect, setShowArchitect] = useState(false);
  const [customPages, setCustomPages] = useState<DynamicPage[]>([]);
  const [newPage, setNewPage] = useState({ path: '', title: '' });
  
  const { isForgeActive, setIsForgeActive, isGhostActive, setIsGhostActive } = useForge();
  const navigate = useNavigate();

  const loadPages = async () => {
    try {
      const res = await fetch('/api/pages');
      const data = await res.json();
      setCustomPages(data);
    } catch (err) {
      console.error("Failed to load custom pages:", err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('forge_active') !== 'true') {
      navigate('/forge-login');
      return;
    }
    loadPages();
  }, [navigate]);

  const handleCreatePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPage.path.startsWith('/')) {
      alert("Path must start with / (e.g. /my-new-page)");
      return;
    }
    try {
      await fetch('/api/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPage)
      });
      setNewPage({ path: '', title: '' });
      loadPages();
    } catch (err) {
      console.error("Failed to create page:", err);
    }
  };

  const deletePage = async (path: string) => {
    if (!window.confirm(`Delete page ${path}?`)) return;
    try {
      await fetch(`/api/pages/${encodeURIComponent(path)}`, { method: 'DELETE' });
      loadPages();
    } catch (err) {
      console.error("Failed to delete page:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('forge_active');
    setIsForgeActive(false);
    setIsGhostActive(false);
    navigate('/');
  };

  const toggleForgeMode = () => {
    setIsForgeActive(!isForgeActive);
  };

  const toggleGhostMode = () => {
    setIsGhostActive(!isGhostActive);
  };

  return (
    <div className="welcome-container" style={{ paddingBottom: '100px' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ color: '#ff3c3c' }}>The Forge</h1>
        <p style={{ fontStyle: 'italic', color: '#888' }}>Administrative Command Center</p>
        
        <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '0 20px' }}>
          <button 
            onClick={toggleForgeMode}
            className="belong-btn"
            style={{ 
              backgroundColor: isForgeActive ? '#ff3c3c' : 'transparent',
              color: isForgeActive ? '#fff' : '#ff3c3c',
              border: '2px solid #ff3c3c',
              minWidth: '280px'
            }}
          >
            {isForgeActive ? <EyeOff size={18} style={{marginRight: '10px'}} /> : <Eye size={18} style={{marginRight: '10px'}} />}
            {isForgeActive ? 'DEACTIVATE VISUAL EDITOR' : 'ACTIVATE VISUAL EDITOR'}
          </button>

          <button 
            onClick={toggleGhostMode}
            className="belong-btn"
            style={{ 
              backgroundColor: isGhostActive ? '#ff3c3c' : 'transparent',
              color: isGhostActive ? '#fff' : '#ff3c3c',
              border: '2px solid #ff3c3c',
              minWidth: '280px'
            }}
          >
            <Ghost size={18} style={{marginRight: '10px'}} />
            {isGhostActive ? 'DEACTIVATE GHOST AI' : 'ACTIVATE GHOST AI'}
          </button>
        </div>
      </header>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', padding: '0 20px' }}>
        
        {/* Content Manipulation */}
        <div className="forge-card" style={cardStyle}>
          <Hammer size={32} color="#ff3c3c" />
          <h3>Content Forge</h3>
          <p>Manipulate site text, sizes, and layout in real-time.</p>
          <button className="belong-btn" style={btnStyle}>Open Editor</button>
        </div>

        {/* The Vault */}
        <div className="forge-card" style={cardStyle}>
          <Image size={32} color="#ff3c3c" />
          <h3>The Vault</h3>
          <p>Manage background images, foreground assets, and media.</p>
          <button className="belong-btn" onClick={() => navigate('/forge/vault')} style={btnStyle}>Browse Assets</button>
        </div>

        {/* Armory Manager */}
        <div className="forge-card" style={cardStyle}>
          <ShoppingBag size={32} color="#ff3c3c" />
          <h3>Armory Manager</h3>
          <p>Update merchandise prices, images, and descriptions.</p>
          <button className="belong-btn" style={btnStyle}>Manage Store</button>
        </div>

        {/* Nura's True Soul */}
        <div className="forge-card" style={cardStyle}>
          <Brain size={32} color="#ff3c3c" />
          <h3>Nura's Soul</h3>
          <p>Manage Nura's memory and historical conversation data.</p>
          <button className="belong-btn" style={btnStyle}>Inspect Memory</button>
        </div>

        {/* Page Architect */}
        <div className="forge-card" style={cardStyle}>
          <Layout size={32} color="#ff3c3c" />
          <h3>Page Architect</h3>
          <p>Create new dynamic pages and manage website structure.</p>
          <button className="belong-btn" onClick={() => setShowArchitect(true)} style={btnStyle}>Open Architect</button>
        </div>

        </div>

        {showArchitect && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.95)',
          zIndex: 1000,
          padding: '40px',
          overflowY: 'auto'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <h1 style={{ color: '#ff3c3c', margin: 0 }}>PAGE ARCHITECT</h1>
              <button onClick={() => setShowArchitect(false)} style={{ color: '#fff', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}>×</button>
            </div>

            <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #333', marginBottom: '40px' }}>
              <h3>CREATE NEW PAGE</h3>
              <form onSubmit={handleCreatePage} style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <input 
                  placeholder="URL Path (e.g. /battle-plans)" 
                  value={newPage.path}
                  onChange={e => setNewPage({...newPage, path: e.target.value})}
                  required
                  style={{ flex: 1, background: '#222', color: '#fff', border: '1px solid #444', padding: '12px' }}
                />
                <input 
                  placeholder="Page Title" 
                  value={newPage.title}
                  onChange={e => setNewPage({...newPage, title: e.target.value})}
                  required
                  style={{ flex: 1, background: '#222', color: '#fff', border: '1px solid #444', padding: '12px' }}
                />
                <button type="submit" style={{ backgroundColor: '#ff3c3c', color: '#fff', border: 'none', padding: '0 30px', fontWeight: 'bold', cursor: 'pointer' }}>
                  <Plus size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                  CREATE
                </button>
              </form>
            </div>

            <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
              <h3>EXISTING PAGES</h3>
              <div style={{ marginTop: '20px' }}>
                {customPages.length === 0 ? <p style={{ color: '#555' }}>No custom pages yet.</p> : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {customPages.map(page => (
                      <div key={page.path} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#0a0a0a', border: '1px solid #222', borderRadius: '8px' }}>
                        <div>
                          <strong style={{ color: '#ff3c3c' }}>{page.title}</strong>
                          <span style={{ marginLeft: '15px', color: '#555', fontSize: '0.9rem' }}>{page.path}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <button onClick={() => navigate(page.path)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '0.8rem' }}>VIEW PAGE</button>
                          <button onClick={() => deletePage(page.path)} style={{ background: 'none', border: 'none', color: '#ff3c3c', cursor: 'pointer' }}>
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Autopilot Section */}
      <div style={{ marginTop: '60px', padding: '40px', backgroundColor: '#111', borderRadius: '15px', border: '1px solid #333', textAlign: 'center', margin: '0 20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Autopilot</h2>
        <p style={{ marginBottom: '30px', color: '#aaa' }}>Give the Media and Merchandise AI agents the freedom to run background processes.</p>
        
        <button 
          onClick={() => setAutopilot(!autopilot)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            margin: '0 auto',
            padding: '20px 50px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: autopilot ? '#ff3c3c' : '#222',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
        >
          {autopilot ? <Square size={24} /> : <Play size={24} />}
          {autopilot ? 'DEACTIVATE AUTOPILOT' : 'ACTIVATE AUTOPILOT'}
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', textDecoration: 'underline' }}>
          <LogOut size={16} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
          Log Out of Forge
        </button>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#111',
  padding: '30px',
  borderRadius: '15px',
  border: '1px solid #222',
  textAlign: 'center' as const,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center' as const,
  gap: '15px'
};

const btnStyle = {
  width: '100%',
  fontSize: '0.9rem',
  padding: '10px 0',
  marginTop: '10px'
};

export default Forge;
