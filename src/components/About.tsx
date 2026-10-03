const facts = [
  { label: 'Based in', value: 'Baguio City, Philippines' },
  { label: 'Education', value: 'University of the Cordilleras' },
  { label: 'Focus', value: 'Full stack · Web & mobile' },
  { label: 'Status', value: 'Open to opportunities' },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div>
        <div className="flex items-center gap-6 mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight">About Me</h2>
          <div className="flex-grow h-px bg-border"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="md:col-span-7 space-y-6 font-sans text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p className="text-foreground font-medium text-2xl md:text-3xl font-serif tracking-tight">
              Full stack & cross-platform developer based in Baguio City.
            </p>
            <p>
              As a graduate of the University of the Cordilleras, I build robust applications across web and mobile — from scalable backends to interfaces people can actually use. The focus is performance, clean code, and practical execution.
            </p>
            <p>
              I like work that solves a real problem. Academic grounding plus agile engineering, turned into digital products that hold up outside a demo.
            </p>
            <dl className="rounded-2xl border border-border bg-muted/40 divide-y divide-border !mt-8">
              {facts.map((fact) => (
                <div key={fact.label} className="px-6 py-5">
                  <dt className="text-[11px] font-sans uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                    {fact.label}
                  </dt>
                  <dd className="font-sans text-foreground font-medium">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          
          <aside className="md:col-span-5">
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-primary translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl -z-10"></div>
              <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl relative z-10">
                <img
                  src="/about.jpg"
                  alt="Anthony M. Ballestra in graduation attire"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
