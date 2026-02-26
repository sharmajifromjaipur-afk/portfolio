import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="section-shell flex min-h-[86vh] items-center">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="space-y-8">
            <p className="inline-flex rounded-full border border-cloud bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Enterprise UX Architect & Low-Code Platform Specialist
            </p>
            <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
              Designing mission-critical enterprise systems that move strategy into execution.
            </h1>
            <p className="max-w-2xl text-lg text-steel">
              I am Ankit Soni, a Lead UI/UX Designer & Developer with 13+ years building complex platforms for banking, pharmaceutical, insurance, and government ecosystems.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card space-y-5">
            <h2 className="text-lg font-semibold">Authority Snapshot</h2>
            <ul className="space-y-4 text-steel">
              <li>13+ years delivering enterprise workflow transformations.</li>
              <li>Specialist in Appian, OutSystems, React, and Angular ecosystems.</li>
              <li>Trusted partner for RFP strategy, governance, and scale-ready execution.</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
