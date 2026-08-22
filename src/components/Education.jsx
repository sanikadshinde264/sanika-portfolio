import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import Section from './Section';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic Background"
      title="Education"
      className="bg-bg-secondary"
    >
      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[9px] sm:left-[13px] top-2 bottom-2 w-px bg-white/10" />
        <div className="space-y-8">
          {education.map((item, i) => (
            <div key={item.degree} className="relative reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-[19px] h-[19px] rounded-full bg-bg border-2 border-accent-soft flex items-center justify-center">
                <GraduationCap size={11} className="text-accent-soft" />
              </span>
              <div className="card-surface rounded-xl p-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-ink">{item.degree}</h3>
                  <p className="text-sm text-ink-muted mt-1">{item.institution}</p>
                  <p className="text-xs text-ink-muted mt-1 font-mono">{item.dates}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display text-2xl font-extrabold text-accent">
                    {item.metricValue}
                  </span>
                  <p className="text-xs text-ink-muted">{item.metricLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
