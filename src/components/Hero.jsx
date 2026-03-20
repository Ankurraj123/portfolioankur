import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-background">
        <motion.div 
          className="glow-orb orb-1"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="glow-orb orb-2"
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container hero-layout">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="badge glass">
            <Sparkles size={14} className="gradient-text" /> 
            <span>Available for Hire</span>
          </div>

          <h1 className="hero-title">
            ANKUR <span className="stroke-text">RAJ</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="line" />
            <p>FULL-STACK ENGINEER & ARTISTIC DEVELOPER</p>
          </div>

          <p className="hero-description">
            I craft immersive, high-performance web applications that bridge the gap between complex logic and stunning design.
          </p>

          <div className="hero-actions">
            <motion.button 
              className="primary-btn"
              whileHover={{ scale: 1.05, letterSpacing: '2px' }}
            >
              EXPLORE PROJECTS
            </motion.button>
            <div className="social-links">
              <a href="https://github.com/Ankurraj123" target="_blank"><Github /></a>
              <a href="https://www.linkedin.com/in/ankur-raj289/" target="_blank"><Linkedin /></a>
              <a href="mailto:ankur2005raj@gmail.com"><Mail /></a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="photo-frame">
            <div className="photo-inner glass">
              <img 
                src="/profile.png" 
                alt="Ankur Raj" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="frame-glow" />
            </div>
            <motion.div 
              className="frame-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .hero-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }
        .hero-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          z-index: 10;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        .glow-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }
        .orb-1 { background: var(--accent-primary); top: 10%; left: 10%; }
        .orb-2 { background: var(--accent-secondary); bottom: 10%; right: 10%; }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(3rem, 10vw, 8rem);
          line-height: 0.9;
          margin-bottom: 2rem;
        }
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }

        .hero-subtitle {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .hero-subtitle .line {
          width: 60px;
          height: 2px;
          background: var(--accent-primary);
        }
        .hero-subtitle p {
          font-weight: 800;
          letter-spacing: 3px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .hero-description {
          max-width: 500px;
          color: #888;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .primary-btn {
          background: white;
          color: black;
          border: none;
          padding: 1rem 2.5rem;
          font-weight: 800;
          font-size: 0.9rem;
          cursor: pointer;
          transition: 0.3s;
        }
        .social-links { display: flex; gap: 1.5rem; color: var(--text-secondary); }
        .social-links a:hover { color: white; transform: translateY(-3px); }

        /* Photo Frame Styles */
        .photo-frame {
          position: relative;
          width: 350px;
          height: 350px;
          margin: 0 auto;
        }
        .photo-inner {
          position: absolute;
          inset: 15px;
          border-radius: 30px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          z-index: 2;
        }
        .photo-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: #444;
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 2px;
        }
        .frame-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(59, 130, 246, 0.1) 100%);
        }
        .frame-border {
          position: absolute;
          inset: 0;
          border: 2px dashed rgba(59, 130, 246, 0.3);
          border-radius: 40px;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .hero-layout { grid-template-columns: 1fr; text-align: center; }
          .hero-left { display: flex; flex-direction: column; align-items: center; }
          .hero-subtitle { justify-content: center; }
          .hero-description { margin: 0 auto 3rem; }
          .hero-actions { flex-direction: column; gap: 2rem; }
          .photo-frame { width: 280px; height: 280px; margin-top: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
