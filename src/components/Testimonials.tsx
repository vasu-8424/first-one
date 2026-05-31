import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The delivery is insanely fast, and the vegetables are always pristine. It feels like I went to the farm myself.",
    author: "Ravi Kumar",
    role: "Local Resident",
  },
  {
    text: "I used to spend 2 hours every morning buying meat and milk. Now AERVO does it for me perfectly.",
    author: "Sowmya Reddy",
    role: "Working Professional",
  },
  {
    text: "The cold-chain packaging for fish is a game changer in our town. Unmatched quality.",
    author: "Anil Desai",
    role: "Home Chef",
  },
  {
    text: "Concierge-level service. They even followed my custom delivery instructions perfectly.",
    author: "Priya Sharma",
    role: "Teacher",
  },
];

// Duplicate for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section id="voices" className="relative overflow-hidden bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            <span className="h-px w-8 bg-ink-soft/40" />
            Voices
            <span className="h-px w-8 bg-ink-soft/40" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.92] tracking-[-0.03em] text-ink">
            What our clients <br />
            <span className="italic text-ink-soft">are saying.</span>
          </h2>
        </div>
      </div>

      <div className="relative mt-10 flex overflow-hidden">
        {/* Left/Right Fade Masks */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-64" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-64" />

        <motion.div
          className="flex w-max gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="relative flex w-[350px] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-ink/5 bg-white/40 p-8 shadow-sm backdrop-blur-xl md:w-[450px]"
            >
              <Quote className="mb-6 h-8 w-8 text-ink/10" />
              <p className="text-lg leading-relaxed text-ink md:text-xl">"{t.text}"</p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink font-display text-xl">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-ink">{t.author}</h4>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
