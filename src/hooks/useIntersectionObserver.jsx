import { useEffect, useRef } from 'react';

export function useIntersectionObserver(options = { threshold: 0.1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);

    // Dynamic scanning for targeted child components
    const reveals = currentRef.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options]);

  return containerRef;
}