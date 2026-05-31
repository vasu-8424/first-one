import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { MagneticButton } from "./MagneticButton";
import { useOrderModal } from "@/store/useOrderModal";

const badges = [
  { label: "Farm Fresh Daily", icon: "🥬" },
  { label: "Morning Milk", icon: "🥛" },
  { label: "Fresh Fish", icon: "🐟" },
  { label: "Premium Meat", icon: "🥩" },
  { label: "Same Day Delivery", icon: "🚚" },
];

const floatingItems = [
  { id: "veg",    img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=60&w=400&auto=format&fit=crop", top: "15%", left: "10%", depth: 40, xDir: -1, yDir: -1 },
  { id: "milk",    img: "https://images.unsplash.com/photo-1628085408616-08115682b13b?q=60&w=400&auto=format&fit=crop", top: "60%", left: "12%", depth: 25, xDir: -1, yDir: 1 },
  { id: "meat", img: "https://images.unsplash.com/photo-1607623814075-e51df1bd682f?q=80&w=400&auto=format&fit=crop", top: "20%", right: "10%", depth: 50, xDir: 1, yDir: -1 },
  { id: "fish",    img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=60&w=400&auto=format&fit=crop", top: "65%", right: "12%", depth: 30, xDir: 1, yDir: 1 },
];

export function Hero() {
  const { openModal } = useOrderModal();
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#faf9f8] px-6 pt-32 pb-20">
      
      {/* Luxury Ambient Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Jade Glow */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }} 
          className="absolute -top-[10%] left-[10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.15_150/0.4),transparent_70%)] will-change-transform" 
        />
        {/* Warm Orange Glow */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]) }} 
          className="absolute bottom-[0%] right-[5%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.15_45/0.3),transparent_70%)] will-change-transform" 
        />
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex w-full max-w-[1400px] flex-col items-center justify-center text-center"
      >
        <div className="mb-8 overflow-hidden">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 rounded-full border border-ink/10 bg-white/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-ink-soft shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--jade)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--jade)]"></span>
            </span>
            Premium Delivery in Makthal
          </motion.div>
        </div>

        <h1 className="flex flex-col items-center font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.04em] text-ink">
          <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            Freshness Delivered.
          </motion.span>
          <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="italic text-ink-soft">
            Beautifully.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-xl"
        >
          Premium groceries, vegetables, milk, fish and meat delivered across Makthal and Narayanpet with unmatched freshness and care.
        </motion.p>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2.5 rounded-2xl border border-ink/5 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-lg">
              <span className="text-lg">{badge.icon}</span>
              <span className="text-[13px] font-semibold tracking-wide text-ink">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
          className="mt-14"
        >
          <MagneticButton onClick={openModal} className="h-16 bg-ink px-12 text-[14px] font-semibold text-background hover:bg-[oklch(0.7_0.2_150)] shadow-2xl">
            Begin Your Order
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Cinematic Floating Composition & Basket */}
      <motion.div 
        style={{ opacity }}
        className="group relative mt-20 flex w-full max-w-5xl justify-center"
      >
        {/* Main Basket Image */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 aspect-[16/9] w-full overflow-hidden rounded-[3rem] border-8 border-white/40 shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop" 
            alt="Premium Groceries Basket" 
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Basket Glow on Hover */}
          <div className="absolute inset-0 bg-[var(--jade)] mix-blend-overlay opacity-0 transition-opacity duration-700 group-hover:opacity-30" />
        </motion.div>

        {/* Floating Items */}
        {floatingItems.map((item, i) => {
          // Calculate parallax and storytelling scroll scatter
          const clamp = (v: number) => Math.max(0, Math.min(1, v));
          
          const scatterX = useTransform(scrollYProgress, [clamp(0), clamp(0.5)], ["0%", `${item.xDir * 150}%`]);
          const scatterY = useTransform(scrollYProgress, [clamp(0), clamp(0.5)], ["0%", `${item.yDir * 100}%`]);
          
          const xMouse = useTransform(smoothMouseX, [-1, 1], [-(item.depth/2), item.depth/2]);
          const yMouse = useTransform(smoothMouseY, [-1, 1], [-(item.depth/2), item.depth/2]);

          const x = useTransform(() => `calc(${scatterX.get()} + ${xMouse.get()}px)`);
          const y = useTransform(() => `calc(${scatterY.get()} + ${yMouse.get()}px)`);

          return (
            <motion.div
              key={item.id}
              style={{ top: item.top, left: item.left, right: item.right, x, y }}
              className="absolute z-20 hidden md:block will-change-transform"
            >
              <motion.div
                animate={{ 
                  y: ["-5%", "5%"],
                  rotate: [-5, 5]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
                className="h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white/50 shadow-2xl transition-transform duration-700 group-hover:scale-90 group-hover:opacity-40 will-change-transform"
              >
                <img src={item.img} alt="Produce" loading="lazy" className="h-full w-full object-cover rounded-full" />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
