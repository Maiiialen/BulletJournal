import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Store = {
  mode: string;
  setMode: (newValue: string) => void;
};

const useBearStore = create<Store>()(
  devtools((set, get) => ({
    mode: "Edit",
    setMode: (newValue: string) => {
      set({ mode: newValue });
    },
  })),
);
