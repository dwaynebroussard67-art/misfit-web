const Live = () => {
  return (
    <>
      <div className="hero">
        <h1>LIVE SESSIONS</h1>
        <p>Gather with the broken.</p>
      </div>

      <div className="section" style={{ textAlign: 'center' }}>
        <h1>Next Broadcast</h1>
        
        <div className="card" style={{ margin: '40px auto', maxWidth: '600px' }}>
          <h2>The Texas Shift: Overcoming the Ghosts</h2>
          <p style={{ color: '#dc143c', fontWeight: 'bold' }}>Friday @ 8:00 PM CST</p>
          <p>Join us as we dive into chapter 17, unpacking the pressure, the breaking point, and finding a sanctuary that isn't at the bottom of a bottle.</p>
          <a href="#" className="button" onClick={(e) => e.preventDefault()}>Set Reminder</a>
        </div>

        <div style={{ marginTop: '60px', padding: '40px', border: '1px dashed #333' }}>
          <p><em>Stream offline. Broadcast will begin here.</em></p>
        </div>
      </div>
    </>
  );
};

export default Live;
