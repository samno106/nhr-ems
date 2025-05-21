import { create } from "zustand";
import { Session } from "next-auth";

interface SessionState {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

const useAuthStore = create<SessionState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  clearSession: () => set({ session: null }),
}));

export default useAuthStore;
