import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, X } from 'lucide-react';

const cards = [
  { 
    title: 'ANKUR RAJ',    
    tech: 'FULLSTACK DEVELOPER', 
    image: '/profile.png',    
    badge: 'AVAILABLE FOR HIRE',  
    link: '#about',                                      
    color: '#6366f1',
    description: "ASPIRING SOFTWARE ENGINEER WITH HANDS-ON EXPERIENCE IN BUILDING SCALABLE FULL-STACK APPLICATIONS USING THE MERN STACK. STRONG FOUNDATION IN DATA STRUCTURES & ALGORITHMS.",
    tags: ["REACT", "NODE.JS", "EXPRESS", "MONGODB"]
  },
  { 
    title: 'SCANVENTORY',  
    tech: 'REACT · NODE.JS',     
    image: '/scanventory.png', 
    badge: 'LIVE PROJECT',        
    link: 'https://scanvantoryfrontend.vercel.app/',      
    color: '#f43f5e',
    description: "A FULL-STACK QR-POWERED INVENTORY MANAGEMENT SYSTEM THAT REPLACES MANUAL STOCK TRACKING WITH REAL-TIME QR CODE SCANNING AND INSTANT DATA RETRIEVAL.",
    tags: ["REACT", "NODE.JS", "EXPRESS.JS", "MONGODB"]
  },
  { 
    title: 'CROPGUARD',    
    tech: 'AI · SOCKET.IO',      
    image: '/farmer.png',      
    badge: 'LIVE PROJECT',        
    link: 'https://crop-guard-beige.vercel.app/login',    
    color: '#10b981',
    description: "MISSION-CRITICAL PEST DETECTION PLATFORM USING SOCKET.IO FOR LOW-LATENCY ALERTS AND GIS INTEGRATION FOR REAL-TIME VISUALIZATION OF AGRICULTURAL THREATS.",
    tags: ["REACT.JS", "NODE.JS", "SOCKET.IO", "LEAFLET"]
  },
  { 
    title: 'DJANGO JOB PORTAL',    
    tech: 'DJANGO · PYTHON',      
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',      
    badge: 'GITHUB REPO',        
    link: 'https://github.com/Ankurraj123/Jobportal.git',    
    color: '#092e20',
    description: "A COMPREHENSIVE JOB PORTAL PLATFORM BUILT USING THE DJANGO FRAMEWORK. IT ALLOWS EMPLOYERS TO POST JOBS AND JOB SEEKERS TO BROWSE AND APPLY SEAMLESSLY.",
    tags: ["DJANGO", "PYTHON", "SQLITE", "BOOTSTRAP"]
  },
];

// Default State (Stacked): perfectly on top, pushed slightly right, scaled down
const restingConfig = [
  { x: 0,  y: 0,   rotate: 0, scale: 1    },    // 1st Card (Top layer)
  { x: 12, y: -5,  rotate: 0, scale: 0.96 },    // 2nd Card
  { x: 24, y: -10, rotate: 0, scale: 0.92 },    // 3rd Card
  { x: 36, y: -15, rotate: 0, scale: 0.88 },    // 4th Card (Bottom layer)
];

// Hover State (Fan-Out/Split)
const fanConfig = [
  { x: -160, y: 10,   rotate: -18, scale: 1    }, // 1st Card: far left
  { x: -50,  y: -25,  rotate: -6,  scale: 0.95 },   // 2nd Card: mid left
  { x: 50,   y: -25,  rotate: 6,   scale: 0.90 },    // 3rd Card: mid right
  { x: 160,  y: 10,   rotate: 18,  scale: 0.85 },    // 4th Card: far right
];

