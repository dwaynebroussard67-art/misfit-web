import React, { useState } from 'react';
import { useForge } from '../context/ForgeContext';

interface ForgeTextProps {
  id: string;
  defaultText: string;
  className?: string;
  style?: React.CSSProperties;
  tagName?: 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'div';
}

const ForgeText: React.FC<ForgeTextProps> = ({ id, defaultText, className, style, tagName: Tag = 'p' }) => {
  const { isForgeActive, siteData, updateSiteData } = useForge();
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState('');

  const content = siteData[id] || defaultText;

  if (isForgeActive && isEditing) {
    return (
      <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
        <textarea
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          autoFocus
          onBlur={() => {
            updateSiteData(id, tempText);
            setIsEditing(false);
          }}
          style={{
            width: '100%',
            background: '#222',
            color: '#fff',
            border: '1px solid #ff3c3c',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            padding: '5px'
          }}
        />
      </div>
    );
  }

  return (
    <Tag
      className={className}
      style={{
        ...style,
        outline: isForgeActive ? '1px dashed #ff3c3c' : 'none',
        cursor: isForgeActive ? 'pointer' : 'inherit'
      }}
      onClick={() => {
        if (isForgeActive) {
          setTempText(content);
          setIsEditing(true);
        }
      }}
    >
      {content}
    </Tag>
  );
};

export default ForgeText;
