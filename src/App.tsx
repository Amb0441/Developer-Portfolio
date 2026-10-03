import { useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.05, 
      rootMargin: '0px 0px -10% 0px' 
    });

    const observeNew = () => {
      document.querySelectorAll('.scroll-reveal:not(.animate-fade-in-up)').forEach((el) => {
        observer.observe(el);
      });
    };

    observeNew();
    requestAnimationFrame(() => {
      document.querySelectorAll('.scroll-reveal:not(.animate-fade-in-up)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-fade-in-up');
          observer.unobserve(el);
        }
      });
    });
    const mutation = new MutationObserver(observeNew);
    mutation.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      observer.disconnect();
      mutation.disconnect();
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
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
