export const fetchCategories = async () => {
  const res = await fetch("http://localhost:4000/categories");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const fetchListings = async (filters?: any) => {
  const params = new URLSearchParams(filters || {}).toString();
  const res = await fetch(`http://localhost:4000/listings?${params}`);
  if (!res.ok) throw new Error("Failed to fetch listings");
  return res.json();
};
