import { useState } from 'react';
import ProjectThumbnail from './ProjectThumbnail';

/**
 * Shows the real screenshot at /public/projects/<project.id>.jpg if it exists.
 * Falls back automatically to the generated SVG illustration (ProjectThumbnail)
 * if no image has been added yet, or if it fails to load.
 */
export default function ProjectImage({ project, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <ProjectThumbnail type={project.thumbnailType} className={className} />;
  }

  return (
    <img
      src={`${import.meta.env.BASE_URL}projects/${project.id}.jpg`}
      alt={`${project.title} preview`}
      onError={() => setFailed(true)}
      className={`${className} object-cover`}
    />
  );
}