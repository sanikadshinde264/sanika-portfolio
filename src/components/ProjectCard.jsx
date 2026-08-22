import { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ProjectImage from './ProjectImage';

export default function ProjectCard({ project, onOpen, style }) {
  const [notice, setNotice] = useState('');

  return (
    <div
      className="group card-surface rounded-xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-accent/30 transition-all duration-300 reveal"
      style={style}
    >
      <button
        onClick={() => onOpen(project)}
        className="block text-left"
        aria-label={`View details for ${project.title}`}
      >
        <div className="aspect-[16/10] overflow-hidden">
          <ProjectImage
            project={project}
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </button>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] font-mono uppercase tracking-wide text-accent">
          {project.category}
        </span>

        <h3 className="mt-1.5 font-display font-bold text-ink leading-snug">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-muted bg-white/5"
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-muted">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="text-ink-muted hover:text-ink transition-colors"
              >
                <FaGithub size={17} />
              </a>
            ) : (
              <button
                type="button"
                onClick={() =>
                  setNotice('GitHub link isn\u2019t available yet.')
                }
                aria-label={`${project.title} GitHub repository`}
                className="text-ink-muted/40 hover:text-ink-muted transition-colors"
              >
                <FaGithub size={17} />
              </button>
            )}

            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-ink-muted hover:text-ink transition-colors"
              >
                <ExternalLink size={17} />
              </a>
            ) : (
              <button
                type="button"
                onClick={() =>
                  setNotice('Live demo isn\u2019t available yet.')
                }
                aria-label={`${project.title} live demo`}
                className="text-ink-muted/40 hover:text-ink-muted transition-colors"
              >
                <ExternalLink size={17} />
              </button>
            )}
          </div>

          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-1.5 transition-all"
          >
            View Details
            <ArrowUpRight size={15} />
          </button>
        </div>

        {notice && (
          <p className="mt-2 text-[11px] text-ink-muted">
            {notice}
          </p>
        )}
      </div>
    </div>
  );
}