// src/store/useAppStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

// ----------------------
// TYPES
// ----------------------

export interface User {
  id: number;
  name: string;
  email?: string;
}

export interface Product {
  id: number;
  title: string;
}

interface AppState {
  // Data
  users: User[];
  products: Product[];

  // UI state
  loading: boolean;
  error: string | null;

  // User Setters
  setUsers: (data: User[]) => void;
  addUser: (newUser: User) => void;
  updateUser: (updated: User) => void;
  deleteUser: (id: number) => void;

  // Product Setters
  setProducts: (data: Product[]) => void;
  addProduct: (newProduct: Product) => void;
  updateProduct: (updated: Product) => void;
  deleteProduct: (id: number) => void;

  // UI Setters
  setLoading: (v: boolean) => void;
  setError: (msg: string | null) => void;
}

// ----------------------
// STORE
// ----------------------

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial Data
      users: [],
      products: [],

      loading: false,
      error: null,

      // ----------------------
      // USER ACTIONS
      // ----------------------

      setUsers: (data) => set({ users: data }),

      addUser: (newUser) =>
        set({
          users: [...get().users, newUser],
        }),

      updateUser: (updatedUser) =>
        set({
          users: get().users.map((u) =>
            u.id === updatedUser.id ? updatedUser : u
          ),
        }),

      deleteUser: (id) =>
        set({
          users: get().users.filter((u) => u.id !== id),
        }),

      // ----------------------
      // PRODUCT ACTIONS
      // ----------------------

      setProducts: (data) => set({ products: data }),

      addProduct: (newProduct) =>
        set({
          products: [...get().products, newProduct],
        }),

      updateProduct: (updatedProduct) =>
        set({
          products: get().products.map((p) =>
            p.id === updatedProduct.id ? updatedProduct : p
          ),
        }),

      deleteProduct: (id) =>
        set({
          products: get().products.filter((p) => p.id !== id),
        }),

      // ----------------------
      // UI ACTIONS
      // ----------------------

      setLoading: (v) => set({ loading: v }),
      setError: (msg) => set({ error: msg }),
    }),

    {
      name: "app-storage", // persist key
    }
  )
);
