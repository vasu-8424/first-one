const words = ["Grocery", "Dairy", "Meat", "Fish", "Vegetables", "Curated", "Delivered"];

export function Marquee() {
  const items = [...words, ...words, ...words];
  return (
    <section className="border-y border-ink/10 py-8 md:py-10">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12 md:gap-20 md:pr-20">
          {items.map((w, i) => (
            <span key={`${w}-${i}`} className="flex items-center gap-12 md:gap-20">
              <span className="font-display text-4xl tracking-tight text-ink md:text-6xl">
                {w === "Curated" || w === "Delivered" ? (
                  <span className="italic text-ink-soft">{w}</span>
                ) : (
                  w
                )}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
