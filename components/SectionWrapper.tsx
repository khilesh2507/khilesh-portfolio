"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function SectionWrapper({
  children,
  className = "",
  delay = 0,
  once = true,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-8% 0px -8% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
