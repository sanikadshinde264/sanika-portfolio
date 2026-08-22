import { useState } from 'react';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
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

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* background grid + glow */}
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[32rem] h-[32rem] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/20 reveal">
            {profile.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-ink reveal" style={{ transitionDelay: '80ms' }}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-semibold text-ink-muted reveal" style={{ transitionDelay: '140ms' }}>
            {profile.headline}
          </p>

          <p className="mt-5 max-w-xl text-ink-muted leading-relaxed reveal" style={{ transitionDelay: '200ms' }}>
            {profile.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 reveal" style={{ transitionDelay: '260ms' }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-200 shadow-glow"
            >
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-ink font-semibold text-sm hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-ink-muted font-semibold text-sm hover:text-ink transition-colors duration-200"
            >
              Let's Connect
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 reveal" style={{ transitionDelay: '320ms' }}>
            {[
              { href: profile.socials.github, icon: <Github size={18} />, label: 'GitHub' },
              { href: profile.socials.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
              { href: profile.socials.leetcode, icon: LEETCODE_ICON, label: 'LeetCode' },
              { href: profile.socials.codechef, icon: CODECHEF_ICON, label: 'CodeChef' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group relative p-2.5 rounded-full border border-white/10 text-ink-muted hover:text-accent hover:border-accent/40 transition-colors"
              >
                {s.icon}
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium text-ink bg-bg-card border border-white/10 shadow-card opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right column — signature portrait + floating workspace accents */}
        <div className="relative h-[440px] hidden sm:block reveal" style={{ transitionDelay: '160ms' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-sm flex items-center justify-center">
              {/* glow behind photo */}
              <div className="absolute w-72 h-72 bg-accent/15 rounded-full blur-[70px]" />

              {/* main photo frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[2rem] overflow-hidden border border-white/10 shadow-glow bg-bg-card animate-float">
                {!photoFailed ? (
                  <img
                    src={profile.photoPath}
                    alt={`Portrait of ${profile.name}`}
                    onError={() => setPhotoFailed(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent-soft/20">
                    <span className="font-display text-6xl font-extrabold text-accent">
                      {initials}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}