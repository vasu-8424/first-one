import { AnimatePresence, motion } from "framer-motion";
import { useOrderModal, AddressData } from "@/store/useOrderModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Plus, Navigation, ChevronRight, Home, Briefcase } from "lucide-react";
import { AddressFormStep } from "./AddressFormStep";
import { OrderDetailsStep } from "./OrderDetailsStep";

const variants = {
  enter: { x: 50, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
};

export function WhatsappOrderModal() {
  const { isOpen, step, savedAddresses, setStep, setSelectedAddress, setTempLocation, closeModal } = useOrderModal();

  const handleAddNew = () => {
    setTempLocation(null);
    setSelectedAddress(null);
    setStep(2);
  };

  const handleSelectAddress = (addr: AddressData) => {
    setSelectedAddress(addr);
    setStep(3);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="glass hairline fixed bottom-0 left-[50%] z-50 flex w-full max-w-lg translate-x-[-50%] translate-y-0 flex-col gap-0 overflow-hidden rounded-t-3xl border-ink/10 bg-background/90 p-0 shadow-2xl backdrop-blur-2xl duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom sm:bottom-auto sm:top-[50%] sm:max-h-[85vh] sm:translate-y-[-50%] sm:rounded-3xl">
        
        <div className="shrink-0 border-b border-ink/5 p-6 pb-4">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-ink">
              {step === 1 && "Select Delivery Location"}
              {step === 2 && "Enter Delivery Address"}
              {step === 3 && "Order Details"}
            </DialogTitle>
            <DialogDescription className="text-sm text-ink-soft">
              {step === 1 && "Choose a saved address or add a new one."}
              {step === 2 && "Pinpoint your exact location for accurate delivery."}
              {step === 3 && "Review your address and enter order details."}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="relative flex-1 overflow-x-hidden overflow-y-auto p-6 pt-4">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                <button
                  onClick={handleAddNew}
                  className="group flex w-full items-center gap-4 rounded-xl border border-[var(--jade)]/20 bg-[var(--jade)]/5 p-4 text-left transition-all hover:bg-[var(--jade)]/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--jade)]/20 text-[var(--jade)] transition-transform group-hover:scale-110">
                    <Navigation className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[var(--jade)]">Use Current Location</h4>
                    <p className="text-xs text-ink-soft">Using GPS</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[var(--jade)]" />
                </button>

                <div className="my-2 flex items-center gap-4">
                  <div className="h-px flex-1 bg-ink/10" />
                  <span className="text-[10px] uppercase tracking-wider text-ink-soft">Saved Addresses</span>
                  <div className="h-px flex-1 bg-ink/10" />
                </div>

                {savedAddresses.length > 0 ? (
                  <div className="space-y-3">
                    {savedAddresses.map((addr) => (
                      <button
                        key={addr.id}
                        onClick={() => handleSelectAddress(addr)}
                        className="flex w-full items-start gap-4 rounded-xl border border-ink/10 bg-white/40 p-4 text-left transition-all hover:bg-white/80"
                      >
                        <div className="mt-0.5 text-ink-soft">
                          {addr.type === "Home" ? <Home className="h-5 w-5" /> : addr.type === "Work" ? <Briefcase className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-ink">{addr.type}</h4>
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">
                            {addr.houseFlatNo}, {addr.street}, {addr.area}, {addr.villageTown}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center text-ink-soft">
                    <MapPin className="mb-3 h-8 w-8 opacity-20" />
                    <p className="text-sm">No saved addresses</p>
                  </div>
                )}
                
                {savedAddresses.length > 0 && (
                  <Button onClick={handleAddNew} variant="outline" className="mt-2 w-full rounded-xl border-dashed">
                    <Plus className="mr-2 h-4 w-4" /> Add New Address
                  </Button>
                )}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <AddressFormStep />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <OrderDetailsStep />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
