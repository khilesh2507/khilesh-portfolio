"use client";

import { motion } from "motion/react";

export function Hero() {
  const handleScrollDown = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-end pb-14 md:pb-16"
    >
      <div className="max-w-7xl mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Constrained content block — prevents name from stretching wall-to-wall */}
        <motion.div
          className="max-w-[820px]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Name — single line on desktop, wraps gracefully on narrow screens */}
          <h1
            className="font-serif text-ink leading-[0.91] tracking-[-0.025em] mb-10"
            style={{
              fontWeight: 300,
              fontSize: "clamp(3.75rem, 8vw, 8.5rem)",
            }}
          >
            Khilesh{" "}
            <em style={{ fontStyle: "italic" }}>Mukhija</em>
          </h1>

          {/* Divider rule + tagline + metadata */}
          <div className="flex items-start gap-8 md:gap-14">
            <div className="w-10 h-px bg-divider mt-3 flex-shrink-0" />

            <div>
              <p
                className="font-sans text-muted text-[15px] md:text-[18px] leading-[1.65]"
                style={{ fontWeight: 300 }}
              >
                I turn ambiguous problems
                <br />
                into products that actually ship.
              </p>

              {/* Metadata */}
              <div className="mt-5 space-y-[5px]">
                <p
                  className="font-sans text-faint text-[12px] tracking-[0.03em] leading-snug"
                  style={{ fontWeight: 300 }}
                >
                  Product Intern @ FanTv AI
                </p>
                <p
                  className="font-sans text-faint text-[12px] tracking-[0.03em] leading-snug"
                  style={{ fontWeight: 300 }}
                >
                  Previously Founder, Creative Editz
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue — editorial vertical style */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 right-8 md:right-14 lg:right-20 flex flex-col items-center gap-4 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        aria-label="Scroll to next section"
      >
        <div className="w-px h-8 bg-divider group-hover:bg-ink transition-colors duration-500" />
        <span
          className="font-sans text-faint text-[9px] tracking-[0.22em] uppercase group-hover:text-ink transition-colors duration-500"
          style={{
            fontWeight: 400,
            writingMode: "vertical-lr",
          }}
        >
          Scroll
        </span>
      </motion.button>
    </section>
  );
}
