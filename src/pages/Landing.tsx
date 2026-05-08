import { Link } from 'react-router-dom';
import ForgeText from '../components/ForgeText';
import ForgeImage from '../components/ForgeImage';
import GhostWrapper from '../components/GhostWrapper';

const Landing = () => {
  return (
    <GhostWrapper file="src/pages/Landing.tsx">
      <div className="welcome-container landing-page" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image Layer */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, opacity: 0.3 }}>
        <ForgeImage 
          id="landing-bg" 
          defaultSrc="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop" 
          alt="Landing Background"
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        />
      </div>

      <section className="welcome-intro" style={{ position: 'relative', zIndex: 1 }}>
        <ForgeText 
          id="landing-title"
          tagName="h1"
          defaultText="Welcome to the Invisible War"
          style={{ color: '#ff0000', fontSize: '3.5rem', fontWeight: 'bold', textTransform: 'uppercase' }}
        />
        
        <div className="landing-content" style={{ marginTop: '40px', lineHeight: '1.6', fontSize: '1.2rem' }}>
          <ForgeText id="landing-p1" defaultText="If this doesn't look like a church and I don't look like a pastor, good—because you're not gonna find religion here." />
          <ForgeText id="landing-p2" defaultText="This isn't a place for pretty stained glass, and the people who always look good and smell good and act like their life is perfect." />
          <ForgeText id="landing-p3" defaultText="This isn't a place for Instagram posts or memes; this is a place where the wounded can find shelter and heal so they are able to continue to fight back." />
          <ForgeText id="landing-p4" defaultText="This is for the called and the chosen, the forgotten and the neglected. It's not a spectator sport; it's for active participants in an ongoing rescue mission for the souls of mankind." />
          
          <ForgeText 
            id="landing-call"
            tagName="p"
            defaultText="The General and the King need you."
            style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '30px' }}
          />

          <ForgeText 
            id="landing-closing"
            tagName="p"
            defaultText="The world saw your flaws as failures, but we see them as the foundations of your future and evidence that the enemy's greatest tactics could not stop you from getting here."
            style={{ marginTop: '20px', fontSize: '1.3rem', color: '#ccc' }}
          />
        </div>

        <div style={{ marginTop: '60px' }}>
          <Link to="/home" className="belong-btn" style={{ padding: '15px 40px', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Welcome to the Rebellion
          </Link>
        </div>

        <footer style={{ marginTop: '80px', fontSize: '0.8rem', color: '#666', fontStyle: 'italic' }}>
          <ForgeText id="landing-footer" tagName="span" defaultText="dictated by the Iron Scribe" />
        </footer>
      </section>
    </div>
    </GhostWrapper>
  );
};

export default Landing;
