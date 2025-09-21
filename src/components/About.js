import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import profileImg from '../assets/profile.jpg';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div
          className="about-image"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img
            src={profileImg}
            alt="Rodgers - Frontend Developer"
            className="profile-img"
          />
        </div>

        <div
          className="about-text"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2>About Me</h2>
          <p>
            I’m <strong>Rodgers</strong>, an aspiring Frontend Developer based in Nairobi, Kenya. 
            I enjoy creating clean, responsive, and user-friendly web applications that bring ideas to life in the browser.
          </p>
          <p>
            My main focus is on building modern interfaces with <strong>JavaScript</strong> and <strong>React.js</strong>. 
            I also use tools like <strong>Git/GitHub</strong> for collaboration and <strong>Figma</strong> for basic design work. 
            Currently, I’m developing projects such as a portfolio website, an event booking system, and a mini e-commerce platform to strengthen my skills.
          </p>
          <p>
            I’m committed to writing clean code, improving my problem-solving abilities, and continuously learning new technologies to grow as a developer.
          </p>

          <ul>
            <li> HTML, CSS, JavaScript (ES6+)</li>
            <li> React.js & Hooks</li>
            <li> Responsive Web Design</li>
            <li> Git & GitHub</li>
            <li> Basic Figma for design concepts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
