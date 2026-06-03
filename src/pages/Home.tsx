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
            defaultText="Welcome to the Rebellion."
            style={{ fontSize: '2.5rem', marginBottom: '30px' }}
          />
          <div style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#eee' }}>
            <ForgeText id="home-p1" defaultText="We didn't start this fight. But we're not leaving until it's finished." />
            <ForgeText id="home-p2" defaultText="Jesus found us right at the edge of the fire. Not close to it — in it. Smoking. Already gone as far as most people are willing to follow. And He reached in anyway, grabbed us by whatever was left, and pulled us out. The moment we hit fresh air, we fell down. Not from exhaustion. From gratitude so heavy it buckled our knees. We said whatever you want. Whatever it costs. Just tell us what to do with this life you just gave back. And He said — there are people still in there. I'm going back for them. Are you coming? We said yes. That was the day Misfit Ministries was born." style={{ marginTop: '20px' }} />
            <ForgeText id="home-p3" defaultText="Not a church. Not a program. Not a nonprofit with a mission statement written by a committee. A rescue operation. The darkness is not coming. It's already here. And while the comfortable church argues about carpet colors, there are people burning alive in it — people who've never been told the truth about who they are or what He already did about all of it. We are standing at the gap. Holding it open. Fighting off whatever's coming long enough for you to get through, get healed, get strong — and then come stand beside us. Because we need you at the gate. There are people behind you still in the dark." style={{ marginTop: '20px' }} />
          </div>
        </section>

        <div style={{ marginTop: '60px', borderTop: '1px solid #333', paddingTop: '40px' }}>
          <section className="welcome-segment">
            <ForgeText id="home-dope-fiend" defaultText="To the addict who has tried to quit more times than you can count and doesn't know if you have one more try left in you... welcome." />
            <Link to="/welcome/junkie" className="belong-btn">You Belong Here</Link>
          </section>

          <section className="welcome-segment">
            <ForgeText id="home-convict" defaultText="To the convict who found religion in a cell because there was nothing else, and walked out to find the church didn't want someone with a record... welcome." />
            <Link to="/welcome/convict" className="belong-btn">You Belong Here</Link>
          </section>

          <section className="welcome-segment">
            <ForgeText id="home-atheist" defaultText="To the atheist and the nonbeliever who stopped believing because every version of God they were handed was used as a weapon... welcome." />
            <Link to="/welcome/atheist" className="belong-btn">You Belong Here</Link>
          </section>

          <section className="welcome-segment">
            <ForgeText id="home-forgotten" defaultText="To the abused and the forgotten — the ones who were supposed to be protected by people who said they loved them, and weren't... welcome." />
            <Link to="/welcome/forgotten" className="belong-btn">You Belong Here</Link>
          </section>
        </div>
      </div>
    </GhostWrapper>
  );
};

export default Home;