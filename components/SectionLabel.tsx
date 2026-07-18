export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="font-sans text-faint text-[11px] tracking-[0.16em]" style={{ fontWeight: 400 }}>
        {number}
      </span>
      <span className="w-6 h-px bg-divider" />
      <span className="font-sans text-muted text-[11px] tracking-[0.16em] uppercase" style={{ fontWeight: 400 }}>
        {label}
      </span>
    </div>
  );
}
