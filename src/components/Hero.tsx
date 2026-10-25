import { Github, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react';
import { PhotoFrame } from './PhotoFrame';

type HeroProps = {
  onOpenResume: () => void;
};

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="hero" className="relative pt-4 md:pt-6 pb-16 md:pb-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[6%] h-80 w-80 rounded-full bg-gold/25 blur-[110px]"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-7">
              <span className="inline-flex h-2 w-2 rounded-full bg-gold" />
              <span className="font-sans text-[11px] md:text-xs font-medium text-gold tracking-[0.32em] uppercase">
                Available for work
              </span>
              <span className="hidden sm:block h-px w-16 bg-gold/50" />
            </div>

            <p className="font-sans text-[11px] uppercase tracking-[0.34em] text-muted-foreground mb-4">
              Full-stack developer · Baguio City
            </p>

            <h1 className="text-[16vw] sm:text-7xl md:text-8xl lg:text-[7.2rem] leading-[0.82] mb-6 tracking-[-0.03em] font-serif text-foreground">
              Anthony
              <br />
              <span className="italic text-muted-foreground">Ballestra</span>
            </h1>

            <p className="text-lg md:text-xl font-sans font-light leading-relaxed mb-9 text-muted-foreground max-w-xl">
              I build applications people can actually use — web, mobile, and the systems behind them.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-sans text-sm tracking-wide hover:bg-primary hover:text-primary-foreground hover:shadow-[0_16px_40px_-16px_var(--primary)] transition-colors duration-300"
                aria-haspopup="dialog"
              >
                <FileText className="w-4 h-4" />
                View resume
              </button>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-sans text-sm tracking-wide border border-border/80 bg-background/50 backdrop-blur-sm hover:border-gold/60 hover:text-primary transition-colors duration-300"
              >
                See the work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-ballestra-108272307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans text-sm tracking-wide border border-border/80 bg-background/50 backdrop-blur-sm hover:border-gold/60 hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <div className="flex items-center justify-center sm:justify-start gap-2 sm:ml-1">
                <a
                  href="https://github.com/Amb0441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/70 text-foreground hover:border-gold hover:text-primary transition-colors duration-300"
                  aria-label="GitHub (Amb0441)"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:aanthonyb.dev@gmail.com"
                  className="p-3 rounded-full border border-border/70 text-foreground hover:border-gold hover:text-primary transition-colors duration-300"
                  aria-label="Email aanthonyb.dev@gmail.com"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <PhotoFrame className="w-full aspect-[4/5] max-w-[240px] sm:max-w-xs mx-auto lg:max-w-sm xl:max-w-md">
              <img
                src="/dsc_3261.jpg"
                alt="Portrait of Anthony M. Ballestra"
                className="w-full h-full object-cover object-center saturate-[0.92] contrast-[1.04]"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/DSC_3261.jpg')) {
                    target.src = '/DSC_3261.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
            </PhotoFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
