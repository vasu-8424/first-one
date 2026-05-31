import { useState, useEffect, lazy, Suspense } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderModal, AddressData } from "@/store/useOrderModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Target, Loader2, Home, Briefcase, Map } from "lucide-react";
import { cn } from "@/lib/utils";

// Dynamically import InteractiveMap to prevent Leaflet from crashing during SSR
const InteractiveMap = lazy(() =>
  import("./InteractiveMap").then((m) => ({ default: m.InteractiveMap })),
);

const addressSchema = z.object({
  houseFlatNo: z.string().min(1, "House/Flat No is required"),
  buildingName: z.string().optional(),
  street: z.string().min(1, "Street is required"),
  area: z.string().min(1, "Area/Colony is required"),
  landmark: z.string().optional(),
  villageTown: z.string().min(1, "Village/Town is required"),
  city: z.string().optional(),
  district: z.string().optional(),
  state: z.string().optional(),
  pincode: z.string().min(6, "Valid Pincode required"),
  type: z.enum(["Home", "Work", "Other"]),
});

type AddressFormValues = z.infer<typeof addressSchema>;

export function AddressFormStep() {
  const { setStep, saveAddress, selectedAddress, tempLocation, setTempLocation } = useOrderModal();
  const [loadingLoc, setLoadingLoc] = useState(false);
  const [coverage, setCoverage] = useState<"available" | "unavailable" | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      type: "Home",
      ...(selectedAddress || {}),
    },
  });

  const addressType = watch("type");

  // If we have an existing selected address, use its coords, else default to Makthal coords
  const currentLat = tempLocation?.lat || selectedAddress?.lat || 16.502;
  const currentLng = tempLocation?.lng || selectedAddress?.lng || 77.508;

  const reverseGeocode = async (lat: number, lng: number) => {
    setLoadingLoc(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
      );
      const data = await res.json();
      const addr = data.address || {};

      setValue("street", addr.road || addr.street || "");
      setValue("area", addr.suburb || addr.neighbourhood || addr.residential || "");
      setValue("villageTown", addr.village || addr.town || addr.city_district || "");
      setValue("city", addr.city || addr.town || "");
      setValue("district", addr.county || addr.state_district || "");
      setValue("state", addr.state || "");
      setValue("pincode", addr.postcode || "");

      const isCovered =
        JSON.stringify(addr).toLowerCase().includes("makthal") ||
        JSON.stringify(addr).toLowerCase().includes("narayanpet");

      setCoverage(isCovered ? "available" : "unavailable");
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingLoc(false);
    }
  };

  const handleLocateMe = () => {
    if (!navigator.geolocation) return;
    setLoadingLoc(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setTempLocation({ lat: latitude, lng: longitude });
        reverseGeocode(latitude, longitude);
      },
      () => setLoadingLoc(false),
    );
  };

  const handleMapChange = (lat: number, lng: number) => {
    setTempLocation({ lat, lng });
    reverseGeocode(lat, lng);
  };

  const onSubmit = (data: AddressFormValues) => {
    const id = selectedAddress?.id || Math.random().toString(36).substr(2, 9);
    const fullData: AddressData = {
      ...data,
      id,
      lat: tempLocation?.lat || currentLat,
      lng: tempLocation?.lng || currentLng,
    };
    saveAddress(fullData);
    setStep(3); // Go to Order Details
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-1">
      <div className="relative">
        {isClient ? (
          <Suspense fallback={<div className="h-48 w-full animate-pulse rounded-xl bg-ink/5" />}>
            <InteractiveMap lat={currentLat} lng={currentLng} onChange={handleMapChange} />
          </Suspense>
        ) : (
          <div className="h-48 w-full animate-pulse rounded-xl bg-ink/5" />
        )}
        <Button
          type="button"
          size="sm"
          variant="secondary"
          onClick={handleLocateMe}
          className="absolute bottom-4 right-4 z-10 gap-2 shadow-lg"
          disabled={loadingLoc}
        >
          {loadingLoc ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Target className="h-4 w-4" />
          )}
          Locate Me
        </Button>
      </div>

      {coverage && (
        <div
          className={cn(
            "rounded-lg border p-3 text-center text-[13px] font-medium",
            coverage === "available"
              ? "border-[var(--jade)]/20 bg-[var(--jade)]/10 text-[var(--jade)]"
              : "border-red-500/20 bg-red-500/10 text-red-600",
          )}
        >
          {coverage === "available" ? "✅ Delivery Available" : "⚠ Outside Service Area"}
        </div>
      )}

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              House / Flat No *
            </Label>
            <Input
              {...register("houseFlatNo")}
              placeholder="e.g. 102"
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
            {errors.houseFlatNo && (
              <span className="text-[10px] text-red-500">{errors.houseFlatNo.message}</span>
            )}
          </div>
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              Building Name
            </Label>
            <Input
              {...register("buildingName")}
              placeholder="e.g. Residency"
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              Street / Road *
            </Label>
            <Input
              {...register("street")}
              placeholder="e.g. Main Road"
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
            {errors.street && (
              <span className="text-[10px] text-red-500">{errors.street.message}</span>
            )}
          </div>
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              Area / Colony *
            </Label>
            <Input
              {...register("area")}
              placeholder="e.g. Old City"
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
            {errors.area && <span className="text-[10px] text-red-500">{errors.area.message}</span>}
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
            Landmark
          </Label>
          <Input
            {...register("landmark")}
            placeholder="e.g. Near Post Office"
            className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              Village / Town *
            </Label>
            <Input
              {...register("villageTown")}
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
            {errors.villageTown && (
              <span className="text-[10px] text-red-500">{errors.villageTown.message}</span>
            )}
          </div>
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              Pincode *
            </Label>
            <Input
              {...register("pincode")}
              className="h-11 rounded-xl border-ink/20 bg-white/50 px-4 text-ink transition-all focus-visible:border-[var(--jade)] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[var(--jade)]"
            />
            {errors.pincode && (
              <span className="text-[10px] text-red-500">{errors.pincode.message}</span>
            )}
          </div>
        </div>

        {/* Hidden inputs for remaining fields that are auto-filled */}
        <input type="hidden" {...register("city")} />
        <input type="hidden" {...register("district")} />
        <input type="hidden" {...register("state")} />

        <div className="space-y-2 pt-2">
          <Label className="text-xs text-ink-soft">Save address as</Label>
          <div className="flex gap-3">
            {[
              { id: "Home", icon: Home },
              { id: "Work", icon: Briefcase },
              { id: "Other", icon: MapPin },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setValue("type", t.id as "Home" | "Work" | "Other")}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 text-xs font-medium transition-all",
                  addressType === t.id
                    ? "border-[var(--jade)] bg-[var(--jade)]/10 text-[var(--jade)]"
                    : "border-ink/10 text-ink-soft hover:bg-ink/5",
                )}
              >
                <t.icon className="h-3.5 w-3.5" />
                {t.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => setStep(1)}
          className="flex-1 rounded-xl"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="flex-[2] rounded-xl bg-[var(--jade)] hover:bg-[oklch(0.7_0.2_150)] text-white"
        >
          Save & Continue
        </Button>
      </div>
    </form>
  );
}
