import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionLabel } from "@/components/SectionLabel";

function BeatLabel({ children }: { children: string }) {
  return (
    <p
      className="font-sans text-faint text-[10px] tracking-[0.18em] uppercase mb-5"
      style={{ fontWeight: 400 }}
    >
      {children}
    </p>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-divider py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">

        {/* Label */}
        <SectionWrapper>
          <SectionLabel number="01" label="About" />
        </SectionWrapper>

        {/* Pull quote */}
        <SectionWrapper delay={0.1}>
          <blockquote
            className="font-serif text-ink leading-[1.18] tracking-[-0.015em] mb-16 md:mb-20 max-w-3xl"
            style={{
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            }}
          >
            "I've always found it difficult
            <br />
            to leave things the way they are."
          </blockquote>
        </SectionWrapper>

        {/*
          Two-column grid — no items-start so the left column stretches
          to match the right column's height, which allows sticky to work.
        */}
        <div className="grid md:grid-cols-[260px_1fr] gap-12 md:gap-16 lg:gap-20">

          {/* Portrait — sticky on desktop so it pins while beats scroll past */}
          <SectionWrapper delay={0.12} className="md:sticky md:top-28 md:self-start">
            <div
              className="relative w-full aspect-[3/4] overflow-hidden"
              style={{ backgroundColor: "#ECEAE5" }}
              aria-label="Portrait photo — placeholder"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-6 h-6">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-divider" />
                  <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-divider" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <p
                  className="font-sans text-faint text-[10px] tracking-[0.14em] uppercase"
                  style={{ fontWeight: 400 }}
                >
                  Khilesh Mukhija
                </p>
              </div>
            </div>
          </SectionWrapper>

          {/* Right column — three beats, each with its own scroll animation */}
          <div>

            {/* Beat 1 — The Start */}
            <SectionWrapper delay={0.15}>
              <BeatLabel>The Start</BeatLabel>
              <p
                className="font-sans text-ink text-base md:text-[17px] leading-[1.9] max-w-[580px]"
                style={{ fontWeight: 300 }}
              >
                I've always found it difficult to leave things the way they are.
                When I see a process that feels inefficient, I want to improve
                it. When I discover a problem, I start thinking about possible
                solutions. And when an idea sticks with me long enough, I
                usually end up building something around it. Long before I knew
                what product management was, I was already drawn to the same
                questions product managers ask every day: Why does this work?
                Why doesn't it? What would make it better? That curiosity
                eventually led me to start something of my own.
              </p>
            </SectionWrapper>

            {/* Beat 2 — The Business */}
            <div className="mt-14 md:mt-16">
              <div className="border-t border-divider" />
              <SectionWrapper delay={0} className="pt-8">
                <BeatLabel>The Business</BeatLabel>
                <p
                  className="font-sans text-muted text-base md:text-[17px] leading-[1.9] max-w-[580px]"
                  style={{ fontWeight: 300 }}
                >
                  I founded a small agency called Creative Editz, a video &amp;
                  graphic design agency. What started as a small experiment
                  quickly became my first experience building a business. I
                  spent days speaking with clients, understanding their needs,
                  solving problems, and delivering work. Over time, I worked
                  with more than 10 clients and generated over ₹3 lakh in
                  revenue. I achieved 80% retention, still one of my proudest
                  numbers. Today, as a Product Intern at FanTv AI, I spend my
                  time analyzing how tens of thousands of users engage with
                  products, looking for patterns that explain not just what
                  people do, but why they do it.
                </p>
              </SectionWrapper>
            </div>

            {/* Beat 3 — Today */}
            <div className="mt-14 md:mt-16">
              <div className="border-t border-divider" />
              <SectionWrapper delay={0} className="pt-8">
                <BeatLabel>Today</BeatLabel>
                <p
                  className="font-sans text-muted text-base md:text-[17px] leading-[1.9] max-w-[580px]"
                  style={{ fontWeight: 300 }}
                >
                  Outside of work, not much has changed. I still build.
                  Sometimes it's an AI agent that automates hours of manual
                  research. Sometimes it's a side project that starts as a
                  weekend experiment. Sometimes it's simply a better way to do
                  something I've done a hundred times before. Because behind
                  every metric is a person with a goal, a frustration, or an
                  unmet need, and understanding that person is what matters
                  most. I'm still early in my journey, but if there's one thing
                  I've learned so far, it's that great products aren't built by
                  starting with solutions. They're built by deeply understanding
                  people and the problems they face.
                </p>
              </SectionWrapper>
            </div>

          </div>
        </div>

        {/* Footer — education + certifications */}
        <SectionWrapper delay={0}>
          <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-divider grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            <div>
              <p
                className="font-sans text-faint text-[10px] tracking-[0.16em] uppercase mb-3"
                style={{ fontWeight: 400 }}
              >
                Education
              </p>
              <p
                className="font-sans text-ink text-[13px] leading-[1.65]"
                style={{ fontWeight: 300 }}
              >
                B.COM | S.S Jain Subodh Autonomous College
              </p>
              <p
                className="font-sans text-faint text-[12px] mt-[5px] tracking-[0.02em]"
                style={{ fontWeight: 300 }}
              >
                July 2020 – June 2023
              </p>
            </div>

            <div>
              <p
                className="font-sans text-faint text-[10px] tracking-[0.16em] uppercase mb-3"
                style={{ fontWeight: 400 }}
              >
                Certifications
              </p>
              <p
                className="font-sans text-ink text-[13px] leading-[1.65]"
                style={{ fontWeight: 300 }}
              >
                Product Management Fellowship | Next Leap
              </p>
              <p
                className="font-sans text-faint text-[12px] mt-[5px] tracking-[0.02em]"
                style={{ fontWeight: 300 }}
              >
                Top Fellow
              </p>
            </div>

          </div>
        </SectionWrapper>

      </div>
    </section>
  );
}
