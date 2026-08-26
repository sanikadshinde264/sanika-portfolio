import { useEffect, useState } from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

const username = profile.socials.github.split('/').filter(Boolean).pop();

const LANGUAGE_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
};

export default function GithubRepos() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API request failed');
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const cleaned = (Array.isArray(data) ? data : [])
          .filter((r) => !r.fork)
          .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
          .slice(0, 6);
        setRepos(cleaned);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12 reveal">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-3">
            Open Source
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            More on GitHub
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted text-base leading-relaxed">
            A live pull of my public repositories — straight from GitHub.
          </p>
        </div>

        {error || repos?.length === 0 ? (
          <GithubCallout />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(repos ?? Array.from({ length: 3 })).map((repo, i) =>
              repo ? (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-surface rounded-xl p-6 flex flex-col hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <FaGithub size={20} className="text-ink-muted shrink-0" />
                    <ArrowUpRight
                      size={16}
                      className="text-ink-muted group-hover:text-accent transition-colors shrink-0"
                    />
                  </div>

                  <h3 className="mt-3 font-display font-bold text-ink truncate">
                    {repo.name}
                  </h3>

                  <p className="mt-1.5 text-sm text-ink-muted leading-relaxed line-clamp-2 flex-1">
                    {repo.description || 'No description provided.'}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-ink-muted">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            backgroundColor: LANGUAGE_COLORS[repo.language] || '#818CF8',
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <FaStar size={11} /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FaCodeBranch size={11} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              ) : (
                <div
                  key={i}
                  className="card-surface rounded-xl p-6 h-[168px] animate-pulse"
                  aria-hidden="true"
                />
              )
            )}
          </div>
        )}

        <div className="mt-8 flex justify-center reveal">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-ink font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            <FaGithub size={16} />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

function GithubCallout() {
  return (
    <div className="max-w-md mx-auto card-surface rounded-2xl p-8 text-center shadow-glow reveal">
      <div className="mx-auto w-20 h-20 rounded-full bg-white flex items-center justify-center">
        <FaGithub size={40} className="text-black" />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-ink">
        Checkout my GitHub for More
      </h3>
      <p className="mt-1 text-sm text-ink-muted">GitHub: {username}</p>
      <div className="mt-5 flex justify-center gap-3">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-accent text-bg text-sm font-semibold hover:bg-accent/90 transition-colors"
        >
          View
        </a>
        <a
          href={`${profile.socials.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg border border-white/10 text-ink text-sm font-semibold hover:bg-white/5 transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}