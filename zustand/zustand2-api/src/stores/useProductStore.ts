import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { getProductsApi } from "../api/productApi";
import type { ProductState } from "../types/product";

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      loading: false,
      error: null,

      fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
          const products = await getProductsApi();
          set({ products, loading: false });
        } catch (err: any) {
          set({ error: err.message || "Error fetching products", loading: false });
        }
      },

      clearProducts: () => {
        set({ products: [] });
      },
    }),
    {
      name: "product-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ products: state.products }),
    }
  )
);
