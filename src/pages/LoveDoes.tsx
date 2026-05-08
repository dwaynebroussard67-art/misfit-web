import { Link } from 'react-router-dom';

const LoveDoes = () => {
  return (
    <>
      <div className="hero">
        <h1>THAT'S WHAT LOVE DOES</h1>
        <p>The Master Teaching Hub.</p>
      </div>

      <div className="section">
        <h1>The Covenant</h1>
        <p>When you are in the cold, quiet sanctuary of a hospital chapel, you make a choice. You drop to your knees and make a covenant. To be better. To carry the load.</p>
        
        <p>This is the teaching hub of Misfit Ministries. Here, we explore the profound, action-oriented nature of love. Love isn't just a feeling; it is lifting the heaviest piece in the shop over your head. It is offering a family for fifty bucks a week. It is a gesture of trust that feels heavier than any sofa.</p>

        <div className="card-grid">
          <div className="card">
            <h2>The Choice</h2>
            <p>When the King moves you, you must choose to accept the weight. The path isn't easy, but it is purposeful.</p>
          </div>
          <div className="card">
            <h2>The Giant</h2>
            <p>Sometimes grace looks like a man who beats you in chess ten moves in a row, just to show you how to rebuild.</p>
          </div>
        </div>

        <br /><br />
        <Link className="button" to="/vault">Unlock Full Teachings</Link>
      </div>
    </>
  );
};

export default LoveDoes;
