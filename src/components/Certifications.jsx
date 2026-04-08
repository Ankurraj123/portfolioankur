import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, ShieldCheck, Globe, CheckCircle2, Calendar, BookOpen } from 'lucide-react';

const CertCard = ({ cert, idx }) => {
  return (
    <motion.div
      className="new-cert-card glass"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="new-cert-visual">
        <div className="new-cert-img-container">
          <img src={cert.image} alt={cert.title} />
        </div>
      </div>

      <div className="new-cert-info">
        <div className="issuer-label" style={{ color: cert.orgColor }}>{cert.issuer}</div>
        <h3 className="new-cert-title">{cert.title}</h3>
        <div className="new-cert-meta">
          <span className="new-date-badge">{cert.date}</span>
        </div>
        <p className="new-cert-description">{cert.description}</p>
        
        <div className="new-tech-tags">
          {cert.tech.map((t, i) => (
            <span key={i} className="new-tech-tag">{t}</span>
          ))}
        </div>
        
        <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="verify-link-btn">
          Verify Credentials <ExternalLink size={14} />
        </a>
      </div>

      <style jsx="true">{`
        .new-cert-card {
          border-radius: 24px;
          overflow: hidden;
          background: rgba(10, 11, 15, 0.4);
          border: 1px solid var(--glass-border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .new-cert-card:hover {
          transform: translateY(-8px);
          background: rgba(20, 22, 28, 0.6);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .new-cert-visual {
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .new-cert-img-container {
          width: 100%;
          aspect-ratio: 1.4 / 1;
          background: #111;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
        }

        .new-cert-img-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .new-cert-card:hover .new-cert-img-container img {
          transform: scale(1.1);
        }

        .new-cert-info {
          padding: 1.75rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .issuer-label {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .new-cert-title {
          font-size: 1.4rem;
          font-weight: 750;
          color: white;
          line-height: 1.25;
          margin-bottom: 1rem;
        }

        .new-cert-meta {
          margin-bottom: 1.25rem;
        }

        .new-date-badge {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.9);
          padding: 0.4rem 0.8rem;
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .new-cert-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .new-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .new-tech-tag {
          padding: 0.35rem 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .verify-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .verify-link-btn:hover {
          opacity: 1;
          gap: 0.8rem;
        }
      `}</style>
    </motion.div>
  );
};

const Certifications = () => {
  const certs = [
    {
      title: "Fundamentals of Data Structures: Learn, Apply and Build Projects",
      issuer: "Lovely Professional University",
      orgColor: "#e65100",
      date: "JUNE-JULY 2025",
      image: "/certificates/lpu_dsa.png",
      description: "Intensive development course focused on core data structures, sorting algorithms, and practical implementation. Obtained Certificate of Merit (Grade A).",
      verifyLink: "#",
      tech: ["C++", "ALGORITHMS", "DS", "PROJECTS"]
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "GOOGLE CERTIFIED",
      orgColor: "#ea4335",
      date: "SEPTEMBER 2024",
      image: "/certificates/google_networking.png",
      description: "Advanced certification covering the 5-layer TCP/IP model, DNS, and industrial networking protocols.",
      verifyLink: "https://coursera.org/verify/1ZSSMPIWPDLX",
      tech: ["TCP/IP", "DNS", "ROUTING", "CLI"]
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM CERTIFIED",
      orgColor: "#127fff",
      date: "SEPTEMBER 2024",
      image: "/certificates/ibm_hardware.png",
      description: "Comprehensive overview of computer hardware components and operating system management (Windows/Linux).",
      verifyLink: "https://www.coursera.org/account/accomplishments/certificate/PEYMKBGBVT7U",
      tech: ["HARDWARE", "LINUX", "WINDOWS", "VIRTUALIZATION"]
    }
  ];

  return (
    <section id="certifications" className="container" style={{ padding: '6rem 0' }}>
      <div style={{ marginBottom: '3rem' }}>
        <motion.span 
          className="section-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CREDENTIALS
        </motion.span>
        <motion.h2 
          className="section-main-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Certificates
        </motion.h2>
      </div>

      <div className="certs-grid">
        {certs.map((cert, idx) => (
          <CertCard key={idx} cert={cert} idx={idx} />
        ))}
      </div>

      <style jsx="true">{`
        .section-subtitle {
          display: block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 4px;
          color: var(--accent-primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .section-main-title {
          font-size: 2.8rem;
          font-weight: 900;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
          .section-main-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
