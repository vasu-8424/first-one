import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderModal } from "@/store/useOrderModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navigation, MapPin } from "lucide-react";

const orderSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  products: z.string().min(2, "Please specify required products"),
  quantity: z.string().min(1, "Quantity is required"),
  notes: z.string().optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

export function OrderDetailsStep() {
  const { setStep, selectedAddress, closeModal } = useOrderModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = (data: OrderFormValues) => {
    if (!selectedAddress) return;

    const addr = selectedAddress;
    const locationText = `https://maps.google.com/?q=${addr.lat},${addr.lng}`;

    const message = `Hello AERVO,

I would like to place an order.

*Customer Details*
Name: ${data.name}
Phone: ${data.phone}

*Delivery Address (${addr.type})*
House/Flat: ${addr.houseFlatNo}
Building: ${addr.buildingName || "N/A"}
Street: ${addr.street}
Area: ${addr.area}
Landmark: ${addr.landmark || "N/A"}
Village/Town: ${addr.villageTown}
City: ${addr.city}
District: ${addr.district}
State: ${addr.state}
Pincode: ${addr.pincode}

*Google Maps Location:*
${locationText}

*Products:*
${data.products}

*Quantity:*
${data.quantity}

*Additional Notes:*
${data.notes || "None"}

Please confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919963791004?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-1">
      {/* Address Summary Card */}
      {selectedAddress && (
        <div className="flex items-start justify-between rounded-xl border border-[var(--jade)]/20 bg-[var(--jade)]/5 p-4">
          <div className="flex gap-3">
            <div className="mt-0.5 rounded-full bg-[var(--jade)]/20 p-1.5 text-[var(--jade)]">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Delivering to {selectedAddress.type}</p>
              <p className="mt-1 line-clamp-1 text-xs text-ink-soft">
                {selectedAddress.houseFlatNo}, {selectedAddress.street},{" "}
                {selectedAddress.villageTown}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setStep(1)}
            className="h-8 px-2 text-[11px] text-[var(--jade)] hover:bg-[var(--jade)]/10"
          >
            CHANGE
          </Button>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              Name *
            </Label>
            <Input
              {...register("name")}
              placeholder="John Doe"
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
            {errors.name && <span className="text-[10px] text-red-500">{errors.name.message}</span>}
          </div>
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              Phone Number *
            </Label>
            <Input
              {...register("phone")}
              placeholder="98765 43210"
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
            {errors.phone && (
              <span className="text-[10px] text-red-500">{errors.phone.message}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-4">
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              Products Required *
            </Label>
            <Input
              {...register("products")}
              placeholder="e.g. Milk, Apples"
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
            {errors.products && (
              <span className="text-[10px] text-red-500">{errors.products.message}</span>
            )}
          </div>
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              Quantity *
            </Label>
            <Input
              {...register("quantity")}
              placeholder="e.g. 2L, 1kg"
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
            {errors.quantity && (
              <span className="text-[10px] text-red-500">{errors.quantity.message}</span>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
            Delivery Instructions (Optional)
          </Label>
          <Textarea
            {...register("notes")}
            placeholder="e.g. Leave at the front door, ring doorbell..."
            className="min-h-[80px] rounded-xl border-ink/20 bg-white/50 px-4 py-3 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
          />
        </div>
      </div>

      <div className="mt-2">
        <Button
          type="submit"
          className="w-full gap-2 rounded-xl bg-[var(--jade)] py-6 text-[15px] font-semibold text-white transition-all hover:bg-[oklch(0.7_0.2_150)] hover:shadow-lg"
        >
          <Navigation className="h-5 w-5" />
          Proceed to WhatsApp
        </Button>
      </div>
    </form>
  );
}
