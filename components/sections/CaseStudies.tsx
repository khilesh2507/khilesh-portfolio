import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionLabel } from "@/components/SectionLabel";

function CaseLabel({ children }: { children: string }) {
  return (
    <p
      className="font-sans text-faint text-[10px] tracking-[0.16em] uppercase mb-4"
      style={{ fontWeight: 400 }}
    >
      {children}
    </p>
  );
}

function PillLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="border border-divider px-4 py-[7px] font-sans text-muted text-[10px] tracking-[0.14em] uppercase hover:border-ink hover:text-ink transition-colors duration-300"
      style={{ fontWeight: 400 }}
    >
      {label}
    </a>
  );
}

function ProjectImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div>
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 90vw" />
      </div>
      <p
        className="font-sans text-faint text-[10px] tracking-[0.14em] uppercase mt-3"
        style={{ fontWeight: 400 }}
      >
        {caption}
      </p>
    </div>
  );
}

const bodyClass = "font-sans text-muted text-[14px] md:text-[15px] leading-[1.85]";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 md:py-40 border-t border-divider">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">

        {/* Section header */}
        <SectionWrapper>
          <div className="mb-20 md:mb-28">
            <SectionLabel number="03" label="Case Studies" />
            <h2
              className="font-serif text-ink leading-[1.15] tracking-[-0.01em]"
              style={{ fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Selected work,
              <br />
              <em style={{ fontStyle: "italic" }}>examined closely.</em>
            </h2>
            <p
              className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-xs mt-6"
              style={{ fontWeight: 300 }}
            >
              A curated set of projects representing different problem spaces
              and design challenges.
            </p>
          </div>
        </SectionWrapper>

        {/* ── Project 01: SubTrack ── */}
        <SectionWrapper delay={0.07}>
          <div className="border-t border-divider pt-20 md:pt-28 pb-20 md:pb-28">

            <div className="mb-14">
              <p
                className="font-sans text-faint text-[11px] tracking-[0.18em] uppercase mb-5"
                style={{ fontWeight: 400 }}
              >
                01
              </p>
              <h3
                className="font-serif text-ink leading-[1.0] tracking-[-0.025em] mb-8"
                style={{ fontWeight: 300, fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }}
              >
                SubTrack
              </h3>
              <div className="flex flex-wrap gap-3">
                <PillLink href="https://subtrack-phi-mocha.vercel.app/" label="View Live Demo" external />
                <PillLink href="https://app.notion.com/p/Subtrack-Helping-Users-Discover-and-Manage-Subscriptions-3969267ee47680859c8dd9c60b06687b" label="Read Full Case Study" external />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-12 md:gap-x-16 lg:gap-x-24 mb-14 md:mb-16">
              <div>
                <CaseLabel>The Problem</CaseLabel>
                <p className={bodyClass} style={{ fontWeight: 300 }}>
                  Subscriptions are managed manually across dozens of providers,
                  and most trackers only help organize that data, not collect it.
                  The real challenge wasn't building another dashboard, it was
                  removing the manual work required to maintain one.
                </p>
              </div>
              <div>
                <CaseLabel>My Role</CaseLabel>
                <p className={bodyClass} style={{ fontWeight: 300 }}>
                  Solo product lead: research, positioning, the PRD, agent
                  architecture, and UX/UI direction. Engineering was handled
                  through Claude Code, which I directed and reviewed against spec.
                </p>
              </div>
              <div>
                <CaseLabel>Process</CaseLabel>
                <p className={bodyClass} style={{ fontWeight: 300 }}>
                  Started by examining existing subscription trackers, then
                  shifted focus from building a better dashboard to eliminating
                  manual effort altogether. Mapped the user journey around
                  subscription discovery, visibility, and renewal awareness,
                  iterating to simplify the experience.
                </p>
              </div>
              <div>
                <CaseLabel>What Shipped</CaseLabel>
                <p className={bodyClass} style={{ fontWeight: 300 }}>
                  An MVP that automates subscription discovery into a single
                  dashboard, letting users track spend, view renewals, and manage
                  subscriptions without manual entry. Built with Next.js, Tailwind,
                  shadcn/ui, Supabase, and Claude Code.
                </p>
              </div>
              <div className="md:col-span-2 border-t border-divider pt-10 md:pt-12">
                <CaseLabel>Reflection</CaseLabel>
                <p className={`${bodyClass} md:max-w-[700px]`} style={{ fontWeight: 300 }}>
                  Convenience is often the product. The real challenge wasn't
                  displaying subscription data, it was removing the effort
                  required to keep that data accurate. The project taught me that
                  users care about the outcome a feature enables, not the feature
                  itself.
                </p>
              </div>
            </div>

            <ProjectImage
              src="/subtrack-screenshot.png"
              alt="SubTrack app — landing page"
              caption="SubTrack — Landing Page"
            />

          </div>
        </SectionWrapper>

        {/* ── Project 02: Tailor Made ── */}
        <SectionWrapper delay={0.07}>
          <div className="border-t border-divider pt-20 md:pt-28 pb-20 md:pb-28">

            <div className="mb-14">
              <p
                className="font-sans text-faint text-[11px] tracking-[0.18em] uppercase mb-5"
                style={{ fontWeight: 400 }}
              >
                02
              </p>
              <h3
                className="font-serif text-ink leading-[1.0] tracking-[-0.025em] mb-8"
                style={{ fontWeight: 300, fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }}
              >
                Tailor Made
              </h3>
              <div className="flex flex-wrap gap-3">
                <PillLink href="https://tailormaderesume.lovable.app" label="View Live Demo" external />
                <PillLink href="https://app.notion.com/p/Tailor-Made-Resume-Builder-3499267ee476808ca864fe06b51e6bb5" label="Read Full Case Study" external />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-12 md:gap-x-16 lg:gap-x-24 mb-14 md:mb-16">
              <div>
                <CaseLabel>The Problem</CaseLabel>
                <p className={bodyClass} style={{ fontWeight: 300 }}>
                  A strong resume isn't necessarily a strong application.
                  Requirements shift with every role, but tailoring a resume for
                  each one remains a manual, time consuming process. The challenge
                  wasn't helping users create resumes, it was helping them adapt
                  their existing resume to each opportunity quickly and accurately.
                </p>
              </div>
              <div>
                <CaseLabel>My Role</CaseLabel>
                <p className={bodyClass} style={{ fontWeight: 300 }}>
                  Solo Product Lead, led research, positioning, PRD development,
                  agent architecture, and UX/UI direction.
                </p>
              </div>
              <div>
                <CaseLabel>Process</CaseLabel>
                <p className={bodyClass} style={{ fontWeight: 300 }}>
                  Candidates weren't struggling to create resumes, they were
                  struggling to repeatedly adapt them for different roles. Designed
                  an AI driven optimization system that analyzes both resume and
                  job description, focused on preserving real achievements,
                  avoiding fabricated experience, and maintaining ATS safe
                  formatting.
                </p>
              </div>
              <div>
                <CaseLabel>What Shipped</CaseLabel>
                <p className={bodyClass} style={{ fontWeight: 300 }}>
                  An MVP where candidates upload a resume and job description and
                  receive a tailored, ATS friendly version in under 30 seconds,
                  with relevant skills and keywords surfaced while preserving
                  original achievements and formatting.
                </p>
              </div>
              <div className="md:col-span-2 border-t border-divider pt-10 md:pt-12">
                <CaseLabel>Reflection</CaseLabel>
                <p className={`${bodyClass} md:max-w-[700px]`} style={{ fontWeight: 300 }}>
                  Personalization doesn't require creating something new every
                  time. Most candidates already have the experience needed, the
                  real challenge is presenting it in the right context. The best
                  solution wasn't rewriting a candidate's story, it was helping
                  them tell the right parts of it to the right audience.
                </p>
              </div>
            </div>

            <ProjectImage
              src="/tailormade-screenshot.png"
              alt="Tailor Made app — interface"
              caption="Tailor Made — App Interface"
            />

          </div>
        </SectionWrapper>

        <div className="border-t border-divider" />

      </div>
    </section>
  );
}
