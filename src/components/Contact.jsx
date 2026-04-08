import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Phone, ArrowUpRight, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const subject = encodeURIComponent(`[Portfolio] ${formData.topic || 'General Inquiry'} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Ankur,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:ankur2005raj@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const contactLinks = [
    {
      label: 'EMAIL',
      value: 'ankur2005raj@gmail.com',
      icon: <Mail size={18} />,
      href: 'mailto:ankur2005raj@gmail.com',
      color: '#6366f1'
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/ankurraj2005',
      icon: <Linkedin size={18} />,
      href: 'https://linkedin.com/in/ankurraj2005',
      color: '#0077b5'
    },
    {
      label: 'PHONE',
      value: '+91 7372935891',
      icon: <Phone size={18} />,
      href: 'tel:+917372935891',
      color: '#10b981'
    }
  ];

  return (
    <section id="contact" className="container" style={{ padding: '6rem 0 4rem' }}>
      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-inner">
          {/* Left Column */}
          <div className="contact-left">
            <motion.span
              className="contact-eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              GET IN TOUCH
            </motion.span>

            <h2 className="contact-heading">
              Have a project in<br />
              mind? <span className="heading-accent">Let's talk.</span>
            </h2>

            <p className="contact-subtext">
              Whether it's a collaboration, freelance project, internship, or just a friendly hello — I'd love to hear from you. Drop a message and I'll get back to you shortly.
            </p>

            <div className="contact-links-list">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.label === 'LINKEDIN' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <div className="link-icon" style={{ background: `${link.color}15`, color: link.color }}>
                    {link.icon}
                  </div>
                  <div className="link-content">
                    <span className="link-label">{link.label}</span>
                    <span className="link-value">{link.value}</span>
                  </div>
                  <ArrowUpRight size={16} className="link-arrow" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-topic">Topic</label>
                <select
                  id="contact-topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Choose a topic</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Freelance Work">Freelance Work</option>
                  <option value="Internship">Internship Opportunity</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your idea, requirement, or question..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={`form-submit-btn ${status}`}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                disabled={status === 'sending'}
              >
                {status === 'idle' && <><Send size={16} /> Send Message</>}
                {status === 'sending' && <><Loader2 size={16} className="spin-icon" /> Sending...</>}
                {status === 'sent' && <><CheckCircle size={16} /> Message Sent!</>}
              </motion.button>

              <p className="form-note">
                This opens your email client to send directly to <strong>ankur2005raj@gmail.com</strong>
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <style jsx="true">{`
        .contact-wrapper {
          border-radius: 28px;
          border: 1px solid var(--glass-border);
          background: linear-gradient(145deg, rgba(15, 15, 20, 0.6), rgba(8, 8, 12, 0.8));
          backdrop-filter: blur(30px);
          overflow: hidden;
          padding: 3.5rem;
        }

        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Left Column */
        .contact-eyebrow {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 3px;
          color: var(--accent-primary);
          text-transform: uppercase;
          display: block;
          margin-bottom: 1.5rem;
        }

        .contact-heading {
          font-size: 2.6rem;
          font-weight: 900;
          color: var(--text-primary);
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }

        .heading-accent {
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-subtext {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 420px;
        }

        .contact-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-link-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          background: rgba(255, 255, 255, 0.02);
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-link-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .link-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .link-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .link-label {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .link-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 0.15rem;
        }

        .link-arrow {
          color: var(--text-secondary);
          opacity: 0;
          transition: all 0.3s ease;
          transform: translateX(-4px);
        }

        .contact-link-card:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Right Column - Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-field label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 0.5px;
        }

        .form-field input,
        .form-field textarea,
        .form-field select {
          width: 100%;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 0.9rem 1rem;
          border-radius: 10px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s ease;
          -webkit-appearance: none;
        }

        .form-field select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }

        .form-field select option {
          background: #111;
          color: #fff;
        }

        .form-field input:focus,
        .form-field textarea:focus,
        .form-field select:focus {
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }

        .form-field textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-submit-btn.idle {
          background: var(--text-primary);
          color: var(--bg-color);
        }

        .form-submit-btn.sending {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          cursor: wait;
        }

        .form-submit-btn.sent {
          background: #10b981;
          color: white;
        }

        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .form-note {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-align: center;
          opacity: 0.6;
        }

        .form-note strong {
          color: var(--text-primary);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .contact-wrapper {
            padding: 2rem;
          }
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .contact-heading {
            font-size: 2rem;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
