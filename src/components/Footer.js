import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-left">
          <h3>Rodgers Portfolio</h3>
          <p>Building clean, creative, and functional websites with purpose and passion.</p>
        </div>

        {/* Quick Navigation */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://wa.me/254715580184" target="_blank" rel="noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rodgers Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
