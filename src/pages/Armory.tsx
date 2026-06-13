import { useState } from 'react';

const Armory = () => {
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState<string | null>(null);

  const handleInterest = async (item: string) => {
    if (!email) {
      setShowForm(item);
      return;
    }

    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item, email })
      });
      if (response.ok) {
        alert(`We have noted your stand for ${item}. We will reach out when the iron is hot.`);
        setEmail('');
        setShowForm(null);
      }
    } catch (err) {
      console.error(err);
      alert('The forge is down. Try again later.');
    }
  };

  return (
    <>
      <div className="hero">
        <h1>THE ARMORY</h1>
        <p>Hoodies. Gear. Movement.</p>
      </div>

      <div className="section">
        <h1>Suit Up</h1>
        <p>This isn't just clothing; it's a declaration. When you wear the Misfit mark, you stand with the broken, the discarded, and those still fighting to breathe.</p>
        
        {showForm && (
          <div className="card" style={{ marginBottom: '20px', borderColor: 'gold' }}>
            <h3>INTERESTED IN {showForm.toUpperCase()}?</h3>
            <p>Drop your email to be notified when the drop happens.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1 }}
              />
              <button onClick={() => handleInterest(showForm)}>JOIN THE LIST</button>
              <button className="secondary" onClick={() => setShowForm(null)}>CANCEL</button>
            </div>
          </div>
        )}

        <div className="card-grid">
          <div className="card">
            <h2>The Iron Scribe Hoodie</h2>
            <p>Heavyweight fabric for heavy burdens. Keep warm in the trenches.</p>
            <button className="button" onClick={() => handleInterest('Iron Scribe Hoodie')}>Pre-order</button>
          </div>
          <div className="card">
            <h2>"Second Chance" Tee</h2>
            <p>Wear your story. Crimson on black. Unapologetic.</p>
            <button className="button" onClick={() => handleInterest('Second Chance Tee')}>Pre-order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Armory;
