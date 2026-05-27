import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Curate", body: "Browse the AERVO list — staples, fresh, premium picks." },
  { n: "02", title: "Confirm", body: "Send your order. We confirm cuts, weights, and arrival window." },
  { n: "03", title: "Source", body: "Our team selects each item at the morning market." },
  { n: "04", title: "Deliver", body: "Cold-chain protected, hand-delivered to your door." },
];

export function Process() {
  return (
    <section id="process" className="relative bg-canvas py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              <span className="h-px w-8 bg-ink-soft/40" />
              The Movement
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-ink">
              From shelf to <span className="italic text-ink-soft">your kitchen.</span>
            </h2>
          </div>
          <p className="col-span-12 max-w-md self-end text-[14px] leading-relaxed text-ink-soft md:col-span-4 md:col-start-9">
            Four quiet steps. Designed to remove every grain of friction between your craving and
            its arrival.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[88px] hidden h-px bg-ink/10 md:block" />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="relative"
              >
                <div className="font-mono text-[10px] tracking-[0.22em] text-ink-soft">{s.n}</div>
                <div className="relative mt-6 hidden md:block">
                  <div className="h-3 w-3 rotate-45 bg-background outline outline-1 outline-ink/30" />
                  <div className="absolute left-1.5 top-1.5 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-ink" />
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight tracking-tight text-ink md:mt-10 md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[240px] text-[13px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
