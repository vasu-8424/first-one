import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text =
  "We treat groceries as a quiet luxury. Each delivery is hand-curated, cold-protected, and arrives with the calm precision of a private concierge — because the everyday deserves more than convenience.";

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const words = text.split(" ");

  return (
    <section id="experience" ref={ref} className="relative py-28 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
          <span className="h-px w-8 bg-ink-soft/40" />
          Why Aervo
        </div>
        <p className="max-w-5xl font-display text-[clamp(1.8rem,4.4vw,4rem)] leading-[1.1] tracking-[-0.02em] text-ink">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            // We can't useTransform in a loop directly; use simple stagger instead
            return (
              <ScrollWord key={i} text={w} progress={scrollYProgress} start={start} end={end} />
            );
          })}
        </p>
      </div>
    </section>
  );
}

function ScrollWord({
  text,
  progress,
  start,
  end,
}: {
  text: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {text}
    </motion.span>
  );
}
