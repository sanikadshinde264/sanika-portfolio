import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { profile } from '../data/profile';

const username = profile.socials.github.split('/').filter(Boolean).pop();

export default function GithubCard() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="group card-surface rounded-xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-accent/30 transition-all duration-300 reveal">
      <a
        href={profile.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label="Visit my GitHub profile"
      >
        <div className="aspect-[16/10] overflow-hidden bg-bg bg-grid bg-[size:22px_22px] flex items-center justify-center">
          {!imageFailed ? (
            <img
              src={`${import.meta.env.BASE_URL}github/Github.jpg`}
              alt="GitHub"
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-glow">
              <FaGithub size={40} className="text-black" />
            </div>
          )}
        </div>
      </a>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] font-mono uppercase tracking-wide text-accent">
          Open Source
        </span>

        <h3 className="mt-1.5 font-display font-bold text-ink leading-snug">
          Checkout my GitHub for More
        </h3>

        <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">
          Explore my full list of repositories, side projects, and code experiments.
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-muted bg-white/5">
            GitHub: {username}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-end">
          <a
            href={`${profile.socials.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-1.5 transition-all"
          >
            Explore My GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}