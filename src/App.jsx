import React, { useState } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Chat from './components/Chat';
import Cursor from './components/Cursor';
import Background3D from './components/Background3D';
import AboutTerminal from './components/AboutTerminal';
import Loader from './components/Loader';
import Experience from './components/Experience';
import ResumeModal from './components/ResumeModal';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

import { Sun, Moon, ArrowRight } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light');
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`app-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
        <Background3D isDarkMode={isDarkMode} />
        <Cursor />
        <div className="scroll-progress-container">
          <motion.div className="scroll-progress-bar" style={{ scaleX, transformOrigin: "0%" }} />
        </div>
        
        <nav className="glass nav-bar">
          <div className="nav-content">
            <div className="logo-section">
              <div className="logo gradient-text">AK</div>
            </div>

            <div className="nav-links">
              <a href="#home" className="nav-link">HOME</a>
              <a href="#about" className="nav-link">ABOUT</a>
              <a href="#skills" className="nav-link">SKILLS</a>
              <a href="#projects" className="nav-link">PROJECTS</a>
              <a href="#experience" className="nav-link">EXPERIENCE</a>
              <a href="#education" className="nav-link">EDUCATION</a>
              <button onClick={() => setIsResumeOpen(true)} className="nav-link-btn">RESUME</button>

            </div>

            <div className="nav-actions">
              <button 
                className="theme-toggle glass" 
                onClick={toggleTheme}
                title={isDarkMode ? "Switch to Day Mode" : "Switch to Night Mode"}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <motion.a 
                href="#contact"
                className="lets-talk-btn"
                style={{ textDecoration: 'none' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LET'S TALK <ArrowRight size={16} />
              </motion.a>
            </div>
          </div>
        </nav>

        <main>
          <Hero isDarkMode={isDarkMode} onResumeClick={() => setIsResumeOpen(true)} />
          <AboutTerminal isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Projects isDarkMode={isDarkMode} />
          <Experience isDarkMode={isDarkMode} />
          <Timeline isDarkMode={isDarkMode} />
          <Certifications isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
        </main>

        <Chat />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        <footer className="container footer">
          <p>© 2025 Ankur Raj. Built with Passion & Precision.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
