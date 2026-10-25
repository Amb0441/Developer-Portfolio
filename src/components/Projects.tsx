import { Github, Smartphone, Globe, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

interface ProjectLink {
  type: 'app' | 'web' | 'github' | 'admin';
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

interface ProjectCategory {
  id: string;
  label: string;
  note: string;
  projects: Project[];
}

const categories: ProjectCategory[] = [
  {
    id: "full-stack",
    label: "Full Stack",
    note: "Products with a real backend, data, and more than one surface.",
    projects: [
  {
    title: "Likharrio",
    badge: "Artist Community",
    description: "A community for Cordilleran artists and the people who follow their work. Artists showcase, sell, and post events; fans browse, save, and message. One Expo app for phone and web, plus a separate admin site.",
    tech: ["Expo", "React Native", "TypeScript", "Zustand", "TanStack Query", "Firebase", "Cloudinary"],
    links: [
      {
        type: "app",
        url: "https://likharrio-82864.web.app",
        label: "App"
      },
      {
        type: "admin",
        url: "https://likharrio-82864-admin.web.app",
        label: "Admin"
      }
    ],
    image: "/likharrio.png",
    delay: "delay-100"
  },
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
    delay: "delay-200"
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
    delay: "delay-300"
  },
    ],
  },
  {
    id: "website-development",
    label: "Website Development",
    note: "Visual sites and front-end studies.",
    projects: [
  {
    title: "NorthLine",
    badge: "Cairns Real Estate",
    description: "A Cairns agency site for buying, selling, leasing, and property management: listings, appraisals, and a named contact on every file. Sample data and branding — not a real agency.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    links: [
      {
        type: "web",
        url: "https://amb0441.github.io/NorthLine/",
        label: "Live"
      },
      {
        type: "github",
        url: "https://github.com/Amb0441/NorthLine",
        label: "GitHub"
      }
    ],
    image: "/northline.jpg",
    delay: "delay-100"
  },
  {
    title: "Peakstone",
    badge: "RE Mockup",
    description: "A mock real estate agency: sample listings, auctions, inquiries, and contact flows. Names, reviews, and branding are fictional — not a real agency.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Motion"],
    links: [
      {
        type: "web",
        url: "https://amb0441.github.io/PeakStone/",
        label: "Live"
      },
      {
        type: "github",
        url: "https://github.com/Amb0441/PeakStone",
        label: "GitHub"
      }
    ],
    image: "/peakstone.jpg",
    delay: "delay-100"
  },
  {
    title: "Vela Atelier",
    badge: "Kitchen & Bathroom",
    description: "A fictional kitchen and bathroom storefront: catalogues, product pages, cart, consult booking, a planning studio, and scripted support chat. Nothing is for sale — studios and prices are made up.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Motion"],
    links: [
      {
        type: "web",
        url: "https://amb0441.github.io/Vela-Atelier---Kitchen-Bathroom-Fixtures/",
        label: "Web"
      },
      {
        type: "github",
        url: "https://github.com/Amb0441/Vela-Atelier---Kitchen-Bathroom-Fixtures",
        label: "GitHub"
      }
    ],
    image: "/vela-atelier.jpg",
    delay: "delay-100"
  },
  {
    title: "North Reef",
    badge: "Property Website",
    description: "A mock property site: search listings, team and offices, appraisals, calculators, a maintenance portal, and an on-site assistant. Sample data only — not a real agency.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "React Router", "Motion"],
    links: [
      {
        type: "web",
        url: "https://amb0441.github.io/North-Reef/",
        label: "Web"
      },
      {
        type: "github",
        url: "https://github.com/Amb0441/North-Reef",
        label: "GitHub"
      }
    ],
    image: "/north-reef.png",
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
  },
  {
    title: "Marlowe",
    badge: "Marlowe",
    description: "A studio site for a brow atelier in Subiaco, Perth. Editorial layout with services, gallery, products, booking, and aftercare — shaped to feel close to the work, never louder than it.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Motion"],
    links: [
      {
        type: "web",
        url: "https://amb0441.github.io/Marlowe-Brow-Atelier/",
        label: "Web"
      },
      {
        type: "github",
        url: "https://github.com/Amb0441/Marlowe-Brow-Atelier",
        label: "GitHub"
      }
    ],
    image: "/marlowe.jpg",
    delay: "delay-400"
  },
  {
    title: "Zahra",
    badge: "Lebanese Restaurant",
    description: "A site for Zahra, a Lebanese kitchen and shisha lounge in Surry Hills. Menu, reservations, waitlist, banquet enquiries, and online ordering — set in a dark editorial layout with the grill at the centre.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Motion"],
    links: [
      {
        type: "web",
        url: "https://amb0441.github.io/Zahra-Lebanese-restaurant/",
        label: "Web"
      },
      {
        type: "github",
        url: "https://github.com/Amb0441/Zahra-Lebanese-restaurant",
        label: "GitHub"
      }
    ],
    image: "/zahra.png",
    delay: "delay-500"
  }
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const liveUrl = project.links.find((link) => link.type === 'web' || link.type === 'app')?.url;

  return (
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group flex flex-col h-full bg-card/80 border border-border/80 rounded-[2rem] overflow-hidden hover:border-gold/50 hover:shadow-[0_36px_90px_-30px_rgba(20,17,14,0.5)] transition-colors duration-500"
            >
              {/* Image Container with Zoom on Hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {liveUrl ? (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full w-full" aria-label={`Open ${project.title}`}>
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
                      className="w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-110 transition-transform duration-[800ms] ease-out"
                    />
                  </a>
                ) : (
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
                  className="w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-110 transition-transform duration-[800ms] ease-out"
                />
                )}
                
                {/* Badge Overlay */}
                {project.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-[11px] font-sans tracking-[0.14em] uppercase rounded-full bg-background/80 backdrop-blur-md text-foreground border border-gold/30 shadow-sm">
                      {project.badge}
                    </span>
                  </div>
                )}

                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 flex items-end p-6">
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
                          {link.type === 'admin' && <Shield className="w-4 h-4 shrink-0" />}
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
                  <h4 className="text-2xl md:text-[2rem] font-serif text-foreground group-hover:text-primary transition-colors duration-500">
                    {liveUrl ? (
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h4>
                  
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
                          {link.type === 'admin' && <Shield className="w-3.5 h-3.5" />}
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
                    <span key={tech} className="px-3 py-1 bg-background/70 border border-border/80 rounded-full text-[11px] font-sans tracking-wide text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle index="03" title="Selected Work" kicker="Portfolio" />

        <div className="flex flex-col gap-16 md:gap-24">
          {categories.map((category) => (
            <div key={category.id}>
              <Reveal className="mb-8 md:mb-12">
                <h3 className="text-2xl md:text-4xl font-serif tracking-tight italic">{category.label}</h3>
                <p className="mt-2 text-sm font-sans text-muted-foreground max-w-xl">{category.note}</p>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {category.projects.map((project, i) => (
                  <Reveal key={project.title} delay={i * 0.08} className="h-full">
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
