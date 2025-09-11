import React from 'react';
import '../styles/Skills.css';
import 'aos/dist/aos.css';

function Skills() {
  const skills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript ', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git & GitHub', icon: '🔧' },
    { name: 'RESTful APIs', icon: '🔗' },
    { name: 'Figma (UI/UX)', icon: '🎯' },
    { name: 'Responsive Design', icon: '📱' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 data-aos="fade-up" data-aos-duration="1000">My Skills</h2>

      <p
        className="skills-intro"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        These are the core technologies and tools I use to build professional, scalable, and user-friendly web applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card"
            data-aos="zoom-in"
            data-aos-delay={200 + index * 100}
            data-aos-duration="800"
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
