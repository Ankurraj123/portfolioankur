import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: 'spring', damping: 30, stiffness: 800, mass: 0.1 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
      />
      
      <style jsx="true">{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
        }
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 1px solid var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          opacity: 0.3;
        }
        @media (max-width: 768px) {
          .cursor-dot, .cursor-ring { display: none; }
        }
      `}</style>
    </>
  );
};

export default Cursor;
