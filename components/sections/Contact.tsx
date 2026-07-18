import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionLabel } from "@/components/SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 border-t border-divider">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">

        {/* Label */}
        <SectionWrapper>
          <SectionLabel number="05" label="Contact" />
        </SectionWrapper>

        {/* Headline */}
        <SectionWrapper delay={0.07}>
          <h2
            className="font-serif text-ink leading-[1.0] tracking-[-0.025em] mb-10"
            style={{
              fontWeight: 300,
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
            }}
          >
            Let's talk.
          </h2>
        </SectionWrapper>

        {/* Paragraph + availability + buttons */}
        <SectionWrapper delay={0.12}>
          <p
            className="font-sans text-muted text-base md:text-[17px] leading-[1.85] mb-5"
            style={{ fontWeight: 300, maxWidth: "560px" }}
          >
            Right now, I'm building more than I'm consuming. I've learned that
            some of the most valuable lessons don't come from courses, books,
            or frameworks. They come from building something, watching it fail,
            understanding why, and trying again. Whether it's a product, an AI
            workflow, or a small side project, I see each experiment as a
            chance to learn how people think, behave, and make decisions.
          </p>

          <p
            className="font-sans text-muted text-[14px] md:text-[15px] leading-relaxed mb-10"
            style={{ fontWeight: 300 }}
          >
            Open to select opportunities.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Solid — View Resume */}
            <a
              href="#"
              className="px-6 py-[11px] font-sans text-[11px] tracking-[0.14em] uppercase hover:opacity-70 transition-opacity duration-300"
              style={{
                fontWeight: 400,
                backgroundColor: "#0A0A0A",
                color: "#F8F6F2",
              }}
            >
              View Resume
            </a>

            {/* Outlined — Email */}
            <a
              href="mailto:hello@khilesh.design"
              className="border border-ink text-ink px-6 py-[11px] font-sans text-[11px] tracking-[0.14em] uppercase hover:opacity-50 transition-opacity duration-300"
              style={{ fontWeight: 400 }}
            >
              Email
            </a>

            {/* Outlined — LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink text-ink px-6 py-[11px] font-sans text-[11px] tracking-[0.14em] uppercase hover:opacity-50 transition-opacity duration-300"
              style={{ fontWeight: 400 }}
            >
              LinkedIn
            </a>
          </div>
        </SectionWrapper>


      </div>
    </section>
  );
}
