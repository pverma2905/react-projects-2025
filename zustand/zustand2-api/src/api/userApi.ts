import type { User } from "../types/user";


export async function getUsersApi(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data: User[] = await response.json();
  return data;
}
