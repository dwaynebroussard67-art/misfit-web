import { Link } from 'react-router-dom';
import ForgeText from '../components/ForgeText';
import GhostWrapper from '../components/GhostWrapper';

const Home = () => {
  return (
    <GhostWrapper file="src/pages/Home.tsx">
      <div className="welcome-container">
      <section className="welcome-intro">
        <ForgeText 
          id="home-title"
          tagName="h1"
          defaultText="Welcome to Misfit Ministries"
          style={{ fontSize: '2.5rem', marginBottom: '30px' }}
        />
        <div style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#eee' }}>
          <ForgeText id="home-p1" defaultText="A place where your scars are not proof of your failures, but evidence that the enemy's best attacks couldn't kill you." />
          <ForgeText id="home-p2" defaultText="A place where we believe that your flaws and failures are the foundation of your future and evidence that the enemy couldn't kill you—only delay you." style={{ marginTop: '20px' }} />
        </div>
      </section>

      <div style={{ marginTop: '60px', borderTop: '1px solid #333', paddingTop: '40px' }}>
        <section className="welcome-segment">
          <ForgeText id="home-dope-fiend" defaultText="To the former and current dope fiend... welcome." />
          <Link to="/welcome/junkie" className="belong-btn">You Belong Here</Link>
        </section>

        <section className="welcome-segment">
          <ForgeText id="home-convict" defaultText="To the convict that the state put a number on your back and time on your head... welcome." />
          <Link to="/welcome/convict" className="belong-btn">You Belong Here</Link>
        </section>

        <section className="welcome-segment">
          <ForgeText id="home-atheist" defaultText="To the atheist and the non-believer... welcome." />
          <Link to="/welcome/atheist" className="belong-btn">You Belong Here</Link>
        </section>

        <section className="welcome-segment">
          <ForgeText id="home-forgotten" defaultText="To the forgotten and the abandoned... welcome." />
          <Link to="/welcome/forgotten" className="belong-btn">You Belong Here</Link>
        </section>
      </div>
    </div>
    </GhostWrapper>
  );
};

export default Home;