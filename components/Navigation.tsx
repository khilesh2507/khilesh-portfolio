"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(248, 246, 242, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E0DDD8" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="font-serif text-ink text-lg tracking-wide hover:opacity-60 transition-opacity duration-300 cursor-pointer"
          style={{ fontWeight: 400 }}
        >
          KM
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className="font-sans text-ink text-[13px] tracking-[0.08em] uppercase hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                style={{ fontWeight: 400 }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-ink transition-all duration-300"
            style={{
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px bg-ink transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-ink transition-all duration-300"
            style={{
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(248, 246, 242, 0.97)",
              borderBottom: "1px solid #E0DDD8",
            }}
          >
            <ul className="px-8 py-6 flex flex-col gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="font-sans text-ink text-[13px] tracking-[0.08em] uppercase hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
