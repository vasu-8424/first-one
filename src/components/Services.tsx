import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "vegetables",
    title: "Fresh Produce",
    desc: "Sourced directly from local farms daily. Hand-picked for crispness and flavor.",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-8",
    rowSpan: "md:row-span-2",
  },
  {
    id: "milk",
    title: "Morning Dairy",
    desc: "Cold-chain protected pure milk.",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
  {
    id: "grocery",
    title: "Pantry Essentials",
    desc: "Premium brands and household needs delivered in minutes.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-2",
  },
  {
    id: "meat",
    title: "Premium Cuts",
    desc: "Hygienically packed fresh meat.",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
  {
    id: "fish",
    title: "Fresh Seafood",
    desc: "Daily catch from trusted sources.",
    image:
      "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-28 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              <span className="h-px w-8 bg-ink-soft/40" />
              Offerings
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.03em] text-ink">
              Everything you <br />
              <span className="italic text-ink-soft">need, curated.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Explore our meticulously maintained catalog of daily essentials, cold-stored and
            delivered perfectly.
          </p>
        </div>

        {/* 3D Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ scale: 0.98, y: -5 }}
              className={`group relative min-h-[300px] overflow-hidden rounded-[2rem] shadow-sm transition-all hover:shadow-xl ${service.colSpan} ${service.rowSpan}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <div className="flex w-full items-start justify-end">
                  <motion.div
                    initial={{ opacity: 0, rotate: -45 }}
                    whileHover={{ opacity: 1, rotate: 0 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all group-hover:opacity-100 group-hover:bg-white text-white group-hover:text-ink"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </div>

                <div className="mt-16 md:mt-auto">
                  <h3 className="font-display text-3xl text-white md:text-4xl">{service.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
