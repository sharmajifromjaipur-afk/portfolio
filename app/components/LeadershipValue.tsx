import { Reveal } from "./Reveal";

const valueProps = [
  {
    title: "Enterprise UX Architecture",
    detail: "I architect ecosystems, not screens—aligning user journeys with governance models, SLA logic, and business controls."
  },
  {
    title: "Low-Code Platform Expertise",
    detail: "I convert process complexity into scalable Appian and OutSystems modules that enterprise teams can deploy faster."
  },
  {
    title: "Design-to-Development Execution",
    detail: "I bridge strategy to shipping software through implementation-aware interaction patterns and engineering-ready systems."
  },
  {
    title: "Workflow Optimization",
    detail: "I redesign decision flows to reduce handoff friction, increase throughput, and improve service accountability."
  },
  {
    title: "RFP & Proposal Design",
    detail: "I shape competitive proposals with credible solution narratives, architecture visuals, and value-driven UX strategy."
  }
];

export function LeadershipValue() {
  return (
    <section id="leadership-value" className="section-shell border-t border-cloud">
      <Reveal>
        <h2 className="text-3xl font-semibold md:text-4xl">Why Companies Hire Me</h2>
      </Reveal>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {valueProps.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="card space-y-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-steel">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
