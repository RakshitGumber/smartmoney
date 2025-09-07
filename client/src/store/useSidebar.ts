import { create } from "zustand";

interface SideBarToggle {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useSidebar = create<SideBarToggle>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
