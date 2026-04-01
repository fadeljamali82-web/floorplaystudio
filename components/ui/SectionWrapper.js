'use client';

import { useEffect, useRef } from 'react';
import styles from './SectionWrapper.module.css';

export default function SectionWrapper({
  children,
  className = '',
  background = 'white',
  spacing = 'default',
  id,
  narrow = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.revealed);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles.section} ${styles[background]} ${styles[spacing]} ${className}`}
    >
      <div className={`${styles.container} ${narrow ? styles.narrow : ''}`}>
        {children}
      </div>
    </section>
  );
}
