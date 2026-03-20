import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutTerminal = () => {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const lines = [
    "> system.load_profile('Ankur Raj')",
    "> fetching_bio...",
    "Done.",
    "> whoami",
    "Ankur Raj - Software Engineer & Creative Developer.",
    "> current_location",
    "Punjab, India / Buxar, Bihar.",
    "> mission",
    "To architect scalable MERN-stack ecosystems that redefine user experiences.",
    "> status",
    "Available for high-impact engineering roles."
  ];

  useEffect(() => {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      
      if (charIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setText(prev => prev + currentLine[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const lineTimeout = setTimeout(() => {
          setText(prev => prev + '\n');
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
        }, 600);
        return () => clearTimeout(lineTimeout);
      }
    }
  }, [lineIndex, charIndex, lines]);

  return (
    <section className="container terminal-section">
      <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>System <span className="gradient-text">Core</span></h2>
      <motion.div 
        className="glass terminal-window"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="terminal-header">
          <div className="dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="title">bash — ankur-raj — 80x24</div>
        </div>
        <div className="terminal-body">
          <pre>{text}</pre>
          <motion.span 
            className="cursor"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >_</motion.span>
        </div>
      </motion.div>

      <style jsx="true">{`
        .terminal-section { padding: 4rem 0; }
        .terminal-window {
          max-width: 900px;
          margin: 0 auto;
          min-height: 450px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.6) !important;
          border: 1px solid var(--glass-border);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .terminal-header {
          background: rgba(255,255,255,0.08);
          padding: 0.8rem 1.2rem;
          display: flex;
          align-items: center;
          position: relative;
        }
        .dots { display: flex; gap: 0.6rem; }
        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        
        .title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.75rem;
          color: #888;
          font-family: 'Inter', sans-serif;
          letter-spacing: 1px;
        }
        
        .terminal-body {
          padding: 2.5rem;
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #00ff41;
          white-space: pre-wrap;
          overflow-y: auto;
          flex: 1;
        }
        .cursor { font-weight: 800; color: #00ff41; margin-left: 2px; }
        pre { margin: 0; }
      `}</style>
    </section>
  );
};

export default AboutTerminal;
