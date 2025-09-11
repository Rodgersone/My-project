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
            alt="Rodgers - Fullstack Developer"
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
            I’m <strong>Rodgers</strong>, a passionate Fullstack Developer based in Nairobi, Kenya. I enjoy building clean, responsive, and interactive web applications that provide seamless user experiences.
          </p>
          <p>
            I work with tools like <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> to deliver real-world fullstack projects. I’m continuously sharpening my skills to create both frontend and backend solutions.
          </p>

          <p>
            I care deeply about writing clean code, crafting great design, and learning continuously. Here’s what I’m currently using:
          </p>

          <ul>
            <li> HTML, CSS, JavaScript (ES6+)</li>
            <li> React & Hooks</li>
            <li> Node.js, Express & MongoDB</li>
            <li> Bootstrap, Git & GitHub</li>
            <li> Basic UI/UX with Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
