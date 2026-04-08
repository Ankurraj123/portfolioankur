import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Brain, Database, Hammer, Users } from 'lucide-react';

// Tech logo component using devicons CDN
const TechLogo = ({ name, icon, color }) => (
  <motion.div
    className="tech-logo-chip"
    whileHover={{ y: -4, scale: 1.08 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    title={name}
  >
    <div className="tech-logo-icon" style={{ color }}>
      {icon}
    </div>
    <span className="tech-logo-name">{name}</span>
    <style jsx="true">{`
      .tech-logo-chip {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
        padding: 0.75rem 0.9rem;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
        cursor: default;
        min-width: 72px;
        transition: border-color 0.3s ease, background 0.3s ease;
      }
      .tech-logo-chip:hover {
        background: rgba(255, 255, 255, 0.07);
        border-color: rgba(255, 255, 255, 0.15);
      }
      .tech-logo-icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .tech-logo-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      }
      .tech-logo-name {
        font-size: 0.6rem;
        font-weight: 700;
        color: var(--text-secondary);
        letter-spacing: 0.5px;
        text-align: center;
        white-space: nowrap;
      }
    `}</style>
  </motion.div>
);

const imgIcon = (src) => <img src={src} alt="" />;

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={20} />,
      skills: [
        { name: "C", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"), color: "#5C6BC0" },
        { name: "C++", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"), color: "#00599C" },
        { name: "JavaScript", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"), color: "#F7DF1E" },
        { name: "Python", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"), color: "#3776AB" },
      ]
    },
    {
      title: "Frameworks",
      icon: <Layers size={20} />,
      skills: [
        { name: "React.js", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"), color: "#61DAFB" },
        { name: "Node.js", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"), color: "#339933" },
        { name: "Express.js", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"), color: "#ffffff" },
        { name: "Tailwind", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"), color: "#38BDF8" },
        { name: "HTML5", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"), color: "#E44D26" },
        { name: "CSS3", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"), color: "#1572B6" },
      ]
    },
    {
      title: "Databases",
      icon: <Database size={20} />,
      skills: [
        { name: "MongoDB", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"), color: "#47A248" },
        { name: "MySQL", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"), color: "#4479A1" },
        { name: "PostgreSQL", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"), color: "#336791" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Hammer size={20} />,
      skills: [
        { name: "Git", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"), color: "#F05032" },
        { name: "GitHub", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"), color: "#ffffff" },
        { name: "Linux", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"), color: "#FCC624" },
        { name: "VS Code", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"), color: "#007ACC" },
        { name: "Docker", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"), color: "#2496ED" },
        { name: "Vercel", icon: imgIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"), color: "#ffffff" },
      ]
    },
    {
      title: "Core Expertise",
      icon: <Brain size={20} />,
      skills: [
        { name: "DSA", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, color: "#f43f5e" },
        { name: "OS", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, color: "#8b5cf6" },
        { name: "DBMS", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>, color: "#10b981" },
        { name: "Gen AI", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>, color: "#f59e0b" },
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users size={20} />,
      skills: [
        { name: "Problem Solving", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>, color: "#6366f1" },
        { name: "Teamwork", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, color: "#3b82f6" },
        { name: "Adaptability", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, color: "#10b981" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="container skills-section">
      <div className="section-header">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
      </div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card glass"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="card-header">
              <div className="icon-wrapper">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-logos">
              {category.skills.map((skill, sIdx) => (
                <TechLogo key={sIdx} name={skill.name} icon={skill.icon} color={skill.color} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx="true">{`
        .skills-section {
          padding: 8rem 2rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .skill-card {
          padding: 2rem;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.3s ease;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
        }

        .card-header h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
