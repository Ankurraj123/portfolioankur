import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github, Code, Server } from 'lucide-react';

const ProjectCard = ({ project, idx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="glass project-card"
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title}
          style={{ 
            width: '100%',
            height: '220px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '1.5rem',
            border: '1px solid var(--glass-border)'
          }} 
        />
      </div>
      
      <div className="project-info">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.8rem' }}>{project.title}</h3>
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link" title="View Source">
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link" title="Live Preview">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="project-desc">{project.description}</p>
        
        <div className="tech-tags">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "SCANVENTORY",
      description: "A high-end MERN inventory ecosystem utilizing automated QR workflows and real-time MongoDB synchronization for enterprise assets.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://scanvantoryfrontend.vercel.app/login",
      github: "https://github.com/Ankurraj123",
      image: "/scanventory.png"
    },
    {
      title: "FARMER ALERT",
      description: "Mission-critical pest detection platform using Socket.IO for microsecond latency alerts and Leaflet GIS integration.",
      tech: ["React", "Express", "Socket.io", "Leaflet"],
      link: "https://github.com/Ankurraj123", // Assuming this is the placeholder for now
      github: "https://github.com/Ankurraj123",
      image: "/farmer.png"
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 style={{ fontSize: '3rem', marginBottom: '5rem', textAlign: 'center' }}>Featured <span className="gradient-text">Creations</span></h2>
      
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>

      <style jsx="true">{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
        }
        .project-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          transform-style: preserve-3d;
        }
        .project-desc {
          color: #888;
          margin-bottom: 2rem;
          line-height: 1.8;
          font-size: 1rem;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: auto;
        }
        .tech-tag {
          font-size: 0.75rem;
          padding: 6px 14px;
          border-radius: 4px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          color: var(--accent-primary);
          font-weight: 700;
        }
        .icon-link {
          color: #555;
          transition: 0.3s;
        }
        .icon-link:hover {
          color: white;
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
