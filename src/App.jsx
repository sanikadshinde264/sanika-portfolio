import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Education from './components/Education';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal([theme]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Publications />
        <Education />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
