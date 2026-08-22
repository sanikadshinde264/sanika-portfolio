import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import Section from './Section';

const LEETCODE_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.535.553-1.386.039-1.9l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452 1.498 0 2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.366-.039-1.899-.535-.535-1.386-.553-1.899-.039z" />
  </svg>
);

const CODECHEF_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.5-12.5h1.5v2h2v1.5h-2v2h-1.5v-2h-2v-1.5h2v-2zm-1 7h5v1.5h-5v-1.5z" />
  </svg>
);

const PROFILES = [
  {
    name: 'GitHub',
    handle: '@sanikadshinde264',
    href: profile.socials.github,
    icon: <Github size={22} />,
  },
  {
    name: 'LinkedIn',
    handle: 'Sanika Shinde',
    href: profile.socials.linkedin,
    icon: <Linkedin size={22} />,
  },
  {
    name: 'LeetCode',
    handle: '@sanikadshinde264',
    href: profile.socials.leetcode,
    icon: LEETCODE_ICON,
  },
  {
    name: 'CodeChef',
    handle: '@sanikashinde26',
    href: profile.socials.codechef,
    icon: CODECHEF_ICON,
  },
];

export default function CodingProfiles() {
  return (
    <Section eyebrow="Find Me Online" title="Coding & Professional Profiles">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PROFILES.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group card-surface rounded-xl p-6 flex flex-col items-start hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="p-3 rounded-lg bg-accent/10 text-accent">{p.icon}</div>
            <h3 className="mt-4 font-display font-bold text-ink">{p.name}</h3>
            <p className="text-sm text-ink-muted mt-0.5">{p.handle}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-1.5 transition-all">
              Visit profile <ArrowUpRight size={13} />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
