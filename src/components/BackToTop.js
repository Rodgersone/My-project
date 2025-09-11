import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/BackToTop.css';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`back-to-top-container ${isVisible ? 'show' : ''}`}>
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
}

export default BackToTop;
