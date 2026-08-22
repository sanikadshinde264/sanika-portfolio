import { useMemo, useState } from 'react';
import { projects, filters } from '../data/projects';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const visible = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.filterGroup === activeFilter),
    [activeFilter]
  );

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Featured Projects"
      subtitle="Real-world builds spanning full-stack development, machine learning, and data-driven applications."
      className="bg-bg-secondary"
    >
      <div className="flex flex-wrap gap-2 mb-10 reveal">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeFilter === f
                ? 'bg-accent text-bg'
                : 'text-ink-muted border border-white/10 hover:text-ink hover:border-white/20'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelected}
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}