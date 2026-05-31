import { motion } from "framer-motion";
import { useOrderModal } from "@/store/useOrderModal";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsAppButton() {
  const { openModal } = useOrderModal();

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      onClick={openModal}
      className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-3 rounded-full bg-[var(--jade)] px-5 font-medium text-background shadow-[0_8px_40px_-12px_rgba(22,201,93,0.5)] transition-all hover:scale-105 hover:bg-[oklch(0.7_0.2_150)] active:scale-95 md:bottom-10 md:right-10"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden md:inline">Order on WhatsApp</span>
    </motion.button>
  );
}
