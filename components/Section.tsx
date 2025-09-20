
import React, { useRef, useEffect } from 'react';

interface SectionProps {
  id: string;
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
  onVisible: (id: string) => void;
}

const Section: React.FC<SectionProps> = ({ id, imageUrl, children, className = '', onVisible }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4, // Trigger when 40% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, onVisible]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center py-20 md:py-32 ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
