import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Let's <span className="gradient-text">Architect</span> Something Great</h2>
      
      <div className="contact-grid">
        <motion.div 
          className="contact-info-panel"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '400px', lineHeight: '1.6' }}>
            I'm currently looking for new opportunities as a Software Engineer. 
            If you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="contact-methods">
            <div className="method">
              <Mail className="gradient-text" size={24} />
              <div>
                <h5>Email</h5>
                <p>ankur2005raj@gmail.com</p>
              </div>
            </div>
            
            <div className="method">
              <Phone className="gradient-text" size={24} />
              <div>
                <h5>Phone</h5>
                <p>+91-7372935891</p>
              </div>
            </div>
            
            <div className="method">
              <MapPin className="gradient-text" size={24} />
              <div>
                <h5>Location</h5>
                <p>Punjab, India / Bihar, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="glass contact-form-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.02, background: 'var(--accent-primary)' }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style jsx="true">{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: start;
        }
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .method {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .method h5 { font-size: 1rem; color: var(--text-primary); }
        .method p { color: var(--text-secondary); font-size: 0.9rem; }
        
        .contact-form-panel {
          padding: 2.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          padding: 1rem;
          border-radius: 8px;
          color: white;
          font-family: inherit;
          outline: none;
          transition: 0.3s;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-primary);
        }
        .submit-btn {
          padding: 1rem;
          background: #222;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
