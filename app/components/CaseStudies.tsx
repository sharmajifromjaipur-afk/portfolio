import Link from "next/link";
import { caseStudies } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-shell border-t border-cloud">
      <Reveal>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">Enterprise Case Studies</h2>
          <p className="max-w-xl text-steel">Each engagement demonstrates leadership across UX architecture, low-code implementation, and measurable business impact.</p>
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((study, index) => (
          <Reveal key={study.slug} delay={index * 0.05}>
            <article className="card h-full space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{study.sector}</p>
              <h3 className="text-2xl font-semibold">{study.title}</h3>
              <p className="text-steel">{study.overview}</p>
              <Link href={`/case-studies/${study.slug}`} className="inline-flex text-sm font-semibold text-accent">
                View full case study →
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
