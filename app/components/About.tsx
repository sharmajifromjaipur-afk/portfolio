import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-shell border-t border-cloud">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
          <div className="space-y-6 text-steel">
            <p>
              I lead design transformation across enterprise programs where user experience directly affects compliance, speed, and financial outcomes.
            </p>
            <p>
              My core strength is systems thinking: translating layered business rules, policy constraints, and stakeholder priorities into intuitive workflow products.
            </p>
            <p>
              I operate across the full delivery chain—from UX strategy and design systems to development alignment—ensuring the final product performs in real operational environments.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
