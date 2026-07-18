import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionLabel } from "@/components/SectionLabel";

const PRINCIPLES = [
  {
    index: "01",
    claim: "Design for how the system fails, not how it succeeds.",
    explanation:
      "Systems are defined not just by what they enable, but by how they respond when assumptions break.",
    proof:
      "While building SubTrack, I initially optimized for the happy path, users discovering all their subscriptions automatically. The more useful question turned out to be: what happens when discovery misses one? Designing fallback flows, manual additions, and recovery paths ended up being more important than polishing the perfect scenario.",
  },
  {
    index: "02",
    claim: "One persona can still hide two different products.",
    explanation:
      "A single target persona can still contain two people with opposite needs. Designing for the average of both satisfies neither.",
    proof:
      "At FanTv, not every creator was trying to become an influencer. Some wanted reach. Others wanted community. Treating them as a single persona explained the behavior. Understanding their motivations explained the opportunities.",
  },
  {
    index: "03",
    claim: "Values are an input to the system, not a setting chosen once.",
    explanation:
      "A values toggle picked at onboarding produces generic output forever. A living input that can be revised produces something specific.",
    proof:
      "I've worked in a creative agency, a founder's office, and a product team. On paper, they look like different careers. In practice, I've been chasing the same thing the entire time: understanding people and building around their needs.",
  },
  {
    index: "04",
    claim: "A decision without a written reason is a guess with better branding.",
    explanation:
      "If I can't say why a number is what it is, I don't actually know if it's right.",
    proof:
      "SubTrack began as a subscription tracking app. Writing down the problem revealed that tracking wasn't the problem, manual entry was. That distinction shifted the product from 'helping users organize subscriptions' to 'helping users discover them automatically.'",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 md:py-40 border-t border-divider">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">

        {/* Section header */}
        <SectionWrapper>
          <SectionLabel number="04" label="My Philosophy" />
          <h2
            className="font-serif text-ink leading-[1.15] tracking-[-0.01em] mb-4"
            style={{ fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            What I hold{" "}
            <em style={{ fontStyle: "italic" }}>non-negotiable</em>
          </h2>
          <p
            className="font-sans text-muted text-[14px] md:text-[15px] leading-relaxed mb-20 md:mb-28"
            style={{ fontWeight: 300, fontStyle: "italic" }}
          >
            Four judgment calls I check my own decisions against.
          </p>
        </SectionWrapper>

        {/* 2-column principle grid */}
        <div className="grid md:grid-cols-2 gap-0">
          {PRINCIPLES.map(({ index, claim, explanation, proof }, i) => (
            <SectionWrapper key={index} delay={i * 0.07}>
              <div
                className="border-t border-divider py-10 md:py-14 pr-0 md:pr-16"
                style={{
                  borderLeft: i % 2 === 1 ? "none" : undefined,
                  paddingLeft: i % 2 === 1 ? "clamp(1.5rem, 4vw, 4rem)" : undefined,
                }}
              >
                {/* Number */}
                <p
                  className="font-sans text-faint text-[11px] tracking-[0.18em] uppercase mb-5"
                  style={{ fontWeight: 400 }}
                >
                  {index}
                </p>

                {/* Claim */}
                <h3
                  className="font-serif text-ink leading-[1.3] tracking-[-0.01em] mb-4"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  }}
                >
                  {claim}
                </h3>

                {/* Explanation */}
                <p
                  className="font-sans text-muted text-[14px] md:text-[15px] leading-[1.85] mb-6"
                  style={{ fontWeight: 300 }}
                >
                  {explanation}
                </p>

                {/* Proof — left-bordered, italic, muted */}
                <div className="pl-4 border-l border-divider">
                  <p
                    className="font-sans text-muted text-[13px] md:text-[14px] leading-[1.9]"
                    style={{ fontWeight: 300, fontStyle: "italic" }}
                  >
                    <span
                      className="not-italic text-[10px] tracking-[0.1em] uppercase"
                      style={{ fontWeight: 600 }}
                    >
                      Proof:{" "}
                    </span>
                    {proof}
                  </p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>

        <div className="border-t border-divider" />

      </div>
    </section>
  );
}
