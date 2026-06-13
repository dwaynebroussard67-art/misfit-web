import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

const ForgeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (response.ok && data.status === 'success') {
        localStorage.setItem('forge_active', 'true');
        localStorage.setItem('user_role', data.role);
        localStorage.setItem('user_email', email);
        
        if (data.role === 'admin') {
          navigate('/forge');
        } else {
          navigate('/home');
        }
      } else {
        setError(data.detail || 'Invalid Login');
      }
    } catch {
      setError('Connection failed. Server might be down.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="welcome-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div style={{ backgroundColor: '#111', padding: '40px', borderRadius: '10px', border: '1px solid #ff3c3c', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <Lock size={48} color="#ff3c3c" style={{ marginBottom: '20px' }} />
        <h2 style={{ marginBottom: '30px' }}>Misfit Login</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div style={{ position: 'relative', marginBottom: '15px' }}>
            <Mail size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: '#555' }} />
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              style={inputStyle}
            />
          </div>

          {/* Password Input with Toggle */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: '#555' }} />
            <input 
              type={showPassword ? 'text' : 'password'} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={inputStyle}
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: '12px', top: '12px', background: 'none', border: 'none', color: '#555', cursor: 'pointer' }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && <p style={{ color: '#ff3c3c', fontSize: '0.8rem', marginBottom: '20px' }}>{error}</p>}
          
          <button 
            type="submit"
            className="belong-btn"
            disabled={loading}
            style={{ width: '100%', border: '1px solid #ff3c3c', color: '#ff3c3c' }}
          >
            {loading ? 'Entering...' : 'Unlock Access'}
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 40px',
  background: '#0a0a0a',
  border: '1px solid #333',
  color: '#fff',
  outline: 'none',
  boxSizing: 'border-box' as const,
  fontFamily: 'Courier New, monospace'
};

export default ForgeLogin;
