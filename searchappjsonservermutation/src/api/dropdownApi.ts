import type { DropdownItem } from "../types";

export async function fetchDropdowns(): Promise<DropdownItem[]> {
  const res = await fetch(`http://localhost:5000/dropdowns`);
  return res.json();
}