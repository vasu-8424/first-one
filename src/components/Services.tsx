import { motion } from "framer-motion";
import grocery from "@/assets/grocery-bag.jpg";
import milk from "@/assets/milk.jpg";
import meat from "@/assets/meat.jpg";
import fish from "@/assets/fish.jpg";
import veg from "@/assets/vegetables.jpg";

const services = [
  { n: "01", title: "Grocery", tag: "Daily essentials", body: "Pantry staples, household and dry goods — curated weekly.", img: grocery, size: "lg" },
  { n: "02", title: "Milk", tag: "Cold chain dairy", body: "Glass-bottled, sourced morning-fresh.", img: milk, size: "sm" },
  { n: "03", title: "Vegetables", tag: "Farm to door", body: "Heirloom, seasonal and local.", img: veg, size: "sm" },
  { n: "04", title: "Meat", tag: "Butcher's cut", body: "Hand-selected cuts, traceable origin.", img: meat, size: "md" },
  { n: "05", title: "Fish", tag: "Day catch", body: "Iced within hours of the catch.", img: fish, size: "md" },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              <span className="h-px w-8 bg-ink-soft/40" />
              Services
            </div>
          </div>
          <h2 className="col-span-12 font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-ink md:col-span-9">
            Five rituals, <span className="italic text-ink-soft">delivered</span> with care.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {services.map((s, i) => {
            const span =
              s.size === "lg"
                ? "col-span-12 md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto md:h-[680px]"
                : s.size === "md"
                ? "col-span-12 md:col-span-6 h-[420px]"
                : "col-span-6 md:col-span-5 h-[330px] md:h-[330px]";
            return (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                className={`group relative overflow-hidden bg-canvas ${span}`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <div className="flex items-start justify-between text-background/80">
                    <span className="font-mono text-[10px] tracking-[0.22em]">{s.n} / 05</span>
                    <span className="text-[10px] uppercase tracking-[0.22em]">{s.tag}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-5xl leading-none text-background md:text-7xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-background/75">
                      {s.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
