import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Phone, Linkedin, Github, MapPin, Globe } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="resume-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="resume-modal"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="resume-header-actions">
            <button className="action-btn" onClick={handlePrint} title="Print / Save as PDF">
              <Printer size={20} /> PRINT / PDF
            </button>
            <button className="close-modal-btn" onClick={onClose}><X size={24} /></button>
          </div>

          <div className="resume-scroll-container">
            <div id="printable-resume" className="resume-paper">

              {/* Header */}
              <header className="resume-paper-header">
                <h1>ANKUR RAJ</h1>
                <p className="header-subtitle">Jalandhar, Punjab – INDIA</p>
                <div className="header-contacts">
                  <span><Phone size={11} /> +91 7372935891</span>
                  <span><Mail size={11} /> ankur2005raj@gmail.com</span>
                  <span><Linkedin size={11} /> <a href="https://linkedin.com/in/ankur-raj289" target="_blank" rel="noopener noreferrer">linkedin.com/in/ankur-raj289</a></span>
                  <span><Github size={11} /> <a href="https://github.com/Ankurraj123" target="_blank" rel="noopener noreferrer">github.com/Ankurraj123</a></span>
                </div>
              </header>

              <div className="blue-divider" />

              {/* Objective */}
              <section className="resume-section">
                <h3>Objective</h3>
                <p className="section-text">
                  Aspiring Software Engineer with hands-on experience in building scalable full-stack applications using the MERN stack. Strong foundation in Data Structure &amp; algorithms with proven problem-solving skills (HackerRank). Passionate about developing real-world solutions and optimizing system performance.
                </p>
              </section>

              {/* Education */}
              <section className="resume-section">
                <h3>Education</h3>
                <div className="edu-item">
                  <div className="edu-header">
                    <strong>Lovely Professional University</strong>
                    <span className="edu-location">Jalandhar, Punjab</span>
                  </div>
                  <div className="edu-sub">
                    <span>Bachelor of Technology in Computer Science and Engineering, CGPA: <strong>6.42</strong></span>
                    <span className="edu-date">2026</span>
                  </div>
                  <p className="edu-detail">Relevant Coursework: Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering</p>
                </div>
                <div className="edu-item">
                  <div className="edu-header">
                    <strong>DAV Public School</strong>
                    <span className="edu-location">Buxar, Bihar</span>
                  </div>
                  <div className="edu-sub">
                    <span>Senior Secondary School Certificate (12th Grade), Percentage: <strong>64%</strong></span>
                    <span className="edu-date">2022</span>
                  </div>
                  <p className="edu-detail">Key Subjects: Physics, Chemistry, Mathematics</p>
                </div>
                <div className="edu-item">
                  <div className="edu-header">
                    <strong>DAV Public School</strong>
                    <span className="edu-location">Buxar, Bihar</span>
                  </div>
                  <div className="edu-sub">
                    <span>Secondary School Certificate (10th Grade), Percentage: <strong>88%</strong></span>
                    <span className="edu-date">2020</span>
                  </div>
                  <p className="edu-detail">Achievements: 1st Rank in Mathematics</p>
                </div>
              </section>

              {/* Technical Skills */}
              <section className="resume-section">
                <h3>Technical Skills</h3>
                <div className="skills-table">
                  <div className="skill-row">
                    <span className="skill-label">Core:</span>
                    <span>JavaScript, C++, DSA</span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">Frontend:</span>
                    <span>React.js</span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">Backend:</span>
                    <span>Node.js, Express.js</span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">Database:</span>
                    <span>MongoDB, MySQL</span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">Tools:</span>
                    <span>Git, Docker</span>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="resume-section">
                <h3>Projects</h3>

                <div className="project-item">
                  <div className="project-header">
                    <h4>Scanventory – QR Based Inventory Management System</h4>
                  </div>
                  <p className="project-desc"><strong>Description:</strong> Developed a full-stack MERN inventory management system with QR code generation and scanning for real-time item tracking and management.</p>
                  <p className="tech-stack"><strong>Technologies Used:</strong> React.js, Node.js, Express.js, MongoDB</p>
                  <p className="project-desc"><strong>Impact/Achievements:</strong></p>
                  <ul className="project-list">
                    <li>Built secure REST APIs with JWT-based authentication and validation.</li>
                    <li>Implemented optimized CRUD operations for efficient data handling.</li>
                    <li>Designed a fully responsive frontend for better user experience.</li>
                  </ul>
                </div>

                <div className="project-item">
                  <div className="project-header">
                    <h4>Crop-Guard – Real Time Pest &amp; Disease Alert System</h4>
                  </div>
                  <p className="project-desc"><strong>Description:</strong> Developed a MERN-based web application providing real-time pest and disease alerts for farmers with role-based access control and location-based insights.</p>
                  <p className="tech-stack"><strong>Technologies Used:</strong> React.js, Node.js, Express.js, MongoDB, Leaflet, Socket.IO</p>
                  <p className="project-desc"><strong>Impact/Achievements:</strong></p>
                  <ul className="project-list">
                    <li>Implemented real-time communication using Socket.IO supporting multiple users.</li>
                    <li>Designed secure role-based authentication (Farmer/Admin).</li>
                    <li>Enabled faster agricultural decision-making through instant alerts.</li>
                  </ul>
                </div>

                <div className="project-item">
                  <div className="project-header">
                    <h4>AI Chatbot</h4>
                    <span className="date">May 2025</span>
                  </div>
                  <p className="project-desc">Built a browser-based chatbot system that simulates real-time conversations using scripted logic and interactive message flows. Designed a clean, responsive frontend with dynamic chat UI components to enhance user engagement.</p>
                  <p className="tech-stack"><strong>Technologies Used:</strong> HTML, CSS, JavaScript, jQuery</p>
                </div>

                <div className="project-item">
                  <div className="project-header">
                    <h4>Library Management System</h4>
                    <span className="date">March 2025</span>
                  </div>
                  <p className="project-desc">Developed a console-based Library Management System with an intuitive command-line interface. Implemented robust user authentication for librarians and members, and utilized file handling in C++ for data persistence.</p>
                  <p className="tech-stack"><strong>Technologies Used:</strong> C++ Language, DSA</p>
                </div>
              </section>

              {/* Certifications */}
              <section className="resume-section">
                <h3>Certifications</h3>
                <ul className="cert-list">
                  <li><strong>Cloud Computing:</strong> Certification by NPTEL (Completed in 2025).</li>
                  <li><strong>ChatGPT Prompt Engineering:</strong> Certification by Infosys Springboard (Completed in 2025).</li>
                  <li><strong>The Bits and Bytes of Computer Networking:</strong> Online course by Coursera (Completed in 2024).</li>
                </ul>
              </section>

            </div>
          </div>
        </motion.div>

        <style jsx="true">{`
          .resume-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }
          .resume-modal {
            width: 100%;
            max-width: 900px;
            height: 90vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: relative;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.08);
            background: #fff;
          }
          .resume-header-actions {
            padding: 0.8rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e0e0e0;
            background: #fafafa;
            flex-shrink: 0;
          }
          .action-btn {
            background: #222;
            color: #fff;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: 700;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            transition: 0.3s;
          }
          .action-btn:hover {
            background: #000;
          }
          .close-modal-btn {
            background: none;
            border: none;
            color: #666;
            cursor: pointer;
            transition: 0.3s;
          }
          .close-modal-btn:hover {
            color: #000;
            transform: rotate(90deg);
          }
          
          .resume-scroll-container {
            flex: 1;
            overflow-y: auto;
            background: #f0f0f0;
            display: flex;
            justify-content: center;
            padding: 1.5rem;
          }

          .resume-paper {
            width: 100%;
            max-width: 800px;
            background: white;
            color: #1a1a1a;
            padding: 40px 45px;
            font-family: 'Inter', sans-serif;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            line-height: 1.5;
            min-height: fit-content;
          }

          /* Header */
          .resume-paper-header {
            text-align: center;
            margin-bottom: 5px;
          }
          .resume-paper-header h1 {
            font-size: 1.8rem;
            margin: 0;
            color: #1565c0;
            font-weight: 900;
            letter-spacing: 2px;
          }
          .header-subtitle {
            font-size: 0.8rem;
            color: #444;
            margin: 2px 0 6px;
          }
          .header-contacts {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            font-size: 0.75rem;
            color: #555;
          }
          .header-contacts span {
            display: flex;
            align-items: center;
            gap: 3px;
          }
          .header-contacts a {
            color: #1565c0;
            text-decoration: none;
          }
          .header-contacts a:hover {
            text-decoration: underline;
          }

          .blue-divider {
            height: 3px;
            background: #1565c0;
            margin: 12px 0 18px;
          }

          /* Sections */
          .resume-section {
            margin-bottom: 18px;
          }
          .resume-section h3 {
            font-size: 0.95rem;
            color: #1565c0;
            border-bottom: 1.5px solid #1565c0;
            padding-bottom: 3px;
            margin-bottom: 8px;
            letter-spacing: 0.5px;
            text-transform: capitalize;
          }

          .section-text {
            font-size: 0.82rem;
            color: #333;
            line-height: 1.6;
            margin: 0;
            text-align: justify;
          }

          /* Skills */
          .skills-table {
            display: flex;
            flex-direction: column;
            gap: 3px;
          }
          .skill-row {
            font-size: 0.82rem;
            color: #333;
          }
          .skill-label {
            font-weight: 700;
            color: #000;
            margin-right: 4px;
          }

          /* Education */
          .edu-item {
            margin-bottom: 10px;
          }
          .edu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1px;
          }
          .edu-header strong {
            color: #000;
            font-size: 0.88rem;
          }
          .edu-location {
            font-size: 0.82rem;
            color: #555;
          }
          .edu-sub {
            display: flex;
            justify-content: space-between;
            font-size: 0.82rem;
            color: #444;
          }
          .edu-date {
            font-weight: 600;
            color: #555;
          }
          .edu-detail {
            font-size: 0.78rem;
            color: #666;
            margin: 1px 0 0;
            font-style: italic;
          }

          /* Projects */
          .project-item {
            margin-bottom: 14px;
          }
          .project-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3px;
          }
          .project-header h4 {
            margin: 0;
            font-size: 0.88rem;
            color: #000;
          }
          .date {
            font-size: 0.82rem;
            font-weight: 600;
            color: #555;
          }
          .project-desc {
            font-size: 0.82rem;
            color: #333;
            margin: 2px 0;
            line-height: 1.5;
          }
          .tech-stack {
            font-size: 0.82rem;
            color: #c62828;
            font-style: italic;
            margin: 2px 0;
          }
          .project-list {
            margin: 2px 0 0 18px;
            padding: 0;
            font-size: 0.8rem;
            color: #333;
          }
          .project-list li {
            margin-bottom: 1px;
          }

          /* Certifications */
          .cert-list {
            margin: 0;
            padding-left: 18px;
            font-size: 0.82rem;
            color: #333;
          }
          .cert-list li {
            margin-bottom: 3px;
          }

          @media print {
            body * { visibility: hidden; }
            #printable-resume, #printable-resume * { visibility: visible; }
            #printable-resume {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              padding: 20px;
              box-shadow: none;
            }
            .resume-overlay { background: white; }
            .resume-header-actions { display: none; }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;
