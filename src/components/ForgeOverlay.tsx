import React, { useState } from 'react';
import './ForgeOverlay.css';

interface ForgeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgeOverlay: React.FC<ForgeOverlayProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  return (
    <div className="forge-overlay">
      <div className="forge-modal">
        <h2>Forge</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command..."
        />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ForgeOverlay;