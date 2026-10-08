import { useEffect, useRef } from 'react';
import { X, Printer, Mail, Github, Linkedin, MapPin } from 'lucide-react';

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

const skills = [
  'React', 'TypeScript', 'JavaScript', 'Tailwind CSS',
  'React Native', 'Expo',
  'Node.js', 'Bun', 'Docker',
  'SQL', 'NoSQL', 'Firebase', 'Supabase',
];

const projects = [
  {
    name: 'Likharrio',
    detail: 'Cordilleran art community — Expo app for phone and web, plus an admin site.',
  },
  {
    name: 'Pulse Market',
    detail: 'Hyper-local neighbourhood marketplace ranked by walking distance.',
  },
  {
    name: 'SafeClinic',
    detail: 'Mobile app and web CRM to help people find licensed aesthetic clinics.',
  },
  {
    name: 'Nike Air Jordan 1 ‘Banned’',
    detail: 'Interactive web archive of the 1985 Banned Air Jordan 1.',
  },
];

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const sheetBodyRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    sheetBodyRef.current?.scrollTo({ top: 0 });
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        aria-label="Close resume"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        className="resume-sheet relative z-10 w-full max-w-3xl max-h-[92vh] overflow-hidden flex flex-col rounded-t-3xl sm:rounded-2xl bg-card border border-border shadow-2xl"
      >
        <div className="flex items-center justify-between gap-3 px-5 sm:px-8 py-4 border-b border-border bg-card/95 backdrop-blur-md shrink-0">
          <p id="resume-title" className="font-serif text-xl sm:text-2xl">Resume</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-border text-sm font-sans font-medium hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={sheetBodyRef} className="overflow-y-auto px-5 sm:px-10 py-8 sm:py-10">
          <header className="border-b border-border pb-6 mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground">
              Anthony M. Ballestra
            </h2>
            <p className="mt-1 text-primary font-sans font-medium">
              Full Stack & Cross-Platform Developer
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground font-sans">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Baguio City, Philippines
              </span>
              <a href="mailto:aanthonyb.dev@gmail.com" className="inline-flex items-center gap-1.5 hover:text-primary">
                <Mail className="w-3.5 h-3.5 text-primary" />
                aanthonyb.dev@gmail.com
              </a>
              <a href="https://github.com/Amb0441" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                <Github className="w-3.5 h-3.5 text-primary" />
                Amb0441
              </a>
              <a href="https://www.linkedin.com/in/anthony-ballestra-108272307" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                <Linkedin className="w-3.5 h-3.5 text-primary" />
                LinkedIn
              </a>
            </div>
          </header>

          <section className="mb-8">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Summary</h3>
            <p className="font-sans text-[15px] leading-relaxed text-foreground">
              Graduate of the University of the Cordilleras. I build full stack and cross-platform applications — from scalable backends to interfaces people can actually use. Focused on performance, clean code, and practical execution.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Experience</h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <p className="font-serif text-xl text-foreground">Full Stack Developer Intern</p>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">2026</p>
            </div>
            <p className="font-sans text-sm font-medium text-primary mt-0.5">Moneytrees</p>
          </section>

          <section className="mb-8">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Education</h3>
            <p className="font-serif text-xl text-foreground">University of the Cordilleras</p>
            <p className="font-sans text-sm text-muted-foreground mt-0.5">Baguio City, Philippines</p>
          </section>

          <section className="mb-8">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Selected work</h3>
            <ul className="space-y-4">
              {projects.map((project) => (
                <li key={project.name}>
                  <p className="font-sans font-medium text-foreground">{project.name}</p>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{project.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full border border-border bg-background text-xs font-sans font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
