import { useEffect, useRef, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ProjectImage from './ProjectImage';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  useEffect(() => {
    setNotice('');
  }, [project]);

  useEffect(() => {
    if (!notice) return;

    const t = setTimeout(() => setNotice(''), 3000);

    return () => clearTimeout(t);
  }, [notice]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full sm:max-w-2xl bg-bg-card sm:rounded-2xl border border-white/10 my-0 sm:my-auto">
        <div className="sticky top-0 flex justify-end p-4 bg-bg-card/95 backdrop-blur border-b border-white/5 sm:border-none sm:bg-transparent">
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close project details"
            className="p-2 rounded-full text-ink-muted hover:text-ink hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 sm:px-8 pb-8 -mt-10 sm:-mt-4">
          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <ProjectImage
              project={project}
              className="w-full h-full"
            />
          </div>

          <span className="text-xs font-mono uppercase tracking-wide text-accent">
            {project.category}
          </span>

          <h3
            id="project-modal-title"
            className="mt-1 font-display text-2xl font-extrabold text-ink"
          >
            {project.title}
          </h3>

          {project.disclaimer && (
            <p className="mt-4 text-xs text-ink-muted italic border-l-2 border-accent-soft/50 pl-3">
              {project.disclaimer}
            </p>
          )}

          <div className="mt-6 space-y-6">
            {/* Overview */}
            <div>
              <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                Overview
              </h4>

              <p className="text-sm text-ink-muted leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem Statement */}
            {project.problem && (
              <div>
                <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                  Problem Statement
                </h4>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div>
                <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                  Solution
                </h4>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                Key Features
              </h4>

              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm text-ink-muted flex gap-2"
                  >
                    <span className="text-success mt-1.5 text-[8px]">
                      ●
                    </span>

                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dataset */}
            {project.dataset && (
              <div>
                <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                  Dataset
                </h4>

                <ul className="space-y-1">
                  {project.dataset.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-ink-muted"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Methodology */}
            {project.method && (
              <div>
                <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                  Methodology
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.method.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-ink-muted bg-white/5"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-accent bg-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Improvements */}
            {project.futureImprovements && (
              <div>
                <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                  Future Improvements
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.futureImprovements.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-ink-muted bg-white/5"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project links */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-ink text-sm font-semibold hover:bg-white/5 transition-colors"
                >
                  <FaGithub size={16} />
                  View on GitHub
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setNotice(
                      'GitHub link isn\u2019t available for this project yet.'
                    )
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-ink text-sm font-semibold hover:bg-white/5 transition-colors"
                >
                  <FaGithub size={16} />
                  View on GitHub
                </button>
              )}

              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-bg text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setNotice(
                      'Live demo isn\u2019t available for this project yet.'
                    )
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-bg text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </button>
              )}
            </div>

            {notice && (
              <p className="mt-3 text-xs text-ink-muted">
                {notice}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}