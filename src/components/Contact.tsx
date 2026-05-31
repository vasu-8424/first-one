import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { useOrderModal } from "@/store/useOrderModal";

export function Contact() {
  const { openModal } = useOrderModal();

  return (
    <section id="contact" className="relative bg-ink py-28 text-background md:py-40">
      {/* ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.2_45/0.18),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.2_150/0.14),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-background/50">
              <span className="h-px w-8 bg-background/30" />
              Contact
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.8rem,7vw,7rem)] leading-[0.92] tracking-[-0.03em]"
            >
              Begin your <br />
              <span className="italic text-background/70">first delivery.</span>
            </motion.h2>
            <p className="mt-8 max-w-md text-[14px] leading-relaxed text-background/65">
              Call, message, or write to us. Orders confirmed within minutes during service hours.
            </p>
            <div className="mt-10">
              <MagneticButton
                onClick={openModal}
                className="bg-background text-ink hover:bg-background/90"
              >
                Start an order
              </MagneticButton>
            </div>
          </div>

          <div className="col-span-12 mt-8 grid grid-cols-1 gap-px bg-background/10 md:col-span-5 md:mt-0">
            {[
              ["Phone", "+91 9963 791 004"],
              ["Email", "Aervo99@gmail.com"],
              ["Studio", "Makthal, Narayanpet"],
              ["Hours", "Mon — Sat · 6 AM – 6 PM"],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink p-6 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/45">
                  {k}
                </div>
                <div className="mt-2 font-display text-2xl tracking-tight text-background md:text-3xl">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
