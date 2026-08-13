import { useEffect, useState } from "react";

export type HeroSlide = { src: string; alt: string };

export function HeroSlides({
  slides,
  interval = 6000,
}: {
  slides: HeroSlide[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [slides.length, interval]);

  return (
    <>
      <div className="absolute inset-0 -z-10">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1600}
            height={1008}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
              i === active ? "opacity-35" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:left-auto md:right-8 md:translate-x-0">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-8 bg-primary-foreground"
                : "w-3 bg-primary-foreground/40 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>
    </>
  );
}
