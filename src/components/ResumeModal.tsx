import { useEffect, useRef } from 'react';
import { X, Printer } from 'lucide-react';

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

const portfolioUrl = 'https://anthony-ballesatra.vercel.app/';

const skillGroups = [
  { label: 'Languages', items: 'JavaScript, TypeScript, SQL, HTML5, CSS3' },
  { label: 'Frontend', items: 'React, Tailwind CSS, Leaflet, Chart.js' },
  { label: 'Mobile', items: 'React Native, Expo' },
  { label: 'Backend', items: 'Node.js, Bun, Express, RESTful APIs, REST APIs, Socket.io' },
  { label: 'Data', items: 'Firebase, Supabase, PostGIS, Cloudinary' },
  { label: 'Tools', items: 'Git, GitHub, Docker, Agile' },
  { label: 'Soft skills', items: 'Team leadership, Collaboration, Communication, Problem solving' },
];

const projects = [
  {
    name: 'Pulse Market',
    role: 'Full Stack Developer',
    stack: 'React, TypeScript, Node.js, Express, Supabase, PostGIS, Socket.io, Cloudinary, Leaflet, Chart.js',
    links: 'https://pulse-market-eh1.pages.dev | github.com/Amb0441/Pulse-Market',
    bullets: [
      'Built a map-based neighbourhood marketplace. PostGIS bounding-box queries load listings in view, and location fuzzing hides exact seller addresses.',
      'Added a live local feed and buyer-seller messaging with Node.js, Express, and Socket.io.',
      'Shipped Cloudinary image uploads, document-based trust checks, and a post-sale reputation flow.',
      'Built a Chart.js seller dashboard for 30-day profile views and listing activity.',
    ],
  },
  {
    name: 'Likharrio',
    role: 'Capstone, Full Stack Developer',
    stack: 'React Native, Expo, TypeScript, Firebase, Cloudinary',
    links: 'https://likharrio-82864.web.app | https://likharrio-82864-admin.web.app',
    bullets: [
      'Built a discovery and marketplace app for Cordilleran artists so they can showcase work, sell, and post events, with recommendations for artworks and events.',
      'Designed the Firebase data model and a shorter registration flow for artist onboarding.',
      'Shipped one Expo app for phone and web, plus a separate admin site for community operations.',
    ],
  },
];

function printResume() {
  const previousTitle = document.title;
  document.title = 'Anthony-M-Ballestra-Resume';
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
              <h2>Anthony M. Ballestra</h2>
              <p className="resume-doc-role">Full Stack Developer | React, React Native, Node.js</p>
              <p className="resume-doc-contact">
                <span>Baguio City, Philippines</span>
                <span aria-hidden="true"> | </span>
                <a href="mailto:aanthonyb.dev@gmail.com">aanthonyb.dev@gmail.com</a>
                <span aria-hidden="true"> | </span>
                <span>+63 946 187 4503</span>
              </p>
              <p className="resume-doc-contact">
                <a href={portfolioUrl}>{portfolioUrl}</a>
                <span aria-hidden="true"> | </span>
                <a href="https://github.com/Amb0441" target="_blank" rel="noreferrer">github.com/Amb0441</a>
                <span aria-hidden="true"> | </span>
                <a href="https://www.linkedin.com/in/anthony-ballestra-108272307" target="_blank" rel="noreferrer">
                  linkedin.com/in/anthony-ballestra-108272307
                </a>
              </p>
            </header>

            <section>
              <h3>Summary</h3>
              <p>
                Full Stack Developer who ships React web apps and React Native mobile apps connected to Node.js RESTful APIs. Built Safe Clinic during a full-stack internship: a React CRM and React Native client for patient intake, scheduling, and records. Also delivered marketplace products with TypeScript, Firebase, Supabase, PostGIS, Socket.io, and Cloudinary, from database design through deployment.
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
              <h3>Experience</h3>
              <div className="resume-doc-entry">
                <div className="resume-doc-row">
                  <p className="resume-doc-strong">Full Stack Developer Intern</p>
                  <p className="resume-doc-date">2026</p>
                </div>
                <p className="resume-doc-meta">Moneytrees</p>
                <ul className="resume-doc-list">
                  <li>Built Safe Clinic, a React CRM and a React Native/Expo app for patient intake, scheduling, and clinical records.</li>
                  <li>Connected the web and mobile clients to secure RESTful APIs so patient and scheduling data stayed in sync.</li>
                  <li>Owned Agile delivery end to end: requirements, business logic, QA, and deployment with Git and GitHub.</li>
                  <li>Source code and screenshots are under NDA. Shareable scope: React, React Native, Expo, Firebase, and RESTful APIs for intake, scheduling, and records. Public builds are on the portfolio.</li>
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
                    <p className="resume-doc-meta">{project.stack}</p>
                    <p className="resume-doc-links">{project.links}</p>
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
                  <p className="resume-doc-strong">Bachelor of Science in Information Technology, ERP</p>
                  <p className="resume-doc-date">September 2026</p>
                </div>
                <p className="resume-doc-meta">University of the Cordilleras, Baguio City, Philippines · Major in Enterprise Resource Planning</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
