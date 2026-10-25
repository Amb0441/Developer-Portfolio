export function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden print:hidden" aria-hidden="true">
      <div className="vignette absolute inset-0 opacity-40 dark:opacity-70" />
    </div>
  );
}
