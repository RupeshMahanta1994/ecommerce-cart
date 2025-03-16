// store/useAuthStore.ts
import { create } from "zustand";

interface AuthState {
    user: {id:number, username: string; email: string; profilePicture: ArrayBuffer } | null;
    setUser: (user: {id:number, username: string; email: string; profilePicture: ArrayBuffer } | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));
