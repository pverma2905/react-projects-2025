import type { ListingItem, SearchParams } from "../types";

export async function fetchListings(params?: SearchParams): Promise<ListingItem[]> {
  const query = params
    ? `?q=${params.keyword || ""}&category=${params.category || ""}`
    : "";
  const res = await fetch(`http://localhost:5000/listings${query}`);
  return res.json();
}