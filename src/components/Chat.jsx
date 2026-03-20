import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Ankur's AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isBot: false }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "That's a great question! Ankur is currently focused on MERN stack development and building scalable systems. You can find his contact info below!", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="glass chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            <div className="chat-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div className="online-indicator" />
                <span>Ankur's Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="close-btn"><X size={18} /></button>
            </div>
            
            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSend} className="chat-input-area">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button type="submit"><Send size={18} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        className="chat-toggle glass"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={28} />
      </motion.button>

      <style jsx="true">{`
        .chat-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
        }
        .chat-toggle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-primary);
          border: none;
          color: white;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .chat-window {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 320px;
          height: 400px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }
        .chat-header {
          padding: 1rem;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .online-indicator {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
        }
        .close-btn { background: none; border: none; color: var(--text-secondary); cursor: pointer; }
        
        .chat-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .message {
          padding: 0.6rem 1rem;
          border-radius: 12px;
          max-width: 85%;
          font-size: 0.85rem;
          line-height: 1.4;
        }
        .message.bot { background: rgba(255,255,255,0.08); align-self: flex-start; }
        .message.user { background: var(--accent-primary); color: white; align-self: flex-end; }
        
        .chat-input-area {
          padding: 1rem;
          display: flex;
          gap: 0.5rem;
          border-top: 1px solid var(--glass-border);
        }
        .chat-input-area input {
          flex: 1;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          color: white;
          outline: none;
        }
        .chat-input-area button { background: none; border: none; color: var(--accent-primary); cursor: pointer; }
      `}</style>
    </div>
  );
};

export default Chat;
