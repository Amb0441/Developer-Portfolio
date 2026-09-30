const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Moneytrees",
    period: "2026 — 2026",
    delay: "delay-100"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="grid md:grid-cols-4 gap-12 md:gap-24 scroll-reveal">
        <h2 className="text-4xl md:text-6xl md:col-span-1 tracking-tight">
          Experience
        </h2>
        
        <div className="md:col-span-3 flex flex-col border-t border-border">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row lg:items-center justify-between py-10 border-b border-border group scroll-reveal ${exp.delay}`}
            >
              <h3 className="text-2xl md:text-3xl font-serif mb-4 lg:mb-0 group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-12 font-sans text-xs uppercase tracking-[0.2em]">
                <span className="font-semibold text-foreground">{exp.company}</span>
                <span className="opacity-50 text-muted-foreground">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
