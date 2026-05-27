import { motion } from "framer-motion";

const quotes = [
  {
    q: "It feels less like a delivery and more like a gift. The presentation, the punctuality — entirely a different category.",
    name: "Aisha R.",
    role: "Narayanpet",
  },
  {
    q: "Our weekly fish order arrives colder than the market, and twice as fresh. I no longer go anywhere else.",
    name: "Suresh K.",
    role: "Makthal",
  },
  {
    q: "The team understands the craft. They picked tomatoes the way I would have — slowly, by hand.",
    name: "Lakshmi V.",
    role: "Resident chef",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between md:mb-20">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              <span className="h-px w-8 bg-ink-soft/40" />
              Voices
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-ink">
              Heard at the <span className="italic text-ink-soft">doorstep.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((qt, i) => (
            <motion.figure
              key={qt.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="hairline relative flex flex-col justify-between bg-card p-8 md:p-10"
            >
              <span className="absolute left-8 top-6 font-display text-7xl leading-none text-ink/15">
                “
              </span>
              <blockquote className="relative z-10 mt-10 font-display text-[1.4rem] leading-snug tracking-tight text-ink md:text-[1.6rem]">
                {qt.q}
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-between border-t border-ink/10 pt-5">
                <span className="text-[13px] font-medium text-ink">{qt.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  {qt.role}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
