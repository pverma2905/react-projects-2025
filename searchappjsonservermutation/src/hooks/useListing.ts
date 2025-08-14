import { useMutation } from "@tanstack/react-query";
import { useListingContext } from "../context/ListingContext";

export const useListing = () => {
  const { setListings } = useListingContext();

  return useMutation({
    mutationFn: async (filters: { keyword: string; categoryId: string }) => {
      let url = `http://localhost:4000/listings`;
      const params: string[] = [];
      if (filters.keyword) params.push(`q=${filters.keyword}`);
      if (filters.categoryId) params.push(`categoryId=${filters.categoryId}`);
      if (params.length) url += `?${params.join("&")}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch listings");
      return res.json();
    },
    onSuccess: (data) => {
      setListings(data);
    }
  });
};
