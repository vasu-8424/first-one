import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Store, ShoppingBasket, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    title: "01 / Selection",
    desc: "Browse our hand-curated catalog of premium groceries, fresh produce, and meats.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=60&w=400&auto=format&fit=crop",
  },
  {
    title: "02 / The Basket",
    desc: "Your selections are carefully gathered by our personal shoppers, ensuring only the best quality.",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=60&w=400&auto=format&fit=crop",
  },
  {
    title: "03 / Cold Packing",
    desc: "Items are meticulously packed into temperature-controlled artisan bags to preserve freshness.",
    image:
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?q=60&w=400&auto=format&fit=crop",
  },
  {
    title: "04 / Delivery",
    desc: "Our dedicated fleet navigates straight to your doorstep in Makthal & Narayanpet within 25 minutes.",
    image:
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=60&w=400&auto=format&fit=crop",
  },
];

export function Process() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-ink text-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Ambient (Optimized) */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.div
            style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            className="absolute -top-40 left-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.2_45/0.1),transparent_60%)] opacity-30 will-change-transform"
          />
        </div>

        <motion.div
          style={{ x }}
          className="relative z-10 flex w-[400vw] h-full items-center will-change-transform"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex h-full w-[100vw] flex-col justify-center px-10 md:px-32"
            >
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-24">
                {/* Left: Text */}
                <div className="max-w-xl">
                  <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-background/50">
                    <span className="h-px w-8 bg-background/30" />
                    The Journey
                  </div>
                  <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.92] tracking-[-0.03em]">
                    {step.title.split(" / ")[0]} <br />
                    <span className="italic text-background/70">{step.title.split(" / ")[1]}</span>
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-background/60 md:text-lg">
                    {step.desc}
                  </p>
                </div>

                {/* Right: Visual */}
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2 shadow-2xl md:aspect-[4/5]">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-2 overflow-hidden rounded-[2rem]"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
