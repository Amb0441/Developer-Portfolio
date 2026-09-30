export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border scroll-reveal">
      <div>
        <div className="flex items-center gap-6 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight">About Me</h2>
          <div className="flex-grow h-[1px] bg-border"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="md:col-span-7 space-y-8 font-sans text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p className="text-foreground font-medium text-2xl md:text-3xl mb-12">
              Full Stack & Cross-Platform Developer based in Baguio City.
            </p>
            <p>
              As a graduate of the University of the Cordilleras (UC), I bring extensive hands-on experience in building robust full stack and cross-platform applications. From architecting scalable backend systems to crafting seamless user interfaces across web and mobile, my focus is on performance, clean code, and practical execution.
            </p>
            <p>
              I believe in building things that solve real-world problems. By combining rigorous academic foundations with agile engineering, I turn complex requirements into elegant, high-impact digital solutions.
            </p>
          </div>
          
          <div className="md:col-span-5 relative group scroll-reveal delay-200">
            {/* Mathematical offset border decoration */}
            <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-2xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 -z-10"></div>
            <div className="w-full aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-2xl relative z-10">
              <img
                src="/dsc_3261.jpg"
                alt="Anthony M. Ballestra"
                className="w-full h-full object-cover object-top"
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
    </section>
  );
}
