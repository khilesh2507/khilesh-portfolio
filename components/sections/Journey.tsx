"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionLabel } from "@/components/SectionLabel";

interface Stat {
  value: string;
  label: string;
}

interface Entry {
  year: string;
  period: string;
  company: string;
  role: string;
  tagline: string;
  summary: string;
  stats: Stat[];
  fullStory: string;
}

function StatChip({ value, label }: Stat) {
  return (
    <div className="border border-divider px-4 py-3 flex-shrink-0 min-w-[128px]">
      <p
        className="font-serif text-ink text-[18px] leading-none mb-[5px]"
        style={{ fontWeight: 400 }}
      >
        {value}
      </p>
      <p
        className="font-sans text-muted text-[10px] tracking-[0.1em] uppercase leading-none"
        style={{ fontWeight: 400 }}
      >
        {label}
      </p>
    </div>
  );
}

function JourneyEntry({ entry, index }: { entry: Entry; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <SectionWrapper delay={index * 0.07}>
      <div className="border-t border-divider py-9 md:py-10">
        <div className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-10">

          {/* Date column */}
          <div className="flex md:flex-col gap-2 md:gap-1 items-baseline md:items-start">
            <span
              className="font-sans text-faint text-[13px] tracking-[0.06em]"
              style={{ fontWeight: 300 }}
            >
              {entry.year}
            </span>
            <span
              className="font-sans text-faint text-[11px] leading-snug md:mt-1"
              style={{ fontWeight: 300 }}
            >
              {entry.period}
            </span>
          </div>

          {/* Content column */}
          <div>

            {/* Company + Role */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
              <h3
                className="font-serif text-ink text-xl md:text-2xl tracking-[-0.01em]"
                style={{ fontWeight: 400 }}
              >
                {entry.company}
              </h3>
              <span
                className="font-sans text-muted text-[13px]"
                style={{ fontWeight: 300 }}
              >
                — {entry.role}
              </span>
            </div>

            {/* Tagline */}
            <p
              className="font-serif text-ink text-[17px] md:text-[18px] leading-snug tracking-[-0.01em] mb-4"
              style={{ fontWeight: 300, fontStyle: "italic" }}
            >
              {entry.tagline}
            </p>

            {/* Condensed summary */}
            <p
              className="font-sans text-muted text-[14px] md:text-[15px] leading-[1.85] mb-6 max-w-[560px]"
              style={{ fontWeight: 300 }}
            >
              {entry.summary}
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 mb-5">
              {entry.stats.map((stat) => (
                <StatChip key={stat.label} {...stat} />
              ))}
            </div>

            {/* Expand toggle */}
            <button
              onClick={() => setExpanded((e) => !e)}
              className="flex items-center gap-2 cursor-pointer group mt-1"
              aria-expanded={expanded}
            >
              <span
                className="font-sans text-muted text-[11px] tracking-[0.1em] uppercase group-hover:text-ink transition-colors duration-300"
                style={{ fontWeight: 400 }}
              >
                {expanded ? "Collapse" : "Read full story"}
              </span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-muted group-hover:text-ink transition-colors duration-300"
                style={{ display: "inline-flex" }}
              >
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
            </button>

            {/* Expanded full story */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="pt-6 mt-5 border-t border-divider">
                    <p
                      className="font-sans text-muted text-[14px] md:text-[15px] leading-[1.85] max-w-[560px]"
                      style={{ fontWeight: 300 }}
                    >
                      {entry.fullStory}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

const ENTRIES: Entry[] = [
  {
    year: "2026",
    period: "Jul 2026 – Present",
    company: "ZBULLET",
    role: "Product Intern",
    tagline: "Making the Call",
    summary:
      "At ZBULLET, I got to see what happens when you stay with a product long enough to see your decisions play out. From shaping the strategy to shipping changes, studying their impact, and deciding what to do next, FreeBinge taught me to think in cycles not isolated features.",
    stats: [
      { value: "40K+", label: "MAU" },
      { value: "3×", label: "Retention" },
      { value: "2×", label: "Revenue" },
    ],
    fullStory:
      "At ZBULLET, I got my first opportunity to truly own a product end-to-end. Working on FreeBinge meant looking at the product from multiple angles at once, how users discover content, what makes them keep watching, what brings them back, and where the product can create more value. I started by digging into user behavior and content performance. Looking at show level engagement, watch time, open rates, and completion rates helped me understand not just what users were watching, but how different parts of the experience influenced their behavior. One of the biggest opportunities I found was around repeat consumption. I analyzed more than 1,000 users and used those insights to shape a new reward structure designed to encourage users to come back and watch more. At the same time, I looked beyond FreeBinge itself, benchmarking products, studying competitors, and evaluating experiences across 10+ products in 3+ countries to understand what others were doing differently. What changed for me was the nature of the questions I was asking. Earlier, I was learning to understand people. Then I learned to identify patterns. At FreeBinge, I had to turn those patterns into decisions. ZBULLET taught me that product ownership isn't just about finding what could be better. It's about deciding what to do about it and understanding why.",
  },
  {
    year: "2026",
    period: "Feb 2026 – Jun 2026",
    company: "FanTv AI",
    role: "Product Intern",
    tagline: "Balancing the Ecosystem",
    summary:
      "FanTv taught me great products aren't built for one user group, but for ecosystems where creators, consumers, and the platform all need to win together.",
    stats: [
      { value: "50K+", label: "Users Analyzed" },
      { value: "10+", label: "Platforms Studied" },
      { value: "3+", label: "Dashboards Built" },
    ],
    fullStory:
      "Before FanTv, I mostly thought about users as individuals. A client. A student. A parent. At FanTv, I was introduced to a platform where every decision affected multiple groups at once. Creators wanted visibility. Consumers wanted engaging content. The platform needed both to keep coming back. What made the experience fascinating was realizing that these needs didn't always align. A feature that helped creators grow wouldn't necessarily improve the experience for consumers. A change that increased engagement in one part of the journey could create friction somewhere else. The more I explored creator journeys, user behavior, and competing platforms, the more I appreciated the balancing act behind successful products. Great product decisions weren't about optimizing for a single user, they were about creating value across an entire ecosystem. For the first time, I wasn't just thinking about what users needed. I was thinking about how different groups of users interact with each other, influence each other, and ultimately shape the success of a platform. FanTv taught me that great products aren't built for one user. They're built for entire ecosystems of users.",
  },
  {
    year: "2025",
    period: "Oct 2025 – Jan 2026",
    company: "Riarpro",
    role: "Founder's Office Intern",
    tagline: "Connecting the Dots",
    summary:
      "Worked across hundreds of student, parent, and user conversations in the Founder's Office, and learned to spot patterns that reveal opportunities others miss.",
    stats: [
      { value: "300+", label: "Users Analyzed" },
      { value: "₹10L+", label: "Revenue Opportunity" },
      { value: "8%", label: "Order Uplift Driven" },
    ],
    fullStory:
      "Creative Editz taught me how to understand individual customers. RiarPro taught me how to look beyond individual conversations and identify larger opportunities. Working in the Founder's Office exposed me to hundreds of students, parents, and user interactions. At first, every conversation felt unique, different goals, different concerns, different expectations. But over time, I started noticing something interesting. The same frustrations kept appearing. The same questions kept being asked. The same needs kept going unmet. What seemed like isolated problems were actually patterns. The more time I spent listening, the more I realized that opportunities rarely announce themselves. They emerge when you connect the dots across dozens of conversations and begin to see what others might overlook. For the first time, I wasn't just solving problems, I was learning how to discover them.",
  },
  {
    year: "2025",
    period: "Jan 2025 – Aug 2025",
    company: "Creative Editz",
    role: "Founder",
    tagline: "Learning to Build from Zero",
    summary:
      "Founded a video & graphic design agency with no roadmap or playbook to follow. Learned that growth comes from understanding people, not just delivering a service.",
    stats: [
      { value: "₹3L+", label: "Revenue Generated" },
      { value: "10+", label: "Clients Served" },
      { value: "80%", label: "Client Retention" },
    ],
    fullStory:
      "Creative Editz was my first experience creating something from nothing. There was no roadmap, customer base, or proven playbook to follow. Every decision, from defining our services and finding clients to pricing and positioning, was learned through experimentation. What surprised me most was that growth rarely came from having the best service. It came from understanding people. Every client had different goals, expectations, and ways of communicating. Learning to ask better questions, understand underlying needs, and adapt accordingly became just as important as the work itself. Over time, those conversations shaped what we offered, how we delivered value, and ultimately how the business grew. Looking back, Creative Editz wasn't just my first business, it was my first lesson in understanding people and building around their needs.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-32 md:py-40 border-t border-divider">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="grid md:grid-cols-[280px_1fr] gap-16 md:gap-24 lg:gap-32">

          {/* Left: sticky heading */}
          <SectionWrapper>
            <SectionLabel number="02" label="My Journey" />
            <h2
              className="font-serif text-ink leading-[1.2] tracking-[-0.01em] sticky top-24"
              style={{
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
              }}
            >
              A thread of work, learning, and becoming.
            </h2>
          </SectionWrapper>

          {/* Right: entries */}
          <div>
            {ENTRIES.map((entry, index) => (
              <JourneyEntry key={entry.company} entry={entry} index={index} />
            ))}
            <div className="border-t border-divider" />
          </div>

        </div>
      </div>
    </section>
  );
}
