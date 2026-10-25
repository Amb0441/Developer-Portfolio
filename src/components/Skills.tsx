import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

const skillCategories = [
  {
    index: '01',
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    index: '02',
    title: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    index: '03',
    title: 'Backend',
    items: ['Node.js', 'Bun', 'Express', 'Docker'],
  },
  {
    index: '04',
    title: 'Data & cloud',
    items: ['SQL', 'NoSQL', 'Firebase', 'Supabase', 'Cloudinary'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle index="02" title="Skills" kicker="Stack" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/80 rounded-[2rem] overflow-hidden border border-border/80">
        {skillCategories.map((category, i) => (
          <Reveal
            key={category.title}
            delay={i * 0.07}
            className="group bg-background/80 p-8 md:p-9 hover:bg-card transition-colors duration-500"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-gold mb-6">
              {category.index}
            </p>
            <h3 className="text-2xl md:text-[1.9rem] font-serif tracking-tight mb-7">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 rounded-full border border-border/80 bg-card/80 font-sans text-xs text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
