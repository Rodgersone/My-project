import React, { useEffect, useState } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Fetch projects from live backend on Render
    fetch("https://portfolio-project-backend-ohd2.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => {
        console.error("Error fetching projects:", err);
        // fallback projects if fetch fails
        setProjects([
          {
            id: 1,
            title: "Recipe Explorer",
            description: "A responsive recipe browsing app built with React.",
            tech: "React, Bootstrap",
            status: "live",
            demo: "https://recipe-explorer-rodgers.netlify.app",
          },
          {
            id: 2,
            title: "Blog Platform",
            description: "Node.js backend with MongoDB + React frontend.",
            tech: "Node.js, MongoDB, React",
            status: "live", // updated from "coming-soon"
            demo: "https://resonant-zuccutto-f40c77.netlify.app", // add your deployed frontend link
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
                <div className="project-buttons">
                  {project.status === "coming-soon" ? (
                    <button className="btn-coming-soon" disabled>
                      Coming Soon
                    </button>
                  ) : (
                    project.demo && (
                      <a
                        href={project.demo}
                        className="btn-demo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    )
                  )}
                </div>
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
