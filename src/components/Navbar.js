import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';

function MyNavbar() {
  const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = window.innerHeight / 2; // center of viewport

      let currentSection = 'home'; // default

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          const sectionTop = section.offsetTop;

          if (scrollY + offset >= sectionTop) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    setActiveSection(id); // Optional, gives immediate feedback when clicking
  };

  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm custom-navbar py-3">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="fw-bold text-primary fs-4 brand-logo"
        >
          Rodgers Design
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto navbar-links d-flex flex-column flex-lg-row gap-3 align-items-center mt-3 mt-lg-0">
            {sectionIds.map((id) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`nav-link ${activeSection === id ? 'active-link' : ''}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
