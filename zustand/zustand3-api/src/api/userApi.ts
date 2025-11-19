// src/api/userApi.ts
import type { User } from "../store/useAppStore";
import { apiClient } from "./apiClient";


export const userApi = {
  getUsers: async (): Promise<User[]> => {
    return await apiClient<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
  },

  getUser: async (id: number): Promise<User> => {
    return await apiClient<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  },

  createUser: async (data: Partial<User>): Promise<User> => {
    return await apiClient<User>(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  },

  updateUser: async (id: number, data: Partial<User>): Promise<User> => {
    return await apiClient<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
  },

  deleteUser: async (id: number): Promise<void> => {
    await apiClient<void>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE",
      }
    );
  },
};
