import React, { useRef, useEffect, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, width = "fit-content" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ width }}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-16 blur-sm"
      } ${className}`}
    >
      <div style={{ transitionDelay: `${delay}ms` }}>
        {children}
      </div>
    </div>
  );
};