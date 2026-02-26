import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { LeadershipValue } from "./components/LeadershipValue";
import { VisualLayoutIdeas } from "./components/VisualLayoutIdeas";
import { Skills } from "./components/Skills";
import { StickyNav } from "./components/StickyNav";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <Hero />
      <About />
      <CaseStudies />
      <Experience />
      <Skills />
      <LeadershipValue />
      <VisualLayoutIdeas />
      <Contact />
    </main>
  );
}
