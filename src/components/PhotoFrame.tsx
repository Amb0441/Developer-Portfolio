import type { ReactNode } from 'react';

type PhotoFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhotoFrame({ children, className = '' }: PhotoFrameProps) {
  return (
    <div className={`relative rounded-[1.85rem] bg-card p-[3px] shadow-[0_28px_70px_-24px_rgba(20,17,14,0.45)] ${className}`}>
      <div className="absolute inset-0 rounded-[1.85rem] ring-1 ring-gold/35 pointer-events-none" />
      <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-muted">
        {children}
        <span className="pointer-events-none absolute inset-[10px] rounded-[1.25rem] border border-gold/40" />
      </div>
    </div>
  );
}
