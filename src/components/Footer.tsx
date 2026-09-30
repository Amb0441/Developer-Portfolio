import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-xs uppercase tracking-[0.15em]">
      <p className="opacity-50">© {new Date().getFullYear()} Anthony M. Ballestra. All rights reserved.</p>
      
      <div className="flex items-center gap-6">
        <a 
          href="https://github.com/Amb0441" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 normal-case tracking-normal text-xs font-medium"
          aria-label="GitHub Profile"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/anthony-ballestra-108272307" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 normal-case tracking-normal text-xs font-medium"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <a 
          href="mailto:aanthonyb.dev@gmail.com" 
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 normal-case tracking-normal text-xs font-medium"
          aria-label="Send direct email"
        >
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </a>
      </div>
    </footer>
  );
}
