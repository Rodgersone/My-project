// src/components/Projects.js
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Fetch projects from backend
    fetch("https://portfolio-project-backend-ohd2.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => {
        console.error("Error fetching projects:", err);
        // ✅ Fallback projects aligned with CV
        setProjects([
          {
            id: 1,
            title: "Event Booking System",
            description:
              "A fullstack platform that allows users to explore events, book tickets, and manage reservations with secure authentication.",
            tech: "React, Node.js, MongoDB, Express",
            status: "in-progress",
          },
          {
            id: 2,
            title: "E-Commerce Platform",
            description:
              "A mini e-commerce solution with product listings, cart functionality, and checkout flow — focused on clean UI and usability.",
            tech: "React, Node.js, MongoDB",
            status: "in-progress",
          },
        ]);
      });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 data-aos="fade-up">Projects</h2>
        <p className="projects-intro" data-aos="fade-up" data-aos-delay="100">
          A collection of real and practice-based fullstack projects showcasing
          my skills in React, Node.js, and JavaScript. Each project emphasizes
          responsive design, interactivity, and solid UI/UX principles.
        </p>

        <div className="projects-grid">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                className="project-card"
                key={project.id || index}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="tech-stack">{project.tech}</p>
                <p className="no-demo">Demo not available yet</p>
              </div>
            ))
          ) : (
            <p>No projects to display yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
