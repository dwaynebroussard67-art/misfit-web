import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent. Hold on, help is coming.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('The line is busy. Try again soon.');
      }
    } catch (err) {
      console.error(err);
      alert('Connection failed. We are in the trenches, try again.');
    }
  };

  return (
    <>
      <div className="hero">
        <h1>CONTACT</h1>
        <p>Reach out. We are listening.</p>
      </div>

      <div className="section" style={{ maxWidth: '600px' }}>
        <h1>Send a Message</h1>
        <p>Whether you need a lifeline, want to share your story, or just need to know someone is there.</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required 
          />
          <textarea 
            placeholder="Your Story / Message" 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>

        <br /><br />
        <div className="card" style={{ textAlign: 'center', borderColor: 'red' }}>
          <h2 style={{ color: 'red' }}>Emergency</h2>
          <p>If you are in immediate crisis, do not wait.</p>
          <a className="button emergency" href="tel:988">Dial 988</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
