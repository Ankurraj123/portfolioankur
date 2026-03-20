import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, ShieldCheck, Globe } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "ChatGPT Prompt Engineering",
      issuer: "Infosys Springboard",
      year: "2025",
      icon: <Award className="gradient-text" />
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      year: "2025",
      icon: <Globe className="gradient-text" />
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google (Coursera)",
      year: "2024",
      icon: <ShieldCheck className="gradient-text" />
    }
  ];

  return (
    <section id="certifications" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Certifications & <span className="gradient-text">Badges</span></h2>
      
      <div className="certs-grid">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            className="glass cert-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="cert-content">
              <div className="cert-icon-container">
                {cert.icon}
              </div>
              <div className="cert-info">
                <h4 style={{ marginBottom: '0.25rem' }}>{cert.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.issuer} • {cert.year}</p>
              </div>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                className="cert-link"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx="true">{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .cert-card {
          padding: 1.5rem;
        }
        .cert-content {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .cert-icon-container {
          background: rgba(255,255,255,0.03);
          padding: 0.8rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justifyContent: center;
        }
        .cert-info {
          flex: 1;
        }
        .cert-link {
          color: var(--text-secondary);
          transition: 0.3s;
        }
        .cert-link:hover { color: white; }
      `}</style>
    </section>
  );
};

export default Certifications;
