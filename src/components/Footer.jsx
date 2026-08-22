import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';

const LEETCODE_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.535.553-1.386.039-1.9l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452 1.498 0 2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.366-.039-1.899-.535-.535-1.386-.553-1.899-.039z" />
  </svg>
);

const CODECHEF_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.5-12.5h1.5v2h2v1.5h-2v2h-1.5v-2h-2v-1.5h2v-2zm-1 7h5v1.5h-5v-1.5z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-secondary">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-ink">
            {profile.name}
          </p>

          <p className="text-sm text-ink-muted mt-0.5">
            {profile.headline}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group relative p-2 rounded-full text-ink-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <FaLinkedin size={17} />

            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium text-ink bg-bg-card border border-white/10 shadow-card opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group relative p-2 rounded-full text-ink-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <FaGithub size={17} />

            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium text-ink bg-bg-card border border-white/10 shadow-card opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              GitHub
            </span>
          </a>

          {/* LeetCode */}
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="group relative p-2 rounded-full text-ink-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            {LEETCODE_ICON}

            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium text-ink bg-bg-card border border-white/10 shadow-card opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              LeetCode
            </span>
          </a>

          {/* CodeChef */}
          <a
            href={profile.socials.codechef}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeChef"
            className="group relative p-2 rounded-full text-ink-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            {CODECHEF_ICON}

            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium text-ink bg-bg-card border border-white/10 shadow-card opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              CodeChef
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="group relative p-2 rounded-full text-ink-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <Mail size={17} />

            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium text-ink bg-bg-card border border-white/10 shadow-card opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              Email
            </span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="section-container py-4 text-center text-xs text-ink-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}