import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base Canvas */}
      <div className="absolute inset-0 bg-background" />

      {/* Tomato red aura */}
      <motion.div
        initial={{ scale: 1, x: "0%", y: "0%" }}
        animate={{
          scale: [1, 1.1, 1],
          x: ["0%", "5%", "0%"],
          y: ["0%", "-5%", "0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[5%] -top-[5%] h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.22_25)_0%,transparent_70%)] opacity-[0.12] will-change-transform"
      />
      
      {/* Spinach green aura */}
      <motion.div
        initial={{ scale: 1, x: "0%", y: "0%" }}
        animate={{
          scale: [1, 1.15, 1],
          x: ["0%", "-6%", "0%"],
          y: ["0%", "6%", "0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-[10%] top-[10%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.15_145)_0%,transparent_70%)] opacity-[0.14] will-change-transform"
      />
      
      {/* Carrot orange aura */}
      <motion.div
        initial={{ scale: 1, x: "0%", y: "0%" }}
        animate={{
          scale: [1, 1.2, 1],
          x: ["0%", "8%", "0%"],
          y: ["0%", "4%", "0%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-[15%] left-[10%] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.2_45)_0%,transparent_70%)] opacity-[0.16] will-change-transform"
      />

      {/* Eggplant purple aura */}
      <motion.div
        initial={{ scale: 1, x: "0%", y: "0%" }}
        animate={{
          scale: [1, 1.1, 1],
          x: ["0%", "-4%", "0%"],
          y: ["0%", "-8%", "0%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-[10%] -right-[5%] h-[65vw] w-[65vw] rounded-full bg-[radial-gradient(circle,oklch(0.45_0.2_320)_0%,transparent_70%)] opacity-[0.1] will-change-transform"
      />

      {/* Subtle gradient overlay to blend everything naturally */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
      
      {/* Extra grain overlay just for the background */}
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />
    </div>
  );
}
