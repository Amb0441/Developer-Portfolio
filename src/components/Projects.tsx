import { Github, Smartphone, Globe } from 'lucide-react';

interface ProjectLink {
  type: 'app' | 'web' | 'github';
  url: string;
  label: string; // Shown on hover: "App", "Web", etc.
}

interface Project {
  title: string;
  badge?: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  image: string;
  delay: string;
}

const projects: Project[] = [
  {
    title: "Pulse Market",
    badge: "Hyper-Local Marketplace",
    description: "A neighbourhood marketplace for the Philippines. Drop a pin on signup — you see what's nearby, message in-app, and pick it up. No shipping, no bidding.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "TanStack Query", "Leaflet", "Express", "Bun", "Supabase", "Cloudinary"],
    links: [
      {
        type: "web",
        url: "https://pulse-market-eh1.pages.dev/",
        label: "Web"
      },
      {
        type: "github",
        url: "https://github.com/Amb0441/Pulse-Market",
        label: "GitHub"
      }
    ],
    image: "/pulse-market.png",
    delay: "delay-100"
  },
  {
    title: "SafeClinic",
    badge: "Mobile App & Web CRM",
    description: "A digital directory and clinic CRM (available as a mobile web app and web platform) designed to protect the public from unlicensed aesthetic and cosmetic scams. It provides a centralized, transparent hub where residents can find safe, legally registered clinics, ensuring they only receive treatments from credentialed medical professionals.",
    tech: ["React", "Vite", "Expo", "Firebase"],
    links: [
      {
        type: "app",
        url: "https://safe-clinic-8a49e-app.firebaseapp.com/",
        label: "App"
      },
      {
        type: "web",
        url: "https://safe-clinic-8a49e-web.firebaseapp.com/login",
        label: "Web"
      }
    ],
    image: "/safe.png",
    delay: "delay-200"
  },
  {
    title: "Nike Air Jordan 1 'Banned'",
    badge: "Interactive Web Archive",
    description: "A premium, interactive digital archive and academic case study exploring the history, marketing, and cultural impact of the 1985 \"Banned\" Air Jordan 1.",
    tech: ["HTML", "CSS"],
    links: [
      {
        type: "web",
        url: "https://banned-aj-1-1985-ag5ogrvmu-aballestra192-4229s-projects.vercel.app/",
        label: "Web"
      },
      {
        type: "github",
        url: "https://github.com/Amb0441/BANNED-AJ1-1985",
        label: "GitHub"
      }
    ],
    image: "/jordan-1.png",
    delay: "delay-300"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div>
        <div className="flex items-center gap-6 mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Selected Works</h2>
          <div className="flex-grow h-px bg-border"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div 
              key={project.title}
              className={`group flex flex-col bg-muted/40 border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 scroll-reveal ${project.delay}`}
            >
              {/* Image Container with Zoom on Hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('/safe.png')) {
                      target.src = '/safeclinic.jpg';
                    }
                  }}
                  className="w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Badge Overlay */}
                {project.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-sans font-medium rounded-full bg-background/85 backdrop-blur-md text-foreground border border-border/80 shadow-sm">
                      {project.badge}
                    </span>
                  </div>
                )}

                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex items-center gap-3">
                    {project.links.map((link) => (
                      <div key={link.label} className="relative group/link flex items-center">
                        {/* Floating Tooltip when link is hovered */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all duration-200 z-30">
                          <span className="px-2.5 py-1 text-xs font-sans font-semibold rounded-md bg-foreground text-background shadow-lg whitespace-nowrap block">
                            {link.label}
                          </span>
                          <div className="w-2 h-2 bg-foreground rotate-45 mx-auto -mt-1"></div>
                        </div>

                        {/* Interactive Link Button */}
                        <a 
                          href={link.url} 
                          target={link.url.startsWith('http') ? '_blank' : undefined} 
                          rel={link.url.startsWith('http') ? 'noreferrer' : undefined} 
                          className="flex items-center gap-2 h-10 px-4 bg-background/90 hover:bg-primary hover:text-primary-foreground rounded-full text-foreground transition-all duration-200 shadow-md backdrop-blur-sm transform-gpu hover:scale-105 border border-border/60" 
                          aria-label={link.label}
                        >
                          {link.type === 'app' && <Smartphone className="w-4 h-4 shrink-0" />}
                          {link.type === 'web' && <Globe className="w-4 h-4 shrink-0" />}
                          {link.type === 'github' && <Github className="w-4 h-4 shrink-0" />}
                          <span className="text-xs font-sans font-medium">
                            {link.label}
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-3">
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    {project.links.map((link) => (
                      <div key={link.label} className="relative group/titlelink">
                        {/* Hover Tooltip */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 -translate-y-1 group-hover/titlelink:opacity-100 group-hover/titlelink:translate-y-0 transition-all duration-200 z-20">
                          <span className="px-2 py-0.5 text-[11px] font-sans font-semibold rounded bg-foreground text-background shadow whitespace-nowrap block">
                            {link.label}
                          </span>
                          <div className="w-1.5 h-1.5 bg-foreground rotate-45 mx-auto -mt-1"></div>
                        </div>

                        <a 
                          href={link.url} 
                          target={link.url.startsWith('http') ? '_blank' : undefined} 
                          rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border/80 hover:border-primary/40 transition-all duration-200"
                          aria-label={link.label}
                        >
                          {link.type === 'app' && <Smartphone className="w-3.5 h-3.5" />}
                          {link.type === 'web' && <Globe className="w-3.5 h-3.5" />}
                          {link.type === 'github' && <Github className="w-3.5 h-3.5" />}
                          <span>{link.label}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground font-sans leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/60">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-sans font-medium text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
