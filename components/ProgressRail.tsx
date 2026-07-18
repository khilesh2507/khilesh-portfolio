"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "case-studies", label: "Work" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
];

export function ProgressRail() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-0">
      {/* Vertical line background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-divider" />

      {/* Scroll progress fill */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-ink origin-top transition-none"
        style={{ height: `${scrollProgress * 100}%` }}
      />

      {/* Section dots */}
      <div className="relative flex flex-col gap-8">
        {SECTIONS.map(({ id, label }, index) => {
          const isActive = activeSection === id;
          const isHovered = hoveredSection === id;

          return (
            <div
              key={id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredSection(id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <button
                onClick={() => handleClick(id)}
                className="relative flex items-center justify-center cursor-pointer"
                style={{ width: 12, height: 12 }}
                aria-label={`Navigate to ${label}`}
              >
                {/* Dot */}
                <span
                  className="absolute rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? 8 : 4,
                    height: isActive ? 8 : 4,
                    backgroundColor: isActive ? "#0A0A0A" : "#ADADAD",
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    top: "50%",
                  }}
                />
              </button>

              {/* Section label on hover or active */}
              <AnimatePresence>
                {(isActive || isHovered) && (
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -4 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-5 whitespace-nowrap font-sans text-[10px] tracking-[0.12em] uppercase cursor-pointer"
                    style={{
                      color: isActive ? "#0A0A0A" : "#ADADAD",
                      fontWeight: 400,
                    }}
                    onClick={() => handleClick(id)}
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
