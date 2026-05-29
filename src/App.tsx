import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NuraChat from './components/NuraChat';
import ForgeOverlay from './components/ForgeOverlay';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Ministry from './pages/Ministry';
import Origins from './pages/Origins';
import LoveDoes from './pages/LoveDoes';
import Armory from './pages/Armory';
import Vault from './pages/Vault';
import Live from './pages/Live';
import Contact from './pages/Contact';
import ArtGallery from './pages/ArtGallery';
import VaultGallery from './pages/VaultGallery';
import WelcomeJourney from './pages/WelcomeJourney';
import NarcanWatch from './pages/NarcanWatch';
import ForgeLogin from './pages/ForgeLogin';
import Forge from './pages/Forge';
import DynamicPage from './pages/DynamicPage';
import { ForgeProvider } from './context/ForgeContext';
import GhostWrapper from './components/GhostWrapper';
import './App.css';

interface CustomPage {
  path: string;
  title: string;
}

function App() {
  const [customPages, setCustomPages] = useState<CustomPage[]>([]);

  useEffect(() => {
    fetch('/api/pages')
      .then(res => res.json())
      .then(data => setCustomPages(data))
      .catch(err => console.error("Failed to load custom pages:", err));
  }, []);

  return (
    <ForgeProvider>
      <Router>
        <div className="app-container">
          <NuraChat />
          <GhostWrapper file="src/components/Navbar.tsx">
            <Navbar />
          </GhostWrapper>
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/gallery" element={<ArtGallery />} />
              <Route path="/narcan-watch" element={<NarcanWatch />} />
              <Route path="/forge-login" element={<ForgeLogin />} />
              <Route path="/forge" element={<Forge />} />
              <Route path="/forge/vault" element={<VaultGallery />} />
              <Route path="/welcome/:type" element={<WelcomeJourney />} />
              <Route path="/ministry" element={<Ministry />} />
              <Route path="/origins" element={<Origins />} />
              <Route path="/love-does" element={<LoveDoes />} />
              <Route path="/armory" element={<Armory />} />
              <Route path="/vault" element={<Vault />} />
              <Route path="/live" element={<Live />} />
              <Route path="/contact" element={<Contact />} />
              
              {customPages.map(page => (
                <Route 
                  key={page.path} 
                  path={page.path} 
                  element={<DynamicPage title={page.title} />} 
                />
              ))}
            </Routes>
          </main>
          <Footer />
          <ForgeOverlay isOpen={false} onClose={() => {}} />
        </div>
      </Router>
    </ForgeProvider>
  );
}

export default App;