import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "React.js", size: 120, x: 20, y: 20, color: "var(--accent-primary)" },
    { name: "Node.js", size: 100, x: 70, y: 30, color: "var(--accent-tertiary)" },
    { name: "C++", size: 90, x: 40, y: 60, color: "var(--accent-secondary)" },
    { name: "Python", size: 85, x: 10, y: 45, color: "#ffd43b" },
    { name: "Express", size: 80, x: 80, y: 65, color: "#fff" },
    { name: "MongoDB", size: 95, x: 50, y: 80, color: "#47a248" },
    { name: "MySQL", size: 75, x: 15, y: 15, color: "#00758f" },
    { name: "Tailwind", size: 85, x: 85, y: 10, color: "#38bdf8" },
    { name: "JavaScript", size: 110, x: 60, y: 10, color: "#f7df1e" }
  ];

  return (
    <section id="skills" className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>Technical <span className="gradient-text">Galaxy</span></h2>
      
      <div className="galaxy-container">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-bubble glass"
            style={{ 
              width: skill.size, 
              height: skill.size,
              left: `${skill.x}%`,
              top: `${skill.y}%`,
              borderColor: skill.color
            }}
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.2, zIndex: 10, boxShadow: `0 0 30px ${skill.color}44` }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <style jsx="true">{`
        .galaxy-container {
          position: relative;
          height: 500px;
          width: 100%;
          margin: 0 auto;
        }
        .skill-bubble {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          text-align: center;
          padding: 10px;
          border: 1px solid var(--glass-border);
          transition: border-color 0.3s ease;
        }
        .skill-bubble:active { cursor: grabbing; }
        
        @media (max-width: 768px) {
          .galaxy-container { height: 800px; }
          .skill-bubble { width: 80px !important; height: 80px !important; position: static !important; margin: 10px; display: inline-flex !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
