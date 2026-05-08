import { useState } from 'react';

const Vault = () => {
  const [key, setKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Invalid Key.');
  };

  return (
    <>
      <div className="hero">
        <h1>THE VAULT</h1>
        <p>Exclusive teachings. Raw truth. Unfiltered.</p>
      </div>

      <div className="section" style={{ textAlign: 'center' }}>
        <h1>Restricted Access</h1>
        <p>The Vault contains deep dives, raw manuscripts, and unfiltered sessions. It requires a key.</p>
        
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '40px auto' }}>
          <input 
            type="password" 
            placeholder="Enter Vault Key" 
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required 
          />
          <button type="submit">Unlock</button>
        </form>

        <p style={{ color: '#666', fontSize: '0.9rem' }}>Keys are granted to members of the Armory.</p>
      </div>
    </>
  );
};

export default Vault;
