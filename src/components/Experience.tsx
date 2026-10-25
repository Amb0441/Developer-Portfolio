import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

const experiences = [
  {
    role: 'Web Developer',
    company: 'Freelance',
    period: 'August 2026 – Present',
    detail: 'Design and launch responsive client websites, from UI layout through production.',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Moneytrees',
    period: 'July 2026 – August 2026',
    detail: 'Built Safe Clinic, a React CRM and React Native app for intake, scheduling, and clinical records.',
  },
  {
    role: 'PC Building and Troubleshooting',
    company: 'Freelance',
    period: 'April 2020 – December 2022',
    detail: 'Assembled custom PCs, upgraded hardware, and diagnosed hardware and software issues.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle index="04" title="Experience" kicker="Path" />

      <div className="relative">
        <div className="absolute left-0 md:left-3 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-border to-transparent" aria-hidden="true" />
        {experiences.map((exp) => (
          <Reveal key={`${exp.role}-${exp.period}`} className="relative pl-8 md:pl-12 py-8 group">
            <span className="absolute left-[-5px] md:left-[7px] top-11 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_6px_var(--background)]" />
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold mb-2">{exp.period}</p>
                <h3 className="text-3xl md:text-5xl font-serif tracking-tight">
                  {exp.role}
                </h3>
                <p className="mt-3 font-sans text-muted-foreground leading-relaxed">{exp.detail}</p>
              </div>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-foreground lg:pt-8">{exp.company}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
