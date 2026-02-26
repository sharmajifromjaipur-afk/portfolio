import { Reveal } from "./Reveal";

const ideas = [
  "Hero: fullscreen split layout with authority statement on left and executive KPI card stack on right.",
  "About: two-column narrative with process-flow diagram illustrating strategy → design system → implementation.",
  "Case Studies: dashboard-style card grid linking to detailed pages with structured enterprise storytelling.",
  "Experience: clean company tile matrix with chronological emphasis and enterprise brand confidence.",
  "Skills: modular capability cards grouped by architecture, low-code, and implementation depth.",
  "Leadership Value: premium SaaS feature panel style highlighting why enterprises select strategic design leadership.",
  "Contact: high-contrast final CTA panel positioned as an executive collaboration invitation."
];

export function VisualLayoutIdeas() {
  return (
    <section className="section-shell border-t border-cloud">
      <Reveal>
        <h2 className="text-3xl font-semibold md:text-4xl">Visual Layout Direction</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {ideas.map((idea, idx) => (
          <Reveal key={idea} delay={idx * 0.04}>
            <div className="card text-steel">{idea}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
