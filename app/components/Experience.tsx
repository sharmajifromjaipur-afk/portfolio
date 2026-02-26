import { experiences } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-shell border-t border-cloud">
      <Reveal>
        <h2 className="text-3xl font-semibold md:text-4xl">Experience</h2>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((company, index) => (
          <Reveal key={company} delay={index * 0.05}>
            <div className="card py-5 text-lg font-medium">{company}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
