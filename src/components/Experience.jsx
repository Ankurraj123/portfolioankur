import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack Engineering Lead",
      company: "Strategic Projects & R&D",
      period: "2024 - Present",
      desc: "Leading the development of complex MERN-stack architectures including Cropguard and Scanventory. Focused on microsecond-latency communications using Socket.IO and high-integrity data storage in MongoDB.",
      tech: ["Node.js", "Express", "Socket.IO", "MongoDB"],
      icon: <Briefcase size={24} />
    },
    {
      title: "Open Source Contributor",
      company: "GitHub Community",
      period: "2023 - Present",
      desc: "Active contributor to various JS/React ecosystems. Maintaining high technical standards through consistent documentation and scalable code practices.",
      tech: ["React", "Typescript", "Git"],
      icon: <GithubIcon size={24} />
    },
    {
      title: "100+ Problems Solved on LeetCode",
      company: "Data Structures & Algorithms",
      period: "Ongoing",
      desc: "Consistently solving DSA problems across various topics, strengthening algorithmic thinking and problem-solving skills.",
      tech: ["Array", "Linked List", "Tree", "Dynamic Programming"],
      icon: <Award size={24} />
    }
  ];

  function GithubIcon({ size }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    );
  }

  return (
    <section id="experience" className="container exp-section">
      <div className="section-header">
        <h2 style={{ fontSize: '3rem', margin: '0' }}>Technical <span className="gradient-text">Experience</span></h2>
        <div className="status-badge glass">Open for Hire</div>
      </div>
      
      <div className="exp-grid">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            className="exp-card glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="exp-icon-box">{exp.icon}</div>
            <div className="exp-info">
              <div className="exp-top">
                <h3>{exp.title}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tech-stack">
                {exp.tech.map((t, idx) => (
                  <span key={idx} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx="true">{`
        .exp-section { padding: 8rem 2rem; }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5rem;
        }
        .status-badge {
          padding: 0.6rem 1.2rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .exp-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .exp-card {
          display: flex;
          gap: 2.5rem;
          padding: 3rem;
          transition: 0.4s;
        }
        .exp-card:hover {
          transform: translateX(10px);
          border-color: var(--accent-primary);
        }
        .exp-icon-box {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .exp-info { flex: 1; }
        .exp-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        .exp-top h3 { font-size: 1.5rem; color: white; margin: 0; }
        .exp-period { font-size: 0.85rem; font-weight: 800; color: var(--accent-primary); }
        .exp-company { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem; font-weight: 600; }
        .exp-desc { color: var(--text-secondary); line-height: 1.7; margin-bottom: 2rem; font-size: 1rem; max-width: 800px; }
        
        .exp-tech-stack { display: flex; gap: 0.8rem; flex-wrap: wrap; }
        .tech-pill {
          font-size: 0.65rem;
          font-weight: 800;
          color: white;
          background: rgba(255,255,255,0.05);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          border: 1px solid var(--glass-border);
        }

        @media (max-width: 768px) {
          .exp-card { flex-direction: column; gap: 1.5rem; padding: 2rem; }
          .exp-top { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
