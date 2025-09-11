// src/components/Contact.js
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { sendMessage } from "../api/messages";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = await sendMessage(formData);

      if (data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          I'd love to hear from you — whether it's a project, idea, or opportunity!
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              <FaPhone />{" "}
              <a href="https://wa.me/254715580184" target="_blank" rel="noreferrer">
                0715580184
              </a>
            </p>
            <p>
              <FaEnvelope />{" "}
              <a href="mailto:rodgerso318@gmail.com">rodgerso318@gmail.com</a>
            </p>
            <p>
              <FaLinkedin />{" "}
              <a
                href="https://www.linkedin.com/in/rodgers-okello-a2969125a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <FaGithub />{" "}
              <a
                href="https://github.com/rodgerso318"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>

            {/* Highlighted Projects */}
            <div className="project-links">
              <ul>
                <li>
                  <a
                    href="https://github.com/rodgerso318/portfolio-site"
                    target="_blank"
                    rel="noreferrer"
                  >
                     Portfolio Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/rodgerso318/recipe-explorer"
                    target="_blank"
                    rel="noreferrer"
                  >
                     Recipe Explorer
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/rodgerso318/event-booking-system"
                    target="_blank"
                    rel="noreferrer"
                  >
                     Event Booking System
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {formStatus && (
              <div className={`toast-message ${formStatus}`}>
                {formStatus === "success"
                  ? "Message sent successfully!"
                  : "Something went wrong. Please try again."}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
