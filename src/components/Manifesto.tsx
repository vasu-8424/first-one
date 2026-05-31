import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Apple, Carrot, Cherry, Croissant, Snowflake, HandPlatter } from "lucide-react";

const text = "We treat groceries as a quiet luxury. Each delivery is hand-curated, cold-protected, and arrives with the calm precision of a private concierge — because the everyday deserves more than convenience.";

// Words that trigger special visual effects when scrolled into view
const triggers = ["hand-curated,", "cold-protected,", "precision"];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const words = text.split(" ");
  
  // Mouse position for parallax (Optimized to prevent re-render crash)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="experience" ref={ref} className="relative py-36 md:py-48 overflow-hidden bg-background">
      
      {/* Floating Elements that react to mouse and scroll */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20 md:opacity-30 will-change-transform">
        {[
          { url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cb6c?q=80&w=200&auto=format&fit=crop", top: "10%", left: "15%", depth: 50, delay: 0 },
          { url: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=200&auto=format&fit=crop", top: "60%", left: "10%", depth: -30, delay: 1 },
          { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200&auto=format&fit=crop", top: "20%", right: "15%", depth: 40, delay: 2 },
          { url: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=200&auto=format&fit=crop", top: "70%", right: "12%", depth: -60, delay: 3 },
          { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4f?q=80&w=200&auto=format&fit=crop", top: "40%", right: "25%", depth: 80, delay: 1.5, special: "cold-protected," },
          { url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop", top: "30%", left: "25%", depth: 70, delay: 0.5, special: "hand-curated," },
        ].map((item, i) => (
          <FloatingItem 
            key={i} 
            item={item} 
            scrollYProgress={scrollYProgress} 
            mouseX={smoothMouseX} 
            mouseY={smoothMouseY} 
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
          <span className="h-px w-8 bg-ink-soft/40" />
          Why Aervo
        </div>
        <p className="max-w-5xl font-display text-[clamp(1.8rem,4.4vw,4rem)] leading-[1.1] tracking-[-0.02em] text-ink">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const isHighlight = triggers.includes(w);
            return (
              <ScrollWord 
                key={i} 
                text={w} 
                progress={scrollYProgress} 
                start={start} 
                end={end} 
                isHighlight={isHighlight}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

function FloatingItem({ item, scrollYProgress, mouseX, mouseY }: any) {
  const yScroll = useTransform(scrollYProgress, [0, 1], ["0%", `${item.depth}%`]);
  const xMouse = useTransform(mouseX, [-1, 1], [-(item.depth/2), item.depth/2]);
  const yMouse = useTransform(mouseY, [-1, 1], [-(item.depth/2), item.depth/2]);
  
  // Combine scroll parallax and mouse parallax
  const x = useTransform(() => xMouse.get());
  const y = useTransform(() => `calc(${yScroll.get()} + ${yMouse.get()}px)`);

  return (
    <motion.div
      style={{ top: item.top, left: item.left, right: item.right, x, y }}
      className="absolute will-change-transform"
    >
      <motion.div
        animate={{ 
          rotate: [0, 10, -5, 0],
          y: ["0%", "-5%", "5%", "0%"]
        }}
        transition={{
          duration: 10 + item.delay,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-white/40 bg-white/10 shadow-2xl overflow-hidden"
      >
        <img src={item.url} alt="Produce" className="h-full w-full object-cover" />
      </motion.div>
    </motion.div>
  );
}

function ScrollWord({
  text,
  progress,
  start,
  end,
  isHighlight
}: {
  text: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  isHighlight: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const scale = useTransform(progress, [start, end], [0.95, 1]);
  const filter = useTransform(progress, [start, end], ["blur(8px)", "blur(0px)"]);
  
  const color = useTransform(
    progress, 
    [start, end], 
    ["oklch(0.4 0 0)", isHighlight ? "var(--jade)" : "oklch(0.2 0 0)"]
  );

  return (
    <motion.span style={{ opacity, scale, filter, color }} className={`mr-[0.28em] inline-block ${isHighlight ? 'italic' : ''}`}>
      {text}
    </motion.span>
  );
}
