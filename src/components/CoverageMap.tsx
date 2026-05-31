import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function CoverageMap() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-48 text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-background/50">
            <span className="h-px w-8 bg-background/30" />
            Coverage Area
            <span className="h-px w-8 bg-background/30" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.92] tracking-[-0.03em]">
            Delivering to <br className="md:hidden" />
            <span className="italic text-background/70">Makthal & Narayanpet</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-20 aspect-square w-full max-w-4xl overflow-hidden rounded-[3rem] border border-background/10 bg-background/5 md:aspect-[2/1]">
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

          {/* Animated Route Line */}
          <svg className="absolute inset-0 h-full w-full" style={{ strokeDasharray: "10 10" }}>
            <motion.path
              d="M 200,300 C 400,300 500,150 700,200"
              fill="none"
              stroke="var(--jade)"
              strokeWidth="2"
              className="md:hidden"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M 250,250 C 450,300 650,150 850,250"
              fill="none"
              stroke="var(--jade)"
              strokeWidth="2"
              className="hidden md:block"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>

          {/* Moving Delivery Dot */}
          <motion.div
            className="absolute hidden h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] md:block"
            animate={{
              x: [250, 450, 650, 850],
              y: [250, 300, 150, 250],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Location Marker 1: Makthal */}
          <div className="absolute left-[30%] top-[60%] md:left-[25%] md:top-[50%]">
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-[var(--jade)]"
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--jade)] text-white shadow-2xl">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="absolute left-1/2 mt-4 -translate-x-1/2 whitespace-nowrap text-center">
                <p className="font-display text-xl text-white">Makthal</p>
                <p className="text-[10px] uppercase tracking-widest text-background/50">Hub</p>
              </div>
            </div>
          </div>

          {/* Location Marker 2: Narayanpet */}
          <div className="absolute right-[30%] top-[40%] md:right-[25%] md:top-[50%]">
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-blue-500"
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-2xl">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="absolute left-1/2 mt-4 -translate-x-1/2 whitespace-nowrap text-center">
                <p className="font-display text-xl text-white">Narayanpet</p>
                <p className="text-[10px] uppercase tracking-widest text-background/50">
                  Delivery Zone
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Numbers Morphing */}
        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {[
            { num: "500+", label: "Families Served" },
            { num: "25 Min", label: "Average Delivery" },
            { num: "100%", label: "Freshness Guarantee" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="text-center"
            >
              <h3 className="font-display text-6xl text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-white to-white/40">
                {stat.num}
              </h3>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-background/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
