import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { PhotoFrame } from './PhotoFrame';

export function About() {
  const frame = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-14%', '14%']);

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle index="01" title="About" kicker="Profile" />

      <div className="grid md:grid-cols-12 gap-14 lg:gap-20 items-start">
        <div className="md:col-span-7 space-y-7 font-sans text-lg md:text-xl leading-relaxed text-muted-foreground">
          <Reveal>
            <p className="text-foreground text-3xl md:text-5xl lg:text-[3.25rem] font-serif tracking-tight leading-[1.05]">
              Performance, clean code, and work that holds up outside a demo.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              I studied Information Technology at the University of the Cordilleras, majoring in ERP. That grounding still shows: backends that scale, interfaces people can finish a task in, and shipping as the point — not the slide deck.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p>
              I like problems with a real user on the other side. The rest of this page is the work.
            </p>
          </Reveal>
        </div>

        <aside className="md:col-span-5">
          <Reveal delay={0.12}>
            <PhotoFrame className="w-full aspect-[4/5]">
              <div ref={frame} className="w-full h-full">
                <motion.img
                  style={{ y: imageY }}
                  src="/about.jpg"
                  alt="Anthony M. Ballestra in graduation attire"
                  className="w-full h-[120%] object-cover object-top saturate-[0.92]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
            </PhotoFrame>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
