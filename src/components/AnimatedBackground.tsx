import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base Canvas */}
      <div className="absolute inset-0 bg-background" />

      {/* Warm ember aura */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: ["0%", "5%", "0%"],
          y: ["0%", "-5%", "0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[10%] -top-[10%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,var(--ember)_0%,transparent_70%)] opacity-[0.12]"
      />
      
      {/* Rich jade aura */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: ["0%", "-8%", "0%"],
          y: ["0%", "8%", "0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-[10%] top-[15%] h-[65vw] w-[65vw] rounded-full bg-[radial-gradient(circle,var(--jade)_0%,transparent_70%)] opacity-[0.1]"
      />
      
      {/* Soft lime aura near bottom */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: ["0%", "10%", "0%"],
          y: ["0%", "5%", "0%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-[20%] left-[15%] h-[75vw] w-[75vw] rounded-full bg-[radial-gradient(circle,var(--lime)_0%,transparent_70%)] opacity-[0.15]"
      />

      {/* Subtle gradient overlay to blend everything naturally */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
      
      {/* Extra grain overlay just for the background */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />
    </div>
  );
}
