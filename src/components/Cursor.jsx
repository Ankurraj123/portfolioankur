import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ 
          x: mousePos.x - 4, 
          y: mousePos.y - 4,
          scale: isHovering ? 2 : 1
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 800, mass: 0.1 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{ 
          x: mousePos.x - 20, 
          y: mousePos.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 0.3
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 150, mass: 0.8 }}
      />
      
      {/* Trailing "Star Dust" */}
      <motion.div
        className="cursor-trail"
        animate={{ 
          x: mousePos.x - 30, 
          y: mousePos.y - 30 
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 100, mass: 2 }}
      />
      
      <style jsx="true">{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: #fff;
          box-shadow: 0 0 10px #fff, 0 0 20px var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
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
          z-index: 9999;
          box-shadow: inset 0 0 10px rgba(59, 130, 246, 0.4);
        }
        .cursor-trail {
          position: fixed;
          top: 0;
          left: 0;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 9998;
        }
        @media (max-width: 768px) {
          .cursor-dot, .cursor-ring, .cursor-trail { display: none; }
        }
      `}</style>
    </>
  );
};

export default Cursor;
