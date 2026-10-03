import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isSystemDark ? 'light' : 'dark');
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-sm' : 'bg-transparent'}`}>
      <nav className="w-full" aria-label="Primary">
        <div className={`max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-4' : 'py-6 md:py-8'}`}>
          <a href="#hero" className="text-xl md:text-2xl font-serif tracking-tight rounded-sm">
            AMB.
          </a>
          
          <div className="hidden md:flex items-center gap-8 font-sans text-xs uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors ${active === link.href.slice(1) ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                {link.name}
                <span className={`absolute left-0 -bottom-0.5 h-px bg-primary transition-all duration-300 ${active === link.href.slice(1) ? 'w-full' : 'w-0'}`} />
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full text-foreground hover:bg-muted hover:text-primary transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <Sun className="h-5 w-5 hidden dark:block" strokeWidth={1.5} />
              <Moon className="h-5 w-5 block dark:hidden" strokeWidth={1.5} />
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <Sun className="h-5 w-5 hidden dark:block" strokeWidth={1.5} />
              <Moon className="h-5 w-5 block dark:hidden" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        <div 
          id="mobile-nav"
          aria-hidden={!mobileMenuOpen}
          className={`md:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-transparent pointer-events-none'}`}
        >
          <div className="px-6 py-6 flex flex-col gap-2 font-sans text-sm uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 ${active === link.href.slice(1) ? 'text-primary' : 'text-foreground'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
