import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [btnLoading, setBtnLoading] = useState(false);

  const handleExploreClick = () => {
    setBtnLoading(true);

    // Wait 2 seconds, then scroll to Projects section
    setTimeout(() => {
      const projectSection = document.getElementById('projects');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
      setBtnLoading(false); // reset button loading state
    }, 2000);
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1>Hi, I'm Rodgers — Frontend Developer based in Nairobi</h1>
              <p className="hero-sub">
                I design and build responsive, user-friendly web applications with React.js, JavaScript, and modern UI practices.
              </p>

              <ul className="hero-list list-unstyled">
                <li>Proficient in JavaScript and React.js fundamentals</li>
                <li>Experience with responsive design, accessibility, and clean UI/UX</li>
                <li>Familiar with backend basics: Node.js, Express, and MongoDB</li>
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
