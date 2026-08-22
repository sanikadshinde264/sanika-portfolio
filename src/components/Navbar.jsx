import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, X, Moon, Sun } from 'lucide-react';
import { profile } from '../data/profile';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#publications', label: 'Publications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-display font-extrabold text-lg tracking-tight text-ink hover:text-accent transition-colors"
        >
          {profile.name}
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-full text-ink-muted hover:text-ink hover:bg-white/5 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-full text-ink-muted hover:text-ink hover:bg-white/5 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full text-ink-muted hover:text-ink hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full text-ink-muted hover:text-ink hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 rounded-full text-ink hover:bg-white/5 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-bg-secondary border-t border-white/5">
          <ul className="section-container py-4 flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block py-2.5 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-4 pt-3 mt-2 border-t border-white/5">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-ink-muted hover:text-ink">
                <Github size={18} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-ink-muted hover:text-ink">
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
