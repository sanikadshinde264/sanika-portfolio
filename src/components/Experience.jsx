import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { experience } from '../data/experience';
import Section from './Section';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Track Record"
      title="Experience & Industrial Training"
      subtitle="Internships where I applied classroom knowledge to real projects."
    >
      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[9px] sm:left-[13px] top-2 bottom-2 w-px bg-white/10" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={job.company} className="relative reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-[19px] h-[19px] rounded-full bg-bg border-2 border-accent flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-accent" />
              </span>

              <div className="card-surface rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{job.role}</h3>
                    <p className="text-accent font-semibold text-sm mt-0.5">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-ink-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} /> {job.dates}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-ink-muted bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-soft transition-colors"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
