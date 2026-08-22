import { skillCategories, coreStrengths } from '../data/skills';
import Section from './Section';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Technical Skills"
      subtitle="Technologies and tools I use to design, build, and analyze."
      className="bg-bg-secondary"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.title}
            className="card-surface rounded-xl p-6 reveal"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <h3 className="text-sm font-semibold text-ink uppercase tracking-wide mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-ink-muted bg-white/5 hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 card-surface rounded-xl p-6 reveal">
        <h3 className="text-sm font-semibold text-ink uppercase tracking-wide mb-4">
          Core Strengths
        </h3>
        <div className="flex flex-wrap gap-2">
          {coreStrengths.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-accent-soft bg-accent-soft/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
