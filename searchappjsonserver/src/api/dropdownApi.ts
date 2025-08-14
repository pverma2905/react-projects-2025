export const fetchDropdowns = async () => {
  const res = await fetch(`http://localhost:5000/dropdowns`);
  if (!res.ok) throw new Error("Failed to fetch dropdowns");
  return res.json();
};

