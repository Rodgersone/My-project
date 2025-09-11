import { useEffect, useState } from 'react';

function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers = [];
    const options = {
      root: null,
      rootMargin: '0px 0px -60% 0px', // section is active when it's at 40% from top
      threshold: 0,
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      }, options);

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [ids]);

  return activeId;
}

export default useScrollSpy;
