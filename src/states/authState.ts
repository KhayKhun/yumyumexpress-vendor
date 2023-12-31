import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user : null,
    setUser: (payload : any) => set({ user: payload })
}));
