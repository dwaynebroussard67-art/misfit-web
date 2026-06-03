import { Link } from 'react-router-dom';
import ForgeText from '../components/ForgeText';
import GhostWrapper from '../components/GhostWrapper';

const Landing = () => {
  return (
    <GhostWrapper file="src/pages/Landing.tsx">
      <div className="welcome-container">
        <section className="welcome-intro">
          <ForgeText
            id="landing-title"
            tagName="h1"
            defaultText="You found it. Stop running. Breathe."
            style={{ fontSize: '2.5rem', marginBottom: '30px' }}
          />
          <div style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#eee' }}>
            <ForgeText id="landing-p1" defaultText="You don't have to explain yourself here. Not what you did. Not what was done to you. Not the years, not the nights, not the names you called yourself when nobody was listening. He already knows all of it. He was there. Every single time. Standing right next to you in the dark — not to record it, not to use it against you — but because He refused to let you be alone in it. And when it was all said and done, He looked at all of it. And He chose you anyway." />
            <ForgeText id="landing-p2" defaultText="That's not the Jesus they sold you. That's the real one. The Lion of Judah. Iyesus Kristos. The Ancient of Days who was brown and beaten and buried and still came back. The one whose name has more power in it than any church building you ever walked out of feeling worse than when you came in." style={{ marginTop: '20px' }} />
            <ForgeText id="landing-p3" defaultText="Your scars aren't failures. They're evidence. Evidence that everything the enemy threw at you — every weapon, every night, every cell, every needle, every lie — not one of them could finish you. You're still here. So are we." style={{ marginTop: '20px' }} />
          </div>
        </section>

        <div style={{ marginTop: '60px', borderTop: '1px solid #555', paddingTop: '40px', borderColor: '#8B0000' }}>
          <ForgeText
            id="landing-warning-title"
            tagName="h2"
            defaultText="⚠ A Warning Before You Enter"
            style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#ff4444' }}
          />
          <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc' }}>
            <ForgeText id="landing-warning-p1" defaultText="This is not a casual place. You are welcome to look around. Buy something if you want to support the work. Tell somebody about us. Listen to what we teach about Jesus. All of that is yours, no questions asked." />
            <ForgeText id="landing-warning-p2" defaultText="But if you're thinking about calling yourself a Misfit — stop. And understand what that means before you say it. This ground is hallowed. It was paid for in blood — His first, and then the blood of every broken soldier who crawled their way here and decided to stay and fight for the person coming in behind them." style={{ marginTop: '20px' }} />
            <ForgeText id="landing-warning-p3" defaultText="We don't want your religion. We don't want your agenda. We want one thing. Did you walk in darkness? Do you know what it costs to survive a night that was trying to kill you? Are you done walking it alone? If that's you — walk through." style={{ marginTop: '20px' }} />
            <ForgeText id="landing-warning-p4" defaultText="Because the moment you do, you don't walk alone again. Not ever. We stand. We don't flinch. We don't turn our backs. If you die, we die with you. But we don't plan on dying. We plan on winning. Because the one who called us here already defeated everything that's coming for you — and He did it with His hands nailed down." style={{ marginTop: '20px' }} />
          </div>
        </div>

        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <Link to="/home" className="belong-btn" style={{ fontSize: '1.4rem', padding: '16px 40px' }}>
            Welcome Home, Misfit
          </Link>
        </div>
      </div>
    </GhostWrapper>
  );
};

export default Landing;