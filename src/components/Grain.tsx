export function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[40] opacity-[0.07] dark:opacity-[0.12] mix-blend-overlay"
      aria-hidden="true"
    >
      <div className="grain-layer h-full w-full" />
    </div>
  );
}
