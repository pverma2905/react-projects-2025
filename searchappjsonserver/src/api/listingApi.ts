export const fetchListings = async (filters?: any) => {
  let query = "";
  if (filters) {
    const params = new URLSearchParams(filters);
    query = `?${params.toString()}`;
  }
  const res = await fetch(`http://localhost:5000/listings${query}`);
  if (!res.ok) throw new Error("Failed to fetch listings");
  return res.json();
};

