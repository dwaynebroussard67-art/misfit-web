import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="main-nav">
      <div className="nav-container">
        {/* Narcan Watch Button - Centered and lower */}
        <div className="secondary-emergency-container">
          <div className="emergency-label-top">EMERGENCY</div>
          <Link to="/narcan-watch" className="narcan-circle-btn">
            {/* Red Medical Cross */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3H14V10H21V14H14V21H10V14H3V10H10V3Z" fill="#ff0000" />
            </svg>
          </Link>
          <div className="emergency-label-bottom">I NEED HELP</div>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="menu-links" onClick={e => e.stopPropagation()}>
            <NavLink to="/" end onClick={() => setIsOpen(false)}>The Front</NavLink>
            <NavLink to="/home" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/ministry" onClick={() => setIsOpen(false)}>Ministry</NavLink>
            <NavLink to="/origins" onClick={() => setIsOpen(false)}>Origins</NavLink>
            <NavLink to="/love-does" onClick={() => setIsOpen(false)}>Love Does</NavLink>
            <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
            <NavLink to="/armory" onClick={() => setIsOpen(false)}>Armory</NavLink>
            <NavLink to="/vault" onClick={() => setIsOpen(false)}>The Vault</NavLink>
            <NavLink to="/live" onClick={() => setIsOpen(false)}>Live</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
            
            <div style={{ marginTop: '40px', borderTop: '1px solid #222', paddingTop: '20px' }}>
              <NavLink to="/forge-login" style={{ fontSize: '0.8rem', opacity: 0.5 }} onClick={() => setIsOpen(false)}>
                Misfit Login
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
