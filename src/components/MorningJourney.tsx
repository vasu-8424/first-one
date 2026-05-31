import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sunrise, Search, ShieldCheck, Snowflake, Home } from "lucide-react";

const journeySteps = [
  {
    id: "market",
    title: "5:00 AM — The Market",
    desc: "While the city sleeps, our sourcing experts are at the local farms and markets, securing the first pick of the day's harvest.",
    icon: Sunrise,
  },
  {
    id: "selection",
    title: "6:00 AM — Fresh Selection",
    desc: "Every vegetable, fruit, and cut of meat is hand-inspected. Only the pristine and flawless make the cut.",
    icon: Search,
  },
  {
    id: "quality",
    title: "7:00 AM — Quality Check",
    desc: "A rigorous second pass ensures zero compromises on safety, hygiene, and premium standards.",
    icon: ShieldCheck,
  },
  {
    id: "cold",
    title: "Cold Storage",
    desc: "Perishables are immediately transferred to state-of-the-art cold-chain bags, locking in freshness and extending shelf life.",
    icon: Snowflake,
  },
  {
    id: "delivery",
    title: "Doorstep Delivery",
    desc: "Our concierges navigate the streets of Makthal and Narayanpet, delivering your quiet luxury directly to your door.",
    icon: Home,
  },
];

export function MorningJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        {/* Background color shifting */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: useTransform(
              scrollYProgress,
              [0, 0.2, 0.4, 0.6, 0.8, 1],
              ["#f8f9fa", "#fff7ed", "#f0fdf4", "#eff6ff", "#f8fafc", "#f8f9fa"],
            ),
          }}
        />

        <div className="relative z-10 w-full max-w-4xl px-6 text-center">
          <div className="mb-12 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            <span className="h-px w-8 bg-ink-soft/40" />
            The Morning Ritual
            <span className="h-px w-8 bg-ink-soft/40" />
          </div>

          <div className="relative h-64 w-full md:h-80">
            {journeySteps.map((step, index) => {
              // Calculate specific scroll ranges for each step to fade in and out
              const start = index * 0.2;
              const peak = start + 0.1;
              const end = start + 0.2;

              const clamp = (val: number) => Math.max(0, Math.min(1, val));

              const opacity = useTransform(
                scrollYProgress,
                [clamp(start - 0.05), clamp(peak), clamp(end + 0.05)],
                [0, 1, 0],
              );

              const y = useTransform(
                scrollYProgress,
                [clamp(start - 0.1), clamp(peak), clamp(end + 0.1)],
                [50, 0, -50],
              );

              const scale = useTransform(
                scrollYProgress,
                [clamp(start - 0.1), clamp(peak), clamp(end + 0.1)],
                [0.9, 1, 1.1],
              );

              return (
                <motion.div
                  key={step.id}
                  style={{ opacity, y, scale }}
                  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                >
                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl">
                    <step.icon className="h-10 w-10 text-ink" />
                  </div>
                  <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-none text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-soft md:text-base">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
          {journeySteps.map((_, i) => {
            const clamp = (val: number) => Math.max(0, Math.min(1, val));
            return (
              <motion.div
                key={i}
                className="h-1.5 rounded-full bg-ink"
                style={{
                  width: useTransform(
                    scrollYProgress,
                    [clamp(i * 0.2 - 0.1), clamp(i * 0.2 + 0.1)],
                    [8, 32],
                  ),
                  opacity: useTransform(
                    scrollYProgress,
                    [clamp(i * 0.2 - 0.1), clamp(i * 0.2 + 0.1)],
                    [0.2, 1],
                  ),
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
