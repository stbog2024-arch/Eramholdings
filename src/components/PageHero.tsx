export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="rule-label text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}
