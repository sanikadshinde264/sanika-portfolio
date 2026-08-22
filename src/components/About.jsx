import { profile } from '../data/profile';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" eyebrow="Introduction" title="About Me">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
        <div className="reveal">
          <p className="text-lg leading-relaxed text-ink-muted">{profile.about}</p>

          <p className="mt-6 text-sm font-semibold text-ink uppercase tracking-wide">
            Interested In
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.interests.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-ink-muted border border-white/10 hover:border-accent/40 hover:text-ink transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '100ms' }}>
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="card-surface rounded-xl p-5 flex flex-col justify-center hover:border-accent/30 transition-colors"
            >
              <span className="font-display text-3xl font-extrabold text-ink">{stat.value}</span>
              <span className="mt-1 text-xs font-medium text-ink-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
