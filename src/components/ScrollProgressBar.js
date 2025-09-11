import React, { useEffect, useState } from 'react';
import '../styles/ScrollProgress.css';

function ScrollProgressBar() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setScrollHeight(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ height: `${scrollHeight}%` }}
      ></div>
    </div>
  );
}

export default ScrollProgressBar;
