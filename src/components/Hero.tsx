import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import hero from "@/assets/hero-groceries.jpg";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const px = (e.clientX / window.innerWidth - 0.5) * 30;
      const py = (e.clientY / window.innerHeight - 0.5) * 20;
      mx.set(px);
      my.set(py);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-28 md:pt-36">
      {/* ambient gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.92_0.22_125/0.18),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 right-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.2_45/0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-ink-soft"
        >
          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-ink-soft/40" />
            Est. Makthal · Narayanpet
          </span>
          <span className="hidden md:inline">Vol. 01 — The Art of Moving</span>
        </motion.div>

        {/* headline */}
        <div className="mt-14 grid grid-cols-12 gap-6 md:mt-20">
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-display text-[clamp(3.2rem,11vw,11rem)] leading-[0.92] tracking-[-0.04em] text-ink">
              {["Freshness", "Delivered", "Beautifully."].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.1, ease, delay: 0.4 + i * 0.12 }}
                  className="block overflow-hidden"
                >
                  <span className="block">
                    {word === "Beautifully." ? (
                      <span className="italic text-ink/90">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.9 }}
            className="col-span-12 mt-6 flex flex-col gap-8 md:col-span-4 md:mt-0 md:justify-end"
          >
            <p className="max-w-sm text-pretty text-[15px] leading-relaxed text-ink-soft">
              A concierge for the everyday. AERVO curates and delivers your groceries, dairy, meat,
              fish and produce — arriving at your door with intention.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton>Place Order</MagneticButton>
              <MagneticButton variant="ghost">Our Services</MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* hero composition */}
        <motion.div
          style={{ y: yImg, scale: scaleImg, opacity }}
          className="relative mx-auto mt-16 aspect-[16/9] w-full max-w-[1200px] overflow-hidden md:mt-20"
        >
          <motion.div style={{ x: sx, y: sy }} className="relative h-full w-full">
            <img
              src={hero}
              alt="Floating composition of fresh apple, grapes, basil, milk bottle and salmon"
              width={1536}
              height={1536}
              className="h-full w-full object-cover"
            />
            {/* soft top/bottom fades */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
          </motion.div>

          {/* floating overlay chips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.2 }}
            className="absolute left-4 top-6 hidden md:left-8 md:top-10 md:block"
          >
            <div className="glass hairline flex items-center gap-3 rounded-full px-4 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--jade)]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink">
                Live · Delivering today
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.35 }}
            className="absolute bottom-6 right-4 hidden md:bottom-10 md:right-8 md:block"
          >
            <div className="glass hairline rounded-2xl p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                Avg. delivery
              </div>
              <div className="mt-1 font-display text-4xl leading-none text-ink">42<span className="text-ink-soft">m</span></div>
            </div>
          </motion.div>
        </motion.div>

        {/* meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 grid grid-cols-2 gap-y-6 border-t border-ink/10 pt-6 md:grid-cols-4 md:gap-x-10"
        >
          {[
            ["01", "Hand-picked", "Every item inspected before it leaves our hub."],
            ["02", "Cold chain", "Dairy, meat and fish move under temperature watch."],
            ["03", "On schedule", "Six days a week, 6 AM to 6 PM."],
            ["04", "Local craft", "Sourced from Makthal & Narayanpet producers."],
          ].map(([n, title, body]) => (
            <div key={n} className="flex items-start gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-ink-soft">{n}</span>
              <div>
                <div className="text-[13px] font-medium text-ink">{title}</div>
                <p className="mt-1 text-[12px] leading-relaxed text-ink-soft">{body}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
