import AboutMe from "@/components/about-me/AboutMe";
import Hero from "@/components/hero/Hero.tsx/Hero";
import Intro from "@/components/hero/Hero.tsx/Intro";
import Projects from "@/components/playground/Projects";
import CaseStudy from "@/components/select-work/CaseStudy";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <CaseStudy />
      <Projects />
      <AboutMe />
    </main>
  );
}
