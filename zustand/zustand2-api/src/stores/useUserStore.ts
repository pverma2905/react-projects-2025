import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// import { UserState } from "../types/user";
import { getUsersApi } from "../api/userApi";
import type { UserState } from "../types/user";

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      users: [],
      loading: false,
      error: null,

      fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
          const users = await getUsersApi();
          set({ users, loading: false });
        } catch (err: any) {
          set({ error: err.message || "Error fetching users", loading: false });
        }
      },

      clearUsers: () => {
        set({ users: [] });
      },
    }),
    {
      name: "user-store", // key in localStorage
      storage: createJSONStorage(() => localStorage),
      // optionally partialize: only persist users, not loading / error
      partialize: (state) => ({ users: state.users }),
    }
  )
);
