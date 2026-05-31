import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AddressType = "Home" | "Work" | "Other";

export interface AddressData {
  id: string;
  type: AddressType;
  houseFlatNo: string;
  buildingName?: string;
  street: string;
  area: string;
  landmark?: string;
  villageTown: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  lat: number;
  lng: number;
}

interface OrderModalState {
  isOpen: boolean;
  step: 1 | 2 | 3; // 1: Location Select, 2: Address Form, 3: Order Details
  savedAddresses: AddressData[];
  selectedAddress: AddressData | null;
  tempLocation: { lat: number; lng: number } | null; // Used before saving

  openModal: () => void;
  closeModal: () => void;
  setStep: (step: 1 | 2 | 3) => void;
  setTempLocation: (loc: { lat: number; lng: number } | null) => void;
  setSelectedAddress: (address: AddressData | null) => void;
  saveAddress: (address: AddressData) => void;
  removeAddress: (id: string) => void;
}

export const useOrderModal = create<OrderModalState>()(
  persist(
    (set) => ({
      isOpen: false,
      step: 1,
      savedAddresses: [],
      selectedAddress: null,
      tempLocation: null,

      openModal: () => set({ isOpen: true, step: 1 }),
      closeModal: () => set({ isOpen: false }),
      setStep: (step) => set({ step }),
      setTempLocation: (tempLocation) => set({ tempLocation }),
      setSelectedAddress: (selectedAddress) => set({ selectedAddress }),
      
      saveAddress: (address) =>
        set((state) => {
          const exists = state.savedAddresses.findIndex((a) => a.id === address.id);
          if (exists >= 0) {
            const newAddresses = [...state.savedAddresses];
            newAddresses[exists] = address;
            return { savedAddresses: newAddresses, selectedAddress: address };
          }
          return {
            savedAddresses: [address, ...state.savedAddresses],
            selectedAddress: address,
          };
        }),
        
      removeAddress: (id) =>
        set((state) => ({
          savedAddresses: state.savedAddresses.filter((a) => a.id !== id),
          selectedAddress: state.selectedAddress?.id === id ? null : state.selectedAddress,
        })),
    }),
    {
      name: "aervo-address-storage",
      partialize: (state) => ({ savedAddresses: state.savedAddresses }), // Only persist addresses
    }
  )
);
