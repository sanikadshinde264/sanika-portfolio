import { BookOpen, ExternalLink } from 'lucide-react';
import { publications } from '../data/publications';
import Section from './Section';

export default function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="Research"
      title="Publications"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {publications.map((pub, i) => (
          <div
            key={pub.title}
            className="card-surface rounded-xl p-6 reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                <BookOpen size={18} />
              </span>
              <div>
                <h3 className="font-display font-bold text-ink leading-snug">{pub.title}</h3>
                <p className="text-sm text-accent-soft font-medium mt-0.5">{pub.journal}</p>
                <p className="text-xs text-ink-muted mt-1">{pub.details}</p>
                <p className="text-xs text-ink-muted mt-1 font-mono">Paper ID: {pub.paperId}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-soft transition-colors"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
