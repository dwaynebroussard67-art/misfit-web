/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ForgeContextType {
  isForgeActive: boolean;
  setIsForgeActive: (active: boolean) => void;
  isGhostActive: boolean;
  setIsGhostActive: (active: boolean) => void;
  siteData: Record<string, string>;
  updateSiteData: (id: string, content: string) => void;
}

const ForgeContext = createContext<ForgeContextType | undefined>(undefined);

export const ForgeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isForgeActive, setIsForgeActive] = useState(localStorage.getItem('forge_active') === 'true');
  const [isGhostActive, setIsGhostActive] = useState(localStorage.getItem('ghost_active') === 'true');
  const [siteData, setSiteData] = useState<Record<string, string>>({});

  useEffect(() => {
    localStorage.setItem('forge_active', isForgeActive.toString());
  }, [isForgeActive]);

  useEffect(() => {
    localStorage.setItem('ghost_active', isGhostActive.toString());
  }, [isGhostActive]);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setSiteData(data))
      .catch(err => console.error('Failed to load site content:', err));
  }, []);

  const updateSiteData = async (id: string, content: string) => {
    setSiteData(prev => ({ ...prev, [id]: content }));
    try {
      await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, content })
      });
    } catch (err) {
      console.error('Failed to save site content:', err);
    }
  };

  return (
    <ForgeContext.Provider value={{ 
      isForgeActive, setIsForgeActive, 
      isGhostActive, setIsGhostActive,
      siteData, updateSiteData 
    }}>
      {children}
    </ForgeContext.Provider>
  );
};

export const useForge = () => {
  const context = useContext(ForgeContext);
  if (!context) throw new Error('useForge must be used within a ForgeProvider');
  return context;
};
