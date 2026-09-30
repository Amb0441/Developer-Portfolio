import { Database, Layout, Server, Smartphone } from 'lucide-react';

const skillCategories = [
  { 
    title: "Frontend Development", 
    icon: <Layout className="w-6 h-6 mb-4 text-primary" />,
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
    colSpan: "md:col-span-2",
    delay: "delay-100"
  },
  { 
    title: "Mobile Development", 
    icon: <Smartphone className="w-6 h-6 mb-4 text-primary" />,
    items: ["React Native", "Expo"],
    colSpan: "md:col-span-1",
    delay: "delay-200"
  },
  { 
    title: "Backend & Tools", 
    icon: <Server className="w-6 h-6 mb-4 text-primary" />,
    items: ["Node.js", "Bun", "Docker"],
    colSpan: "md:col-span-1",
    delay: "delay-300"
  },
  { 
    title: "Databases & Cloud", 
    icon: <Database className="w-6 h-6 mb-4 text-primary" />,
    items: ["SQL", "NoSQL", "Firebase", "Supabase"],
    colSpan: "md:col-span-2",
    delay: "delay-400"
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div>
        <div className="flex items-center gap-6 mb-16 md:mb-24 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Capabilities</h2>
          <div className="flex-grow h-[1px] bg-border"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className={`p-8 rounded-2xl bg-muted/40 border border-border hover:bg-muted/80 transition-colors ${category.colSpan} scroll-reveal ${category.delay}`}
            >
              {category.icon}
              <h3 className="text-2xl font-serif mb-6">{category.title}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {category.items.map(item => (
                  <li key={item} className="font-sans text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
