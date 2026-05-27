import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}

export function MagneticButton({ children, className, variant = "primary", onClick }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left - r.width / 2;
    const my = e.clientY - r.top - r.height / 2;
    x.set(mx * 0.25);
    y.set(my * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center gap-3 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-ink text-background hover:bg-ink/90"
      : "border border-ink/15 text-ink hover:border-ink/40";

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={cn(base, styles, className)}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 inline-block h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
    </motion.button>
  );
}
