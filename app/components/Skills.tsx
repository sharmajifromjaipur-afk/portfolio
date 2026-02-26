import { skills } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-shell border-t border-cloud">
      <Reveal>
        <h2 className="text-3xl font-semibold md:text-4xl">Specialized Skills</h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skills.map((skill, index) => (
          <Reveal key={skill} delay={index * 0.06}>
            <div className="card">{skill}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
