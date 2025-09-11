import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/Home.css";
import "./styles/Projects.css";
import "./styles/About.css";
import "./styles/Skills.css";
import "./styles/Contact.css";
import "./styles/Footer.css";
import "./styles/BackToTop.css";

import MyNavbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import AdminLogin from "./components/AdminLogin";
import AdminMessages from "./components/AdminMessages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true }); // ⏳ fixed to 2s (20,000ms was too slow!)
  }, []);

  return (
    <Router>
      <MyNavbar />
      <Routes>
        {/* Main Portfolio */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
              <BackToTop />
            </>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/login"
          element={<AdminLogin onLogin={() => (window.location.href = "/admin/messages")} />}
        />
        <Route path="/admin/messages" element={<AdminMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
