import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: "vegetables",
    title: "Farm Fresh Produce",
    subtitle: "Harvested daily. Hand-picked for crispness.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    theme: "text-[var(--jade)]",
  },
  {
    id: "milk",
    title: "Morning Dairy",
    subtitle: "Pure, cold-chain protected milk delivered by 6 AM.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop",
    theme: "text-blue-200",
  },
  {
    id: "fish",
    title: "Premium Seafood",
    subtitle: "Daily catch from trusted coastal sources.",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1200&auto=format&fit=crop",
    theme: "text-cyan-200",
  },
  {
    id: "meat",
    title: "Prime Cuts",
    subtitle: "Hygienically packed fresh meat and poultry.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
    theme: "text-rose-300",
  },
  {
    id: "groceries",
    title: "Pantry Essentials",
    subtitle: "Top-tier household needs delivered in minutes.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop",
    theme: "text-amber-200",
  },
];

export function CategoryShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const clamp = (v: number) => Math.max(0, Math.min(1, v));
  const x = useTransform(scrollYProgress, [clamp(0), clamp(1)], ["0%", "-80%"]); // 5 items = 500vw, so scroll -80% to see all

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-ink">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex w-[500vw] h-full will-change-transform">
          {categories.map((category, index) => (
            <div key={category.id} className="relative flex h-full w-[100vw] items-center justify-center p-6 md:p-24">
              
              {/* Cinematic Background Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={category.image} 
                  alt={category.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 grid h-full w-full max-w-[1400px] grid-cols-1 items-end pb-20 md:grid-cols-2 md:items-center md:pb-0">
                
                <div className="flex flex-col justify-end">
                  <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/50">
                    <span className="h-px w-8 bg-white/30" />
                    {String(index + 1).padStart(2, '0')} / Collection
                  </div>
                  <h2 className={`font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.03em] ${category.theme}`}>
                    {category.title}
                  </h2>
                  <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70 md:text-xl">
                    {category.subtitle}
                  </p>
                </div>

                {/* Right side floating image for depth */}
                <div className="hidden h-[60vh] w-full justify-end md:flex">
                  <div className="group relative aspect-[3/4] h-full overflow-hidden rounded-[2.5rem] bg-white/5 p-2 shadow-2xl backdrop-blur-md">
                    <div className="absolute inset-2 overflow-hidden rounded-[2rem]">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Interactive Button */}
                      <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-110 cursor-pointer shadow-xl">
                        <ArrowUpRight className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Progress Bar indicator */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10">
          <motion.div 
            className="h-full bg-white/80"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>

      </div>
    </section>
  );
}
