import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';
import Section from './Section';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Continuous Learning"
      title="Certifications"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, i) => (
          <div
            key={cert.title}
            className="card-surface rounded-xl p-6 reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                <Award size={18} />
              </span>
              <div>
                <h3 className="font-display font-bold text-ink leading-snug">{cert.title}</h3>
                <p className="text-sm text-accent-soft font-medium mt-0.5">{cert.provider}</p>
                <p className="text-xs text-ink-muted mt-1 inline-flex items-center gap-1.5">
                  <Calendar size={12} /> {cert.date}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cert.points.map((point) => (
                <span
                  key={point}
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-ink-muted bg-white/5"
                >
                  {point}
                </span>
              ))}
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-soft transition-colors"
              >
                View Certificate <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
