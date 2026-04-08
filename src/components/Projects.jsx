import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, X, ArrowUpRight } from 'lucide-react';

/* ═══════════════════════ MODAL ═══════════════════════ */
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: 'fixed', inset: 0,
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(18px)',
      zIndex: 4000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1.5rem',
    }}
  >
    <motion.div
      onClick={e => e.stopPropagation()}
      initial={{ y: 60, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 60, opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', damping: 26, stiffness: 300 }}
      style={{
        width: '100%', maxWidth: 680, maxHeight: '88vh',
        overflowY: 'auto', borderRadius: 28,
        background: 'linear-gradient(145deg,#0c0d10,#11121a)',
        border: '1px solid rgba(255,255,255,0.09)',
        position: 'relative',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'sticky', top: '1rem', float: 'right', margin: '1rem 1rem 0 0',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
          color: '#fff', width: 36, height: 36, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 10, transition: 'all 0.25s',
        }}
      ><X size={18} /></button>

      {/* Hero image */}
      <div style={{ position: 'relative', height: 240, overflow: 'hidden', borderRadius: '28px 28px 0 0', marginTop: -44 }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0c0d10 0%, transparent 60%)' }} />
        <span style={{
          position: 'absolute', top: '1rem', left: '1rem',
          background: 'linear-gradient(135deg,#f43f5e,#e11d48)',
          color: '#fff', padding: '0.28rem 0.85rem',
          borderRadius: 100, fontSize: '0.58rem', fontWeight: 800, letterSpacing: '1.5px',
        }}>{project.badge}</span>
      </div>

      {/* Body */}
      <div style={{ padding: '0 2rem 2.5rem', marginTop: 4 }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, margin: '0 0 0.35rem' }}>{project.date}</p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: '0 0 1rem' }}>{project.title}</h2>
        <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '0 0 1.5rem' }}>{project.description}</p>

        <p style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '2px', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', marginBottom: '0.65rem' }}>KEY FEATURES</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
          {project.features.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.55rem', alignItems: 'flex-start', fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)' }}>
              <CheckCircle2 size={14} style={{ color: '#f43f5e', flexShrink: 0, marginTop: 2 }} />
              <span>{f}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '2px', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', marginBottom: '0.65rem' }}>TECH STACK</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{ padding: '0.3rem 0.7rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, fontSize: '0.62rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.65rem 1.3rem', borderRadius: 10, fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', background: '#fff', color: '#111', transition: 'all 0.3s' }}>
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.65rem 1.3rem', borderRadius: 10, fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}>
              <Github size={15} /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ═══════════════════════ CARD ═══════════════════════ */
