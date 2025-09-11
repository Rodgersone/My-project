import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [btnLoading, setBtnLoading] = useState(false);

  const handleExploreClick = () => {
    setBtnLoading(true);
    setTimeout(() => {
      const projectSection = document.getElementById('projects');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
      setBtnLoading(false);
    }, 2000);
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1>Hi, I'm Rodgers — Fullstack Developer based in Nairobi</h1>
              <p className="hero-sub">
                I build responsive and interactive web applications using React, Node.js, and modern UI/UX practices.
              </p>

              <ul className="hero-list list-unstyled">
                <li>Skilled in modern JavaScript (ES6+) and React fundamentals</li>
                <li>Strong UI/UX sense, including Figma prototyping and accessibility best practices</li>
                <li>Experienced with backend development using Node.js, Express, and MongoDB</li>
              </ul>

              <button
                className="hero-btn btn btn-primary mt-3"
                onClick={handleExploreClick}
                disabled={btnLoading}
                aria-label="Explore Projects"
              >
                {btnLoading ? 'Loading...' : 'Explore My Projects'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
