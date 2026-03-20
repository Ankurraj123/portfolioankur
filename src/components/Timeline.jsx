import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Star } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      year: "2023 - Present",
      title: "B.Tech CSE",
      sub: "Lovely Professional University",
      desc: "Deep diving into Full-Stack Development and Algorithms. Maintaining high technical standards. Current CGPA: 6.42",
      icon: <GraduationCap size={24} />
    },
    {
      year: "2022 - 2023",
      title: "Self-Improvement & Preparation",
      sub: "Gap Year",
      desc: "Focused on technical skill acquisition and preparation for higher engineering studies.",
      icon: <Star size={24} />
    },
    {
      year: "2021 - 2022",
      title: "Intermediate",
      sub: "DAV Public School",
      desc: "Mastered core sciences and mathematics with 64% merit.",
      icon: <Calendar size={24} />
    },
    {
      year: "2020 - 2021",
      title: "Matriculation",
      sub: "DAV Public School",
      desc: "Outstanding performance with 88% in secondary education.",
      icon: <Star size={24} />
    }
  ];

  return (
    <section id="education" className="container journey-section">
      <h2 style={{ fontSize: '3rem', marginBottom: '5rem', textAlign: 'center' }}>The <span className="gradient-text">Epic Journey</span></h2>
      
      <div className="journey-track">
        <div className="track-line" />
        
        {events.map((event, i) => (
          <motion.div 
            key={i}
            className={`journey-node ${i % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <div className="node-content glass glass-hover">
              <div className="node-header">
                <span className="node-year">{event.year}</span>
                <div className="node-icon">{event.icon}</div>
              </div>
              <h3>{event.title}</h3>
              <p className="node-sub">{event.sub}</p>
              <p className="node-desc">{event.desc}</p>
            </div>
            <div className="node-dot" />
          </motion.div>
        ))}
      </div>

      <style jsx="true">{`
        .journey-section { padding: 8rem 0; }
        .journey-track {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        .track-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent);
          transform: translateX(-50%);
        }
        .journey-node {
          position: relative;
          width: 50%;
          margin-bottom: 4rem;
        }
        .journey-node.left { left: 0; padding-right: 3rem; text-align: right; }
        .journey-node.right { left: 50%; padding-left: 3rem; }
        
        .node-content { padding: 2rem; }
        .node-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          justify-content: inherit;
        }
        .journey-node.left .node-header { flex-direction: row-reverse; }
        
        .node-year { font-weight: 800; color: var(--accent-primary); letter-spacing: 1px; }
        .node-icon { background: rgba(255,255,255,0.05); padding: 0.8rem; border-radius: 12px; color: white; }
        .node-sub { color: var(--text-secondary); margin-bottom: 0.5rem; }
        .node-desc { font-size: 0.95rem; color: #777; line-height: 1.6; }
        
        .node-dot {
          position: absolute;
          top: 2rem;
          width: 16px;
          height: 16px;
          background: var(--bg-color);
          border: 3px solid var(--accent-primary);
          border-radius: 50%;
          z-index: 10;
          box-shadow: 0 0 15px var(--accent-primary);
        }
        .journey-node.left .node-dot { right: -8px; }
        .journey-node.right .node-dot { left: -8px; }

        @media (max-width: 768px) {
          .track-line { left: 20px; }
          .journey-node { width: 100%; text-align: left !important; padding-left: 3rem !important; }
          .journey-node.left .node-header { flex-direction: row; }
          .node-dot { left: 12px !important; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
