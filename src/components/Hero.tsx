import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 border-b border-border overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 dark:opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="font-sans text-sm md:text-base font-medium text-primary tracking-widest uppercase">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] leading-[0.95] mb-8 tracking-tight font-serif text-foreground animate-fade-in-up delay-100">
              Digital craft <br />
              <span className="text-muted-foreground italic">built to scale.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-sans leading-relaxed mb-12 text-muted-foreground max-w-2xl animate-fade-in-up delay-200">
              Hi, I'm Anthony M. Ballestra. A full stack and cross-platform developer based in Baguio City, with hands-on experience building robust applications and digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in-up delay-300">
              <a 
                href="#projects" 
                className="group flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-4 px-4 sm:px-0">
                <a 
                  href="https://github.com/Amb0441" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-muted text-foreground hover:bg-border transition-colors" 
                  aria-label="GitHub (Amb0441)"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/anthony-ballestra-108272307" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-muted text-foreground hover:bg-border transition-colors" 
                  aria-label="LinkedIn (Anthony Ballestra)"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:aanthonyb.dev@gmail.com" 
                  className="p-3 rounded-full bg-muted text-foreground hover:bg-border transition-colors" 
                  aria-label="Email aanthonyb.dev@gmail.com"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block mt-8 lg:mt-0 animate-fade-in-up delay-400">
             <div className="relative w-full aspect-[4/5] max-w-sm mx-auto xl:max-w-md">
                <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-2xl -z-10 transition-transform duration-500 hover:translate-x-6 hover:translate-y-6"></div>
                <div className="w-full h-full rounded-2xl overflow-hidden border border-border bg-card shadow-2xl relative z-10">
                  <img
                    src="/dsc_3261.jpg"
                    alt="Anthony M. Ballestra"
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
