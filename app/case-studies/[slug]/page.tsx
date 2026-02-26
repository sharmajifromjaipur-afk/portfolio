import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/portfolio";

const sectionOrder: Array<[label: string, key: keyof (typeof caseStudies)[number]]> = [
  ["Project Overview", "overview"],
  ["Business Problem", "businessProblem"],
  ["Users & Stakeholders", "usersAndStakeholders"],
  ["My Role & Responsibilities", "roleAndResponsibilities"],
  ["UX Strategy", "uxStrategy"],
  ["Wireframing Approach", "wireframingApproach"],
  ["UI Design System", "uiDesignSystem"],
  ["Technical Implementation", "technicalImplementation"],
  ["Challenges & Constraints", "challengesAndConstraints"],
  ["Impact & Business Results", "impactAndBusinessResults"]
];

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="section-shell space-y-10">
      <Link href="/" className="text-sm font-semibold text-accent">
        ← Back to portfolio
      </Link>
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{study.sector}</p>
        <h1 className="text-4xl font-semibold md:text-5xl">{study.title}</h1>
      </header>
      <section className="grid gap-6">
        {sectionOrder.map(([label, key]) => (
          <article key={label} className="card">
            <h2 className="mb-3 text-xl font-semibold">{label}</h2>
            <p className="text-steel">{study[key]}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
