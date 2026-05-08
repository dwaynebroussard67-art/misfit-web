import { useParams } from 'react-router-dom';

const WelcomeJourney = () => {
  const { type } = useParams();

  const content: Record<string, {title: string, message: string}> = {
    junkie: {
      title: "TO THE DOPE FIEND",
      message: "This is the long version of the welcome for the former and current dope fiends who have lived in the cycle of the rush and the crash. We know the hunger that never fills. Here, we don't fix you—we walk with you through the wreckage until you find the source of the true living water."
    },
    convict: {
      title: "TO THE CONVICT",
      message: "The state gave you a number, but the King gave you a name. Whether you're still behind the wire or you're walking the bricks, your past is the soil where your future grows. We don't see the crime; we see the man the fires created."
    },
    atheist: {
      title: "TO THE NON-BELIEVER",
      message: "You've been lied to by men in suits and stained glass. You're not looking for a god you can't see; you're looking for a truth you can't deny. We don't ask you to leave your brain at the door. Bring your doubts, your questions, and your anger. The truth isn't fragile."
    },
    forgotten: {
      title: "TO THE FORGOTTEN",
      message: "The world looked past you. Your family walked away. You've been sleeping in the damp air and the shadows. You think you're invisible, but you are the very person the King left the ninety-nine to find. Your seat at the table has been empty, waiting for you."
    }
  };

  const journey = content[type || 'forgotten'];

  return (
    <div className="welcome-container">
      <section className="welcome-intro">
        <h1>{journey.title}</h1>
        <p style={{ marginTop: '40px', fontSize: '1.4rem', color: '#fff' }}>{journey.message}</p>
        <div style={{ marginTop: '60px' }}>
          <p style={{ color: '#888' }}>The journey begins here. Explore the Ministry, the Vault, or talk to Nura if you need to carry the load.</p>
        </div>
      </section>
    </div>
  );
};

export default WelcomeJourney;