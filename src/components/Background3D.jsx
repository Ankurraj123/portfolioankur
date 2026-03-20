import React from 'react';

const Background3D = () => {
  return (
    <div className="grid-background">
      <div className="grid-plane" />
      <div className="grid-glow" />
      
      <style jsx="true">{`
        .grid-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default Background3D;
