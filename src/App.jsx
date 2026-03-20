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
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="app-wrapper">
        <Background3D />
        <Cursor />
        <motion.div className="progress-bar" style={{ scaleX }} />
        
        <nav className="glass nav-bar">
          <div className="nav-content">
            <div className="logo gradient-text">AN.</div>
            <div className="nav-links">
              <a href="#education">Journey</a>
              <a href="#projects">Work</a>
              <a href="#skills">Stack</a>
              <a href="#contact">Hello</a>
            </div>
          </div>
        </nav>

        <main>
          <Hero />
          <AboutTerminal />
          <Timeline />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>

        <Chat />

        <footer className="container footer">
          <p>© 2025 Ankur Raj. Built with Passion & Precision.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
