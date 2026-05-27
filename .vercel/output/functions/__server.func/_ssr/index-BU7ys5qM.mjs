import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { m as motion, a as useScroll, c as useTransform, u as useMotionValue, b as useSpring } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AnimatedBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[-1] overflow-hidden pointer-events-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.1, 1],
          x: ["0%", "5%", "0%"],
          y: ["0%", "-5%", "0%"]
        },
        transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
        className: "absolute -left-[10%] -top-[10%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,var(--ember)_0%,transparent_70%)] opacity-[0.12]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.15, 1],
          x: ["0%", "-8%", "0%"],
          y: ["0%", "8%", "0%"]
        },
        transition: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 },
        className: "absolute -right-[10%] top-[15%] h-[65vw] w-[65vw] rounded-full bg-[radial-gradient(circle,var(--jade)_0%,transparent_70%)] opacity-[0.1]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.2, 1],
          x: ["0%", "10%", "0%"],
          y: ["0%", "5%", "0%"]
        },
        transition: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 },
        className: "absolute -bottom-[20%] left-[15%] h-[75vw] w-[75vw] rounded-full bg-[radial-gradient(circle,var(--lime)_0%,transparent_70%)] opacity-[0.15]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.035] mix-blend-multiply", style: { backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")` } })
  ] });
}
function SmoothScroll() {
  return null;
}
function CursorGlow() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "aria-hidden": true,
      className: "pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full opacity-60 mix-blend-multiply md:block",
      style: {
        background: "radial-gradient(circle, color-mix(in oklab, var(--ember) 14%, transparent) 0%, transparent 60%)",
        filter: "blur(40px)"
      }
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const links = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
      className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: cn(
            "flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 md:px-7 md:py-3",
            scrolled ? "glass hairline shadow-[0_8px_40px_-12px_rgba(20,15,10,0.08)]" : "bg-transparent"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-ink", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-gradient-to-tr from-[oklch(0.7_0.2_45)] via-transparent to-[oklch(0.75_0.2_150)] opacity-90" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative font-display text-[15px] leading-none text-background", children: "a" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium tracking-[0.32em] text-ink", children: "AERVO" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-9 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: l.href,
                className: "group relative text-[12px] font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink",
                children: [
                  l.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 group-hover:w-full" })
                ]
              }
            ) }, l.href)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: "group flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-background transition-all hover:bg-ink/90 md:px-5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-[var(--jade)] opacity-75" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative h-1.5 w-1.5 rounded-full bg-[var(--jade)]" })
                  ] }),
                  "Order Now"
                ]
              }
            )
          ]
        }
      )
    }
  );
}
const hero = "/assets/hero-groceries-J9JS8MF7.jpg";
function MagneticButton({ children, className, variant = "primary", onClick }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });
  const handleMove = (e) => {
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
  const base = "group relative inline-flex items-center gap-3 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] font-medium transition-colors";
  const styles = variant === "primary" ? "bg-ink text-background hover:bg-ink/90" : "border border-ink/15 text-ink hover:border-ink/40";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      ref,
      onMouseMove: handleMove,
      onMouseLeave: reset,
      onClick,
      style: { x: sx, y: sy },
      className: cn(base, styles, className),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 inline-block h-px w-6 bg-current transition-all duration-500 group-hover:w-10" })
      ]
    }
  );
}
function Hero() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const ease = [0.22, 1, 0.36, 1];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, id: "top", className: "relative min-h-screen overflow-hidden pt-28 md:pt-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.92_0.22_125/0.18),transparent_70%)] blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 right-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.2_45/0.12),transparent_70%)] blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1400px] px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease, delay: 0.3 },
          className: "flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-ink-soft",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-ink-soft/40" }),
              "Est. Makthal · Narayanpet"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Vol. 01 — The Art of Moving" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-12 gap-6 md:mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-[clamp(3.2rem,11vw,11rem)] leading-[0.92] tracking-[-0.04em] text-ink", children: ["Freshness", "Delivered", "Beautifully."].map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { y: "110%", opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 1.1, ease, delay: 0.4 + i * 0.12 },
            className: "block overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: word === "Beautifully." ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-ink/90", children: word }) : word })
          },
          word
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, ease, delay: 0.9 },
            className: "col-span-12 mt-6 flex flex-col gap-8 md:col-span-4 md:mt-0 md:justify-end",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-pretty text-[15px] leading-relaxed text-ink-soft", children: "A concierge for the everyday. AERVO curates and delivers your groceries, dairy, meat, fish and produce — arriving at your door with intention." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { children: "Place Order" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { variant: "ghost", children: "Our Services" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          style: { y: yImg, scale: scaleImg, opacity },
          className: "relative mx-auto mt-12 aspect-[21/9] w-full max-w-[900px] overflow-hidden rounded-3xl md:mt-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: hero,
                  alt: "Floating composition of fresh apple, grapes, basil, milk bottle and salmon",
                  width: 1536,
                  height: 1536,
                  className: "h-full w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, ease, delay: 1.2 },
                className: "absolute left-4 top-6 hidden md:left-8 md:top-10 md:block",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass hairline flex items-center gap-3 rounded-full px-4 py-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--jade)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.22em] text-ink", children: "Live · Delivering today" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, ease, delay: 1.35 },
                className: "absolute bottom-6 right-4 hidden md:bottom-10 md:right-8 md:block",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass hairline rounded-2xl p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft", children: "Avg. delivery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 font-display text-4xl leading-none text-ink", children: [
                    "42",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink-soft", children: "m" })
                  ] })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay: 1.5 },
          className: "mt-12 grid grid-cols-2 gap-y-6 border-t border-ink/10 pt-6 md:grid-cols-4 md:gap-x-10",
          children: [
            ["01", "Hand-picked", "Every item inspected before it leaves our hub."],
            ["02", "Cold chain", "Dairy, meat and fish move under temperature watch."],
            ["03", "On schedule", "Six days a week, 6 AM to 6 PM."],
            ["04", "Local craft", "Sourced from Makthal & Narayanpet producers."]
          ].map(([n, title, body]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-[0.2em] text-ink-soft", children: n }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium text-ink", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] leading-relaxed text-ink-soft", children: body })
            ] })
          ] }, n))
        }
      )
    ] })
  ] });
}
const words = ["Grocery", "Dairy", "Meat", "Fish", "Vegetables", "Curated", "Delivered"];
function Marquee() {
  const items = [...words, ...words, ...words];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-ink/10 py-8 md:py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 animate-marquee items-center gap-12 pr-12 md:gap-20 md:pr-20", children: items.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12 md:gap-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl tracking-tight text-ink md:text-6xl", children: w === "Curated" || w === "Delivered" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-ink-soft", children: w }) : w }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-ink/30" })
  ] }, `${w}-${i}`)) }) }) });
}
const grocery = "/assets/grocery-bag-DkIwnNDj.jpg";
const milk = "/assets/milk-CxZaBxcO.jpg";
const meat = "/assets/meat-DqH63i-y.jpg";
const fish = "/assets/fish-Bmdnospp.jpg";
const veg = "/assets/vegetables-C2jkmSUC.jpg";
const services = [
  { n: "01", title: "Grocery", tag: "Daily essentials", body: "Pantry staples, household and dry goods — curated weekly.", img: grocery, size: "lg" },
  { n: "02", title: "Milk", tag: "Cold chain dairy", body: "Glass-bottled, sourced morning-fresh.", img: milk, size: "sm" },
  { n: "03", title: "Vegetables", tag: "Farm to door", body: "Heirloom, seasonal and local.", img: veg, size: "sm" },
  { n: "04", title: "Meat", tag: "Butcher's cut", body: "Hand-selected cuts, traceable origin.", img: meat, size: "md" },
  { n: "05", title: "Fish", tag: "Day catch", body: "Iced within hours of the catch.", img: fish, size: "md" }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 grid grid-cols-12 gap-6 md:mb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-ink-soft/40" }),
        "Services"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "col-span-12 font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-ink md:col-span-9", children: [
        "Five rituals, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-ink-soft", children: "delivered" }),
        " with care."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-12 gap-4 md:gap-6", children: services.map((s, i) => {
      const span = s.size === "lg" ? "col-span-12 md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto md:h-[680px]" : s.size === "md" ? "col-span-12 md:col-span-6 h-[420px]" : "col-span-6 md:col-span-5 h-[330px] md:h-[330px]";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
          className: `group relative overflow-hidden bg-canvas ${span}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: s.img,
                alt: s.title,
                loading: "lazy",
                className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between p-6 md:p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between text-background/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] tracking-[0.22em]", children: [
                  s.n,
                  " / 05"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.22em]", children: s.tag })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-5xl leading-none text-background md:text-7xl", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xs text-[13px] leading-relaxed text-background/75", children: s.body })
              ] })
            ] })
          ]
        },
        s.n
      );
    }) })
  ] }) });
}
const text = "We treat groceries as a quiet luxury. Each delivery is hand-curated, cold-protected, and arrives with the calm precision of a private concierge — because the everyday deserves more than convenience.";
function Manifesto() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const words2 = text.split(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", ref, className: "relative py-28 md:py-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-ink-soft/40" }),
      "Why Aervo"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-5xl font-display text-[clamp(1.8rem,4.4vw,4rem)] leading-[1.1] tracking-[-0.02em] text-ink", children: words2.map((w, i) => {
      const start = i / words2.length;
      const end = start + 1 / words2.length;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollWord, { text: w, progress: scrollYProgress, start, end }, i);
    }) })
  ] }) });
}
function ScrollWord({
  text: text2,
  progress,
  start,
  end
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { style: { opacity }, className: "mr-[0.28em] inline-block", children: text2 });
}
const steps = [
  { n: "01", title: "Curate", body: "Browse the AERVO list — staples, fresh, premium picks." },
  { n: "02", title: "Confirm", body: "Send your order. We confirm cuts, weights, and arrival window." },
  { n: "03", title: "Source", body: "Our team selects each item at the morning market." },
  { n: "04", title: "Deliver", body: "Cold-chain protected, hand-delivered to your door." }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "relative bg-canvas py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 grid grid-cols-12 gap-6 md:mb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-ink-soft/40" }),
          "The Movement"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-ink", children: [
          "From shelf to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-ink-soft", children: "your kitchen." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "col-span-12 max-w-md self-end text-[14px] leading-relaxed text-ink-soft md:col-span-4 md:col-start-9", children: "Four quiet steps. Designed to remove every grain of friction between your craving and its arrival." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-[88px] hidden h-px bg-ink/10 md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.22em] text-ink-soft", children: s.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 hidden md:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rotate-45 bg-background outline outline-1 outline-ink/30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1.5 top-1.5 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-ink" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-3xl leading-tight tracking-tight text-ink md:mt-10 md:text-4xl", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-[240px] text-[13px] leading-relaxed text-ink-soft", children: s.body })
          ]
        },
        s.n
      )) })
    ] })
  ] }) });
}
const quotes = [
  {
    q: "It feels less like a delivery and more like a gift. The presentation, the punctuality — entirely a different category.",
    name: "Aisha R.",
    role: "Narayanpet"
  },
  {
    q: "Our weekly fish order arrives colder than the market, and twice as fresh. I no longer go anywhere else.",
    name: "Suresh K.",
    role: "Makthal"
  },
  {
    q: "The team understands the craft. They picked tomatoes the way I would have — slowly, by hand.",
    name: "Lakshmi V.",
    role: "Resident chef"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-16 flex items-end justify-between md:mb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-ink-soft/40" }),
        "Voices"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-ink", children: [
        "Heard at the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-ink-soft", children: "doorstep." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: quotes.map((qt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
        className: "hairline relative flex flex-col justify-between bg-card p-8 md:p-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-8 top-6 font-display text-7xl leading-none text-ink/15", children: "“" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "relative z-10 mt-10 font-display text-[1.4rem] leading-snug tracking-tight text-ink md:text-[1.6rem]", children: qt.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-10 flex items-center justify-between border-t border-ink/10 pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-ink", children: qt.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft", children: qt.role })
          ] })
        ]
      },
      qt.name
    )) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative bg-ink py-28 text-background md:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.2_45/0.18),transparent_70%)] blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.2_150/0.14),transparent_70%)] blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-[1400px] px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-background/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-background/30" }),
          "Contact"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            className: "font-display text-[clamp(2.8rem,7vw,7rem)] leading-[0.92] tracking-[-0.03em]",
            children: [
              "Begin your ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-background/70", children: "first delivery." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-md text-[14px] leading-relaxed text-background/65", children: "Call, message, or write to us. Orders confirmed within minutes during service hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { className: "bg-background text-ink hover:bg-background/90", children: "Start an order" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 mt-8 grid grid-cols-1 gap-px bg-background/10 md:col-span-5 md:mt-0", children: [
        ["Phone", "+91 9963 791 004"],
        ["Email", "Aervo99@gmail.com"],
        ["Studio", "Makthal, Narayanpet"],
        ["Hours", "Mon — Sat · 6 AM – 6 PM"]
      ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-background/45", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-2xl tracking-tight text-background md:text-3xl", children: v })
      ] }, k)) })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-ink pb-10 pt-2 text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-background/10 pt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[15px] leading-none text-ink", children: "a" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium tracking-[0.32em]", children: "AERVO" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-[220px] text-[12px] leading-relaxed text-background/55", children: "The Art of Moving — premium grocery delivery from Makthal & Narayanpet." })
      ] }),
      [
        ["Services", ["Grocery", "Milk", "Meat", "Fish", "Vegetables"]],
        ["Studio", ["About", "Process", "Voices"]],
        ["Contact", ["+91 9963 791 004", "Aervo99@gmail.com", "Mon — Sat · 6 AM – 6 PM"]]
      ].map(([title, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-background/45", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            className: "text-[13px] text-background/80 transition-colors hover:text-background",
            children: it
          },
          it
        )) })
      ] }, title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-6 text-[11px] uppercase tracking-[0.22em] text-background/45 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " AERVO — All rights reserved"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--jade)]" }),
        "Delivering today · Makthal · Narayanpet"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "select-none font-display text-[clamp(5rem,22vw,22rem)] leading-[0.85] tracking-[-0.04em] text-background/[0.08]", children: "AERVO" }) })
  ] }) }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grain relative min-h-screen bg-transparent text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Manifesto, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