const ProjectStack = () => {
  const [hovered, setHovered] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (card) => {
    if (card.title === 'ANKUR RAJ') {
      document.querySelector(card.link)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedCard(card);
    }
  };

  return (
    <div
      style={{ position: 'relative', width: 300, height: 430, margin: '0 auto' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Render back→front so front is on top */}
      {[...cards].reverse().map((card, revIdx) => {
        const idx = cards.length - 1 - revIdx; // original index
        const fan = hovered ? fanConfig[idx] : restingConfig[idx];

        return (
          <motion.div
            key={idx}
            animate={{ x: fan.x, y: fan.y, rotate: fan.rotate, scale: fan.scale }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => handleClick(card)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              borderRadius: 22,
              overflow: 'hidden',
              cursor: 'pointer',
              zIndex: idx === 0 ? 10 : idx === 1 ? 5 : 1,
              border: `1px solid rgba(255,255,255,${idx === 0 ? 0.12 : 0.06})`,
              background: idx === 0
                ? 'rgba(18,18,24,0.92)'
                : idx === 1
                  ? 'rgba(14,14,20,0.80)'
                  : 'rgba(10,10,16,0.70)',
              backdropFilter: 'blur(20px)',
              boxShadow: idx === 0
                ? `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${card.color}22`
                : '0 8px 20px rgba(0,0,0,0.3)',
              transformOrigin: 'bottom center',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
              <img
                src={card.image} alt={card.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                  transform: hovered && idx === 0 ? 'scale(1.06)' : 'scale(1)',
                }}
              />
              {/* gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,16,1) 0%, transparent 55%)',
              }} />
              {/* colour accent bar on hover */}
              <motion.div
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
                  background: card.color, transformOrigin: 'left',
                  boxShadow: `0 0 14px ${card.color}`,
                }}
              />
              {/* badge */}
              <div style={{
                position: 'absolute', top: '1rem', left: '1rem',
                background: card.color + 'ee',
                color: '#fff', fontSize: '0.58rem', fontWeight: 800,
                letterSpacing: '1.5px', padding: '0.3rem 0.85rem',
                borderRadius: 8,
              }}>{card.badge}</div>
            </div>

            {/* Info strip */}
            <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1px', margin: '0 0 0.3rem' }}>
                {card.tech}
              </p>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                {card.title}
              </h4>
            </div>
          </motion.div>
        );
      })}

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
            }}
            onClick={(e) => {
               // Close if clicking overlay
               if(e.target === e.currentTarget) setSelectedCard(null);
            }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                width: '100%', maxWidth: 550,
                background: '#0a0a0a',
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', flexDirection: 'column'
              }}
            >
              {/* Top Image Section */}
              <div style={{ position: 'relative', height: 260, width: '100%' }}>
                <img src={selectedCard.image} alt={selectedCard.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Close Button X OVER IMAGE */}
                <button
                  onClick={() => setSelectedCard(null)}
                  style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff', width: 36, height: 36, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)',
                    transition: '0.3s'
                  }}
                >
                  <X size={18} />
                </button>

                {/* Gradient bottom overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, #0a0a0a 0%, transparent 80%)'
                }} />

                {/* Title & Tag overlaid on bottom of image */}
                <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', right: '1.5rem' }}>
                   <h2 style={{ fontSize: '2rem', color: '#fff', fontWeight: 800, margin: '0 0 0.5rem', fontFamily: 'serif', letterSpacing: '1px', textTransform: 'uppercase' }}>
                     {selectedCard.title}
                   </h2>
                   <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', padding: '0.4rem 1rem', borderRadius: 100, color: '#fff', fontSize: '0.65rem', fontWeight: 800, border: '1px solid rgba(255,255,255,0.3)', letterSpacing: '1px' }}>
                     {selectedCard.tags[0]}
                   </div>
                </div>
              </div>

              {/* Bottom Info Section */}
              <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.8, letterSpacing: '0.5px', margin: 0 }}>
                  {selectedCard.description}
                </p>

                {/* Techs */}
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Technologies
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {selectedCard.tags.map((tag, i) => (
                      <span key={i} style={{ background: '#1a1a1a', border: '1px solid #333', color: 'rgba(255,255,255,0.8)', padding: '0.4rem 1rem', borderRadius: 100, fontSize: '0.7rem', fontWeight: 600 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                  <button 
                    onClick={() => setSelectedCard(null)}
                    style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', letterSpacing: '1px' }}
                  >
                    CLOSE
                  </button>
                  <a 
                    href={selectedCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: '#fff', color: '#000', padding: '0.7rem 1.5rem', borderRadius: 100, fontSize: '0.8rem', fontWeight: 800, textDecoration: 'none', transition: 'transform 0.2s', letterSpacing: '0.5px' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    VIEW PROJECT
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Hero = ({ isDarkMode, onResumeClick }) => {
  return (
    <section id="home" className="hero-container">
      <div className="container hero-layout">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-top-label">
            <span className="line" />
            <span className="label-text">AVAILABLE FOR HIRE</span>
          </div>

          <h1 className="hero-name">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >Ankur</motion.span>{" "}
            <motion.span 
              className="script-font"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              Raj
            </motion.span>
          </h1>
          
          <motion.h2 
            className="hero-role uppercase gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Engineering the Future of Web
          </motion.h2>

          <p className="hero-desc">
            Building immersive digital experiences with cutting-edge technologies. 
            Crafting the intersection of design and engineering.
          </p>

          <div className="hero-buttons">
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW MY WORK <ArrowRight size={18} />
            </motion.button>
            <motion.button 
              className="btn btn-outline glass"
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              GET IN TOUCH
            </motion.button>
            <motion.button 
              className="btn btn-outline glass"
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onResumeClick}
            >
              <Download size={18} /> RESUME
            </motion.button>
          </div>

          <div className="hero-socials">
            <a href="#"><Github size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Mail size={20} /></a>
          </div>
        </motion.div>

        <motion.div 
          style={{ overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '3rem' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <ProjectStack />
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator" 
        style={{ cursor: 'pointer' }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        whileHover={{ y: 5 }}
      >
        <span>SCROLL</span>
        <ArrowRight className="rotate-90" size={16} />
      </motion.div>

      <style jsx="true">{`
        .hero-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 100px;
        }
        .hero-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-top-label {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .hero-top-label .line {
          width: 40px;
          height: 1px;
          background: var(--text-primary);
        }
        .label-text {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 4px;
        }

        .hero-name {
          font-size: clamp(4rem, 8vw, 10rem);
          line-height: 1;
          margin-bottom: 1rem;
          font-weight: 400;
        }
        .script-font {
          font-family: var(--font-script);
          color: var(--text-primary);
        }

        .hero-role {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .hero-desc {
          max-width: 500px;
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .btn {
          padding: 1rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: 0.3s;
        }

        .btn-primary {
          background: var(--text-primary);
          color: var(--bg-color);
          border: none;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
        }

        .btn-outline:hover {
          background: var(--glass-bg);
          border-color: var(--text-primary);
        }

        .hero-socials {
          display: flex;
          gap: 2rem;
          color: var(--text-secondary);
        }

        /* stack cards use inline styles — no class CSS needed */

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 4px;
        }

      `}</style>
    </section>
  );
};

export default Hero;
