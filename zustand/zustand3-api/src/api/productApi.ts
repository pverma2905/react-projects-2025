// src/api/productApi.ts
import type { Product } from "../store/useAppStore";
import { apiClient } from "./apiClient";


export const productApi = {
  getProducts: async (): Promise<Product[]> => {
    return await apiClient<Product[]>("https://fakestoreapi.com/products");
  },

  getProduct: async (id: number): Promise<Product> => {
    return await apiClient<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
  },

  createProduct: async (data: Partial<Product>): Promise<Product> => {
    return await apiClient<Product>("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  updateProduct: async (id: number, data: Partial<Product>): Promise<Product> => {
    return await apiClient<Product>(
      `https://fakestoreapi.com/products/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
  },

  deleteProduct: async (id: number): Promise<void> => {
    await apiClient<void>(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
  },
};