const ProjectCard = ({ project, idx, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
      style={{
        cursor: 'pointer',
        borderRadius: 24,
        border: hovered ? '1px solid rgba(244,63,94,0.45)' : '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered
          ? '0 0 0 1px rgba(244,63,94,0.12), 0 28px 70px rgba(0,0,0,0.6), 0 0 90px rgba(244,63,94,0.07)'
          : '0 4px 24px rgba(0,0,0,0.3)',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        overflow: 'visible',        // ← MUST be visible so halves can slide out
        position: 'relative',
      }}
    >
      {/* ── TOP HALF ── slides UP */}
      <motion.div
        animate={{ y: hovered ? -12 : 0 }}
        transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'relative',
          height: 230,
          borderRadius: '24px 24px 0 0',
          overflow: 'hidden',        // clip image inside top half
          background: '#0a0b10',
        }}
      >
        <img
          src={project.image} alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
        {/* tint on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(244,63,94,0.22) 0%, rgba(10,11,16,0.65) 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* badge */}
        <span style={{
          position: 'absolute', top: '1rem', left: '1rem',
          background: 'linear-gradient(135deg,#f43f5e,#e11d48)',
          color: '#fff', padding: '0.28rem 0.8rem',
          borderRadius: 8, fontSize: '0.58rem', fontWeight: 800, letterSpacing: '1.5px',
          textTransform: 'uppercase', zIndex: 2,
        }}>{project.badge}</span>
        {/* click hint */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.35 }}
          style={{
            position: 'absolute', bottom: '1rem', right: '1rem',
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
            color: '#fff', fontSize: '0.68rem', fontWeight: 700,
            padding: '0.38rem 0.75rem', borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.12)', zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <ArrowUpRight size={13} /> Click to explore
        </motion.div>
      </motion.div>

      {/* ── SPLIT LINE ── glowing neon gap */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
        style={{
          height: 3,
          transformOrigin: 'center',
          background: 'linear-gradient(90deg, transparent 0%, rgba(244,63,94,0.9) 30%, rgba(139,92,246,1) 55%, rgba(244,63,94,0.9) 75%, transparent 100%)',
          boxShadow: '0 0 14px rgba(244,63,94,0.7), 0 0 32px rgba(139,92,246,0.5)',
        }}
      />

      {/* ── BOTTOM HALF ── slides DOWN */}
      <motion.div
        animate={{ y: hovered ? 12 : 0 }}
        transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
        style={{
          padding: '1.4rem 1.7rem 1.7rem',
          background: hovered ? 'rgba(14,10,16,0.92)' : 'rgba(10,11,16,0.8)',
          borderRadius: '0 0 24px 24px',
          transition: 'background 0.4s ease',
          overflow: 'hidden',       // clip info inside bottom half
        }}
      >
        <p style={{ fontSize: '0.67rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', margin: '0 0 0.35rem', letterSpacing: '0.5px' }}>
          {project.date}
        </p>
        <h3 style={{
          fontSize: '1.22rem', fontWeight: 800, lineHeight: 1.2, margin: '0 0 0.65rem',
          color: hovered ? '#f43f5e' : 'var(--text-primary)',
          transition: 'color 0.35s ease',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.82rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.65,
          margin: '0 0 1.1rem',
          display: '-webkit-box', WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tech.slice(0, 5).map((t, i) => (
            <span key={i} style={{
              padding: '0.28rem 0.62rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 6, fontSize: '0.58rem', fontWeight: 700,
              color: 'rgba(255,255,255,0.42)',
            }}>{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span style={{
              padding: '0.28rem 0.62rem',
              background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.22)',
              borderRadius: 6, fontSize: '0.58rem', fontWeight: 700, color: '#f43f5e',
            }}>+{project.tech.length - 5}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ═══════════════════════ SECTION ═══════════════════════ */
const Projects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: 'Scanventory: QR Inventory Management',
      badge: 'FULL-STACK',
      date: 'Jan 2025 – May 2025',
      description: 'A full-stack QR-powered inventory management system that replaces manual stock tracking with real-time QR code scanning. Each product is assigned a unique QR code; scanning it instantly pulls up full product details, stock levels, and transaction history.',
      tech: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'MONGODB', 'QR API', 'JWT'],
      features: [
        'Real-time QR code scanning using device camera via JavaScript APIs',
        'Auto-generate unique QR codes for new inventory items on registration',
        'Live inventory dashboard with stock levels and low-stock alerts',
        'Full CRUD operations — add, edit, delete, and search items instantly',
        'JWT-based secure authentication and validation',
        'Detailed inventory reports with export functionality for audits',
      ],
      link: 'https://scanvantoryfrontend.vercel.app/',
      github: '#',
      image: '/scanventory.png',
    },
    {
      title: 'CropGuard: AI Pest Detection Platform',
      badge: 'AI & IoT',
      date: 'Feb 2025 – June 2025',
      description: 'Mission-critical pest detection platform using Socket.IO for low-latency alerts and GIS integration for real-time visualization of agricultural threats across regions.',
      tech: ['REACT.JS', 'NODE.JS', 'SOCKET.IO', 'LEAFLET', 'MONGODB', 'EXPRESS.JS'],
      features: [
        'AI-powered pest identification from image uploads',
        'Real-time geospatial mapping using Leaflet and GIS data',
        'Low-latency alerts powered by Socket.IO for rapid response',
        'Farmer-centric dashboard with historical threat analysis',
        'Secure role-based authentication (Farmer / Admin)',
        'Cloud-synced telemetry for regional pest tracking',
      ],
      link: 'https://crop-guard-beige.vercel.app/login',
      github: '#',
      image: '/farmer.png',
    },
    {
      title: 'Django Job Portal',
      badge: 'FULL-STACK',
      date: '2023 - 2024',
      description: 'A comprehensive Job Portal platform built using the Django framework. It allows employers to post jobs and job seekers to browse and apply seamlessly, complete with user authentication and profile management.',
      tech: ['DJANGO', 'PYTHON', 'SQLITE', 'BOOTSTRAP', 'HTML/CSS'],
      features: [
        'Robust user authentication for Job Seekers and Employers',
        'Intuitive job posting and management dashboard for employers',
        'Advanced job search and filtering functionalities',
        'Seamless application process with resume-upload support',
        'Responsive UI design utilizing Bootstrap and custom CSS',
      ],
      link: 'https://github.com/Ankurraj123/Jobportal.git',
      github: 'https://github.com/Ankurraj123/Jobportal.git',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80', // Using a placeholder until actual image is added
    },
  ];

  return (
    <section id="projects" className="container" style={{ padding: '6rem 0' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '4px', color: '#f43f5e', textTransform: 'uppercase', marginBottom: '0.75rem' }}
        >
          LATEST WORK
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.1 }}
        >
          Selected <span className="gradient-text">Projects</span>
        </motion.h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2.5rem' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} idx={i} onClick={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
