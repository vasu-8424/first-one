import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 md:px-7 md:py-3",
          scrolled ? "glass hairline shadow-[0_8px_40px_-12px_rgba(20,15,10,0.08)]" : "bg-transparent"
        )}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-ink">
            <span className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.7_0.2_45)] via-transparent to-[oklch(0.75_0.2_150)] opacity-90" />
            <span className="relative font-display text-[15px] leading-none text-background">a</span>
          </span>
          <span className="text-[13px] font-medium tracking-[0.32em] text-ink">AERVO</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[12px] font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-background transition-all hover:bg-ink/90 md:px-5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--jade)] opacity-75" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--jade)]" />
          </span>
          Order Now
        </a>
      </nav>
    </motion.header>
  );
}
