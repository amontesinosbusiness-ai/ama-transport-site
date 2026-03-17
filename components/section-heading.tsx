type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        <span className="heading-accent">{title}</span>
      </h2>
      {subtitle ? <p className="text-slate-300 text-base md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
