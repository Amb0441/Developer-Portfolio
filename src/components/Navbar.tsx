import { useState } from 'react';
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
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isSystemDark ? 'light' : 'dark');
    }
  };

  return (
    <nav className="w-full z-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-serif tracking-tight">AMB.</a>
        
        <div className="hidden md:flex items-center gap-10 font-sans text-xs uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:opacity-50 transition-opacity">
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="hover:opacity-50 transition-opacity ml-4" aria-label="Toggle theme">
            <Sun className="h-5 w-5 hidden dark:block" strokeWidth={1.5} />
            <Moon className="h-5 w-5 block dark:hidden" strokeWidth={1.5} />
          </button>
        </div>

        <div className="md:hidden flex items-center gap-6">
          <button onClick={toggleTheme} className="hover:opacity-50 transition-opacity" aria-label="Toggle theme">
            <Sun className="h-5 w-5 hidden dark:block" strokeWidth={1.5} />
            <Moon className="h-5 w-5 block dark:hidden" strokeWidth={1.5} />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" className="hover:opacity-50 transition-opacity">
            {mobileMenuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden bg-background overflow-hidden border-b border-border transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 font-sans text-sm uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
