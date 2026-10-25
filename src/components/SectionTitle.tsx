import { Reveal } from './Reveal';

type SectionTitleProps = {
  index: string;
  title: string;
  kicker?: string;
};

export function SectionTitle({ index, title, kicker }: SectionTitleProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.34em] text-gold mb-4">
            {index} {kicker ? `/ ${kicker}` : ''}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[0.88]">
            {title}
          </h2>
        </div>
        <div className="hidden sm:block flex-grow h-px mb-4 bg-gradient-to-r from-gold/70 to-transparent" />
      </div>
    </Reveal>
  );
}
