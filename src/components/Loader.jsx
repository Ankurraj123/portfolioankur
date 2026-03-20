import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [logs, setLogs] = useState([]);
  
  const bootLogs = [
    "Initializing hardware abstractions...",
    "Mounting React 19 visual kernels...",
    "Injecting Framer Motion 3D transforms...",
    "Linking Glassmorphic shaders...",
    "Loading Ankur Raj profile v4.0...",
    "System Ready."
  ];

  useEffect(() => {
    let currentLog = 0;
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
      
      if (Math.random() < 0.15 && currentLog < bootLogs.length) {
        setLogs(prev => [...prev.slice(-3), bootLogs[currentLog]]);
        currentLog++;
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="loader-overlay"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loader-content">
        <div className="loader-header">
          <span className="gradient-text">SYSTEM INITIALIZATION</span>
          <span className="percent">{percent}%</span>
        </div>
        
        <div className="progress-track">
          <motion.div 
            className="progress-fill"
            animate={{ width: `${percent}%` }}
          />
        </div>
        
        <div className="boot-logs">
          {logs.map((log, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="log-line"
            >
              <span className="log-arrow">&gt; </span>{log}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .loader-overlay {
          position: fixed;
          inset: 0;
          background: #030303;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Fira Code', monospace;
        }
        .loader-content {
          width: 400px;
        }
        .loader-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: 2px;
        }
        .percent { color: var(--accent-primary); }
        
        .progress-track {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.05);
          position: relative;
          margin-bottom: 2rem;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          box-shadow: 0 0 15px var(--accent-primary);
        }
        
        .boot-logs {
          height: 80px;
          font-size: 0.8rem;
          color: #555;
        }
        .log-line { margin-bottom: 0.4rem; }
        .log-arrow { color: var(--accent-primary); }
      `}</style>
    </motion.div>
  );
};

export default Loader;
