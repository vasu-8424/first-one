import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base Canvas */}
      <div className="absolute inset-0 bg-background" />

      {/* Tomato red aura */}
      <div
        className="absolute -left-[5%] -top-[5%] h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.22_25)_0%,transparent_70%)] opacity-[0.12]"
      />
      
      {/* Spinach green aura */}
      <div
        className="absolute -right-[10%] top-[10%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.15_145)_0%,transparent_70%)] opacity-[0.14]"
      />
      
      {/* Carrot orange aura */}
      <div
        className="absolute -bottom-[15%] left-[10%] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.2_45)_0%,transparent_70%)] opacity-[0.16]"
      />

      {/* Eggplant purple aura */}
      <div
        className="absolute -bottom-[10%] -right-[5%] h-[65vw] w-[65vw] rounded-full bg-[radial-gradient(circle,oklch(0.45_0.2_320)_0%,transparent_70%)] opacity-[0.1]"
      />

      {/* Subtle gradient overlay to blend everything naturally */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
    </div>
  );
}
