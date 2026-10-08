import { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  useEffect(() => {
    const reveal = (el: Element) => {
      el.classList.add('animate-fade-in-up');
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px 35% 0px'
    });

    const revealVisible = () => {
      document.querySelectorAll('.scroll-reveal:not(.animate-fade-in-up)').forEach((el) => {
        observer.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 120 && rect.bottom > -80) {
          reveal(el);
          observer.unobserve(el);
        }
      });
    };

    revealVisible();
    requestAnimationFrame(revealVisible);
    window.addEventListener('hashchange', revealVisible);
    window.addEventListener('scroll', revealVisible, { passive: true });
    window.addEventListener('resize', revealVisible);
    const mutation = new MutationObserver(revealVisible);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
      window.removeEventListener('hashchange', revealVisible);
      window.removeEventListener('scroll', revealVisible);
      window.removeEventListener('resize', revealVisible);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground transition-colors duration-300">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-full focus:font-sans focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar onOpenResume={() => setResumeOpen(true)} />
        <main>
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
