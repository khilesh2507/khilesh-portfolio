import { Navigation } from "@/components/Navigation";
import { ProgressRail } from "@/components/ProgressRail";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <ProgressRail />
      <main>
        <Hero />
        <About />
        <Journey />
        <CaseStudies />
        <Philosophy />
        <Contact />
      </main>
    </>
  );
}
