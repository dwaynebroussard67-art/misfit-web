import { useState } from 'react';
import { Phone, MapPin, AlertTriangle } from 'lucide-react';

const NarcanWatch = () => {
  const [locationSent, setLocationSent] = useState(false);

  const handleAlert = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Alerting Misfits with location:", position.coords.latitude, position.coords.longitude);
        // This will eventually integrate with a backend alert system
        setLocationSent(true);
      }, (error) => {
        console.error("Error getting location:", error);
        alert("Could not get location. Ensure GPS is on.");
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="welcome-container" style={{ textAlign: 'center', padding: '20px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ color: '#ff0000', fontSize: '3rem', fontWeight: 'bold' }}>NARCAN WATCH</h1>
        <p style={{ fontSize: '1.2rem', color: '#fff' }}>EMERGENCY OVERDOSE RESPONSE</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '500px', margin: '0 auto' }}>
        
        {/* I NEED HELP LABEL */}
        <h2 style={{ color: '#ff3c3c', fontFamily: "'Arial Black', Impact, sans-serif", fontSize: '2.5rem', textShadow: '3px 3px 6px #000', margin: '0 0 -10px 0' }}>
          I NEED HELP
        </h2>

        {/* CALL 911 BUTTON */}
        <a 
          href="tel:911" 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            backgroundColor: '#ff0000',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            fontSize: '2rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)'
          }}
        >
          <Phone size={48} />
          CALL 911 NOW
        </a>

        {/* ALERT MISFITS BUTTON */}
        <button 
          onClick={handleAlert}
          disabled={locationSent}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            backgroundColor: locationSent ? '#333' : '#000',
            color: locationSent ? '#888' : '#fff',
            padding: '25px',
            borderRadius: '15px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            border: '2px solid #ff0000',
            cursor: locationSent ? 'default' : 'pointer'
          }}
        >
          <MapPin size={32} color={locationSent ? '#888' : '#ff0000'} />
          {locationSent ? "LOCATION SENT TO MISFITS" : "ALERT THE MISFITS"}
        </button>

        {locationSent && (
          <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid #ff0000' }}>
            <p style={{ color: '#fff', fontSize: '1.1rem' }}>
              <AlertTriangle size={24} color="#ff0000" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
              Location shared. Misfit First Responders with Narcan in your area are being notified. **STAY CALM. CALL 911 FIRST.**
            </p>
          </div>
        )}

      </div>

      <footer style={{ marginTop: '60px', color: '#888', fontStyle: 'italic' }}>
        "Greater love hath no man than this, that a man lay down his life for his friends." - John 15:13
      </footer>
    </div>
  );
};

export default NarcanWatch;
