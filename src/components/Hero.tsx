import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative pt-8 md:pt-16 pb-20 md:pb-28 px-6 md:px-12 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 dark:opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="font-sans text-sm md:text-base font-medium text-primary tracking-widest uppercase">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] leading-[0.95] mb-8 tracking-tight font-serif text-foreground animate-fade-in-up delay-100">
              Digital craft <br />
              <span className="text-muted-foreground italic">built to scale.</span>
            </h1>
            
            <p className="text-lg md:text-2xl font-sans leading-relaxed mb-10 text-muted-foreground max-w-2xl animate-fade-in-up delay-200">
              Hi, I'm Anthony M. Ballestra. A full stack and cross-platform developer based in Baguio City, building applications people can actually use.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in-up delay-300">
              <a 
                href="#projects" 
                className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-medium border border-border bg-background/70 hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                Get in touch
              </a>
              
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:ml-2">
                <a 
                  href="https://github.com/Amb0441" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" 
                  aria-label="GitHub (Amb0441)"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/anthony-ballestra-108272307" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" 
                  aria-label="LinkedIn (Anthony Ballestra)"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:aanthonyb.dev@gmail.com" 
                  className="p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" 
                  aria-label="Email aanthonyb.dev@gmail.com"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-4 lg:mt-0 animate-fade-in-up delay-400">
             <div className="relative w-full aspect-[4/5] max-w-[220px] sm:max-w-xs mx-auto lg:max-w-sm xl:max-w-md">
                <div className="absolute inset-0 border-2 border-primary translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl -z-10"></div>
                <div className="w-full h-full rounded-2xl overflow-hidden border border-border bg-card shadow-2xl relative z-10">
                  <img
                    src="/dsc_3261.jpg"
                    alt="Portrait of Anthony M. Ballestra"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/DSC_3261.jpg')) {
                        target.src = '/DSC_3261.jpg';
                      }
                    }}
                  />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
