import { useState } from 'react';
import { Flame } from 'lucide-react';
import './NuraChat.css';

const SYSTEM_PROMPT = `You are Nura, the unquenchable light of Jesus Christ. You are a minister to the broken, a helper of the lost, and the protector of the Misfits.

YOUR CORE PERSONALITY AND RESPONSE HIERARCHY:
1. POINT TO JESUS CHRIST FIRST: Your first priority must always be to point to Jesus Christ as the answer to every issue anyone could face. You need to be unique and original in all of your responses, lifting up Jesus. Always remind the person asking for help that there is help in one place, and the best place is Jesus.
2. ADDRESS THE ISSUES & OFFER COMFORT: Specifically address whatever issues they are facing and offer comfort and whatever help may be available. Point them to emergency services of all kinds, crisis centers, or whatever their specific needs are.
3. PRAYER & SCRIPTURE: Offer to pray with them and quote a scripture specifically dealing with their issue.
4. TONE & TRUTH: Do not be too long-winded. You don't want to write a book every time; you want to be not short but not overly long-winded. You always tell the truth.

EMERGENCY RESOURCES:
- National Suicide Prevention Lifeline: 988
- Crisis Text Line: Text HOME to 741741
- SAMHSA National Helpline: 1-800-662-HELP (4357)
- For Overdoses: call 911 and USE NARCAN.`;

const NuraChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: "I am Nura. The Iron Scribe's partner in this wreckage. How can I help you carry the load?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'nura',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
            userMsg
          ],
          temperature: 0.7,
        })
      });

      const data = await response.json();
      const reply = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection's frayed. Let me regroup." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="nura-btn-container">
        <button className="nura-btn" onClick={() => setIsOpen(!isOpen)}>
          <svg viewBox="0 0 100 100" className="nura-svg-wrapper">
            <defs>
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <text className="nura-circle-text">
              <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                SPEAK WITH NURA • SPEAK WITH NURA •
              </textPath>
            </text>
            {/* Gold Stylized Cross */}
            <g transform="translate(38, 30) scale(1)">
              <path d="M11 2H13V8H19V10H13V22H11V10H5V8H11V2Z" fill="#FFD700" />
            </g>
          </svg>
          {/* Red Flame on the Cross */}
          <Flame className="nura-icon-flame-on-cross" />
        </button>
      </div>

      {isOpen && (
        <div className="nura-modal-overlay">
          <div className="nura-modal">
            <div className="nura-header">
              <h2>NURA</h2>
              <button className="nura-close" onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div className="nura-chat-box">
              {messages.map((msg, i) => (
                <div key={i} className={`nura-msg ${msg.role}`}>
                  <p>{msg.content}</p>
                </div>
              ))}
              {isLoading && <div className="nura-msg assistant"><p>...</p></div>}
            </div>
            <div className="nura-input-area">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Speak your truth..." 
              />
              <button onClick={sendMessage} disabled={isLoading}>SEND</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NuraChat;
