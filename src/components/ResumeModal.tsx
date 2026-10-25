import { useEffect, useRef } from 'react';
import { X, Printer } from 'lucide-react';

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

const portfolioUrl = 'https://anthony-ballesatra.vercel.app/';

const skillGroups = [
  { label: 'Languages', items: 'TypeScript, JavaScript' },
  { label: 'Web and Mobile', items: 'React, React Native, Next.js, Expo, Tailwind CSS, Vite' },
  { label: 'Backend', items: 'Node.js, Express, REST APIs, Socket.io' },
  { label: 'Data and Media', items: 'Firebase, Supabase, PostGIS, Cloudinary' },
  { label: 'Tools', items: 'Git, GitHub, Cursor, Claude, Gemini AI Studio, OpenCode' },
  { label: 'Practices', items: 'Agile delivery, API integration, QA testing, client communication' },
];

const projects = [
  {
    name: 'Likharrio',
    role: 'Capstone, Full Stack Developer',
    stack: 'React Native, Expo, TypeScript, Firebase, Cloudinary',
    bullets: [
      'Built an Expo app and admin portal for artists to showcase work, sell, and run events.',
      'Designed Firebase data models and streamlined artist onboarding and registration.',
    ],
  },
  {
    name: 'Pulse Market',
    role: 'Independent Developer',
    stack: 'React 19, Supabase (PostGIS), Node.js, Express, Socket.io, Leaflet, Cloudinary',
    bullets: [
      'Built a real-time, map-first neighborhood marketplace with geolocation.',
    ],
  },
];

function printResume() {
  const previousTitle = document.title;
  document.title = 'Anthony-Ballestra-Resume';
  window.scrollTo(0, 0);
  document.querySelector<HTMLElement>('.resume-sheet .overflow-y-auto')?.scrollTo(0, 0);
  const restore = () => {
    document.title = previousTitle;
    window.removeEventListener('afterprint', restore);
  };
  window.addEventListener('afterprint', restore);
  window.print();
}

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
      className="resume-modal-root fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="no-print absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        aria-label="Close resume"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        className="resume-sheet relative z-10 w-full max-w-[8.5in] max-h-[92vh] overflow-hidden flex flex-col rounded-t-3xl sm:rounded-2xl bg-[#fff] text-[#111] border border-border shadow-2xl"
      >
        <div className="no-print flex items-center justify-between gap-3 px-5 sm:px-8 py-4 border-b border-neutral-200 bg-white shrink-0">
          <p id="resume-title" className="font-serif text-xl sm:text-2xl text-[#111]">Resume</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={printResume}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-neutral-300 text-sm font-sans font-medium text-[#111] hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 transition-colors text-[#111]"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={sheetBodyRef} className="overflow-y-auto">
          <article className="resume-document">
            <header className="resume-doc-header">
              <h2>Anthony Ballestra</h2>
              <p className="resume-doc-role">Full Stack Web Developer</p>
              <p className="resume-doc-contact">
                <span>Baguio City, Philippines</span>
                <span aria-hidden="true"> | </span>
                <span>+63 946 187 4503</span>
              </p>
              <p className="resume-doc-contact">
                <a href={portfolioUrl}>{portfolioUrl}</a>
              </p>
            </header>

            <section>
              <h3>Professional Summary</h3>
              <p>
                Full stack developer who builds React web applications and React Native mobile apps with Node.js REST APIs. Delivered clinic software, an artist platform, and a marketplace from database design through deployment with TypeScript, Firebase, Supabase, PostGIS, Socket.io, and Cloudinary.
              </p>
            </section>

            <section>
              <h3>Technical Skills</h3>
              <dl className="resume-doc-skills">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <dt>{group.label}</dt>
                    <dd>{group.items}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h3>Professional Experience</h3>
              <div className="resume-doc-entry">
                <div className="resume-doc-row">
                  <p className="resume-doc-strong">Web Developer</p>
                  <p className="resume-doc-date">August 2026 – Present</p>
                </div>
                <p className="resume-doc-meta">Freelance</p>
                <ul className="resume-doc-list">
                  <li>Design and launch responsive client websites, from UI layout through production.</li>
                  <li>Develop interfaces with React, TypeScript, JavaScript, Tailwind CSS, and Vite.</li>
                </ul>
              </div>
              <div className="resume-doc-entry">
                <div className="resume-doc-row">
                  <p className="resume-doc-strong">Full Stack Developer Intern</p>
                  <p className="resume-doc-date">July 2026 – August 2026</p>
                </div>
                <p className="resume-doc-meta">Moneytrees</p>
                <ul className="resume-doc-list">
                  <li>Built Safe Clinic, a React CRM and React Native app for intake, scheduling, and clinical records.</li>
                  <li>Integrated REST APIs and Firebase so web and mobile records stayed in sync.</li>
                  <li>Supported Agile delivery from layout and API integration through QA and GitHub, under NDA.</li>
                </ul>
              </div>
              <div className="resume-doc-entry">
                <div className="resume-doc-row">
                  <p className="resume-doc-strong">PC Building and Troubleshooting</p>
                  <p className="resume-doc-date">April 2020 – December 2022</p>
                </div>
                <p className="resume-doc-meta">Freelance</p>
                <ul className="resume-doc-list">
                  <li>Assembled custom PCs, upgraded hardware, and diagnosed hardware and software issues.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3>Projects</h3>
              <ul className="resume-doc-projects">
                {projects.map((project) => (
                  <li key={project.name}>
                    <div className="resume-doc-row">
                      <p className="resume-doc-strong">{project.name}</p>
                      <p className="resume-doc-date">{project.role}</p>
                    </div>
                    <p className="resume-doc-meta">Technologies: {project.stack}</p>
                    <ul className="resume-doc-list">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Education</h3>
              <div className="resume-doc-entry">
                <div className="resume-doc-row">
                  <p className="resume-doc-strong">Bachelor of Science in Information Technology (ERP)</p>
                  <p className="resume-doc-date">September 2026</p>
                </div>
                <p className="resume-doc-meta">University of the Cordilleras</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
