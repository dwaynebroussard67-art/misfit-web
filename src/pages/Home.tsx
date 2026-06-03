import { Link } from 'react-router-dom';
import ForgeText from '../components/ForgeText';
import GhostWrapper from '../components/GhostWrapper';

// IMAGES USED:
// one_king_banner.jpg  → "ONE KING ONE BLOOD ONE WAR" — the army with the cross behind them (full hero)
// khuba_cross.png      → gold Ethiopian cross on black, LOVE underneath
// jesus_lifts_man.png  → crowned Jesus + warrior + kneeling broken man (fire scene)
// chains_breaking.png  → man rising through breaking chains toward light

const Home = () => {
  return (
    <GhostWrapper file="src/pages/Home.tsx">
      <div style={{
        background: '#0a0a0a',
        color: '#eee',
        fontFamily: "'Georgia', 'Times New Roman', serif",
        minHeight: '100vh',
        overflowX: 'hidden',
      }}>

        {/* ── HERO: ONE KING ONE BLOOD ONE WAR ── */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src="/images/one_king_banner.jpg"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'brightness(0.4)',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 30%, rgba(10,10,10,1) 100%)',
          }} />
          <div style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '800px',
          }}>
            <ForgeText
              id="home-title"
              tagName="h1"
              defaultText="Welcome to the Rebellion."
              style={{
                fontSize: 'clamp(2.2rem, 7vw, 4rem)',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '0.04em',
                textShadow: '0 2px 40px rgba(0,0,0,0.9)',
                margin: 0,
              }}
            />
            <div style={{
              marginTop: '20px',
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}>
              One King. One Blood. One War.
            </div>
          </div>
        </div>

        {/* ── ORIGIN STORY ── */}
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 32px 0' }}>
          <div style={{ fontSize: '1.25rem', lineHeight: '2', color: '#ddd' }}>
            <ForgeText
              id="home-p1"
              defaultText="We didn't start this fight. But we're not leaving until it's finished."
            />
            <ForgeText
              id="home-p2"
              defaultText="Jesus found us right at the edge of the fire. Not close to it — in it. Smoking. Already gone as far as most people are willing to follow. And He reached in anyway, grabbed us by whatever was left, and pulled us out. The moment we hit fresh air, we fell down. Not from exhaustion. From gratitude so heavy it buckled our knees. We said whatever you want. Whatever it costs. Just tell us what to do with this life you just gave back. And He said — there are people still in there. I'm going back for them. Are you coming? We said yes. That was the day Misfit Ministries was born."
              style={{ display: 'block', marginTop: '28px' }}
            />
          </div>
        </div>

        {/* ── JESUS LIFTS THE BROKEN MAN — left-bleeding full image ── */}
        <div style={{
          position: 'relative',
          margin: '80px 0',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{
            width: 'clamp(280px, 50vw, 640px)',
            height: 'clamp(380px, 65vh, 750px)',
            overflow: 'hidden',
            flexShrink: 0,
            position: 'relative',
          }}>
            <img
              src="/images/jesus_lifts_man.png"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.65)',
              }}
            />
            <div style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '40%',
              background: 'linear-gradient(to left, #0a0a0a, transparent)',
            }} />
          </div>
          <div style={{ padding: '0 clamp(24px, 5vw, 80px)', maxWidth: '480px' }}>
            <ForgeText
              id="home-p3"
              defaultText="Not a church. Not a program. Not a nonprofit with a mission statement written by a committee. A rescue operation. The darkness is not coming. It's already here. And while the comfortable church argues about carpet colors, there are people burning alive in it — people who've never been told the truth about who they are or what He already did about all of it. We are standing at the gap."
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                lineHeight: '1.9',
                color: '#ddd',
                fontStyle: 'italic',
              }}
            />
          </div>
        </div>

        {/* ── KHUBA CROSS DIVIDER ── */}
        <div style={{ textAlign: 'center', padding: '60px 32px', background: '#000' }}>
          <img
            src="/images/khuba_cross.png"
            alt="Khuba — Love"
            style={{
              maxWidth: 'clamp(220px, 40vw, 480px)',
              width: '100%',
              opacity: 0.9,
            }}
          />
        </div>

        {/* ── WELCOME SECTIONS ── */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 32px 0' }}>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            textAlign: 'center',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: '60px',
            fontWeight: '400',
          }}>
            You were expected here.
          </h2>

          {[
            {
              id: 'home-dope-fiend',
              text: "To the addict who has tried to quit more times than you can count and doesn't know if you have one more try left in you... welcome.",
              path: '/welcome/junkie',
            },
            {
              id: 'home-convict',
              text: "To the convict who found religion in a cell because there was nothing else, and walked out to find the church didn't want someone with a record... welcome.",
              path: '/welcome/convict',
            },
            {
              id: 'home-atheist',
              text: "To the atheist and the nonbeliever who stopped believing because every version of God they were handed was used as a weapon... welcome.",
              path: '/welcome/atheist',
            },
            {
              id: 'home-forgotten',
              text: "To the abused and the forgotten — the ones who were supposed to be protected by people who said they loved them, and weren't... welcome.",
              path: '/welcome/forgotten',
            },
          ].map((seg, i) => (
            <section
              key={seg.id}
              style={{
                marginBottom: '60px',
                paddingBottom: '60px',
                borderBottom: i < 3 ? '1px solid #222' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <ForgeText
                id={seg.id}
                defaultText={seg.text}
                style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                  lineHeight: '1.8',
                  color: '#ccc',
                }}
              />
              <div>
                <Link
                  to={seg.path}
                  className="belong-btn"
                  style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: '#fff',
                    border: '1px solid #8B0000',
                    padding: '12px 32px',
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    transition: 'all 0.2s ease',
                  }}
                >
                  You Belong Here
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* ── CHAINS BREAKING — closing image ── */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(400px, 70vh, 700px)',
          overflow: 'hidden',
          marginTop: '40px',
        }}>
          <img
            src="/images/chains_breaking.png"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.5)',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 20%, transparent 80%, #0a0a0a 100%)',
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center', color: '#fff', padding: '0 32px' }}>
              <div style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textShadow: '0 2px 30px rgba(0,0,0,0.9)',
              }}>
                We need you at the gate.
              </div>
              <div style={{
                marginTop: '8px',
                fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.2em',
              }}>
                There are people behind you still in the dark.
              </div>
            </div>
          </div>
        </div>

      </div>
    </GhostWrapper>
  );
};

export default Home;