import { useQuery } from "@tanstack/react-query";
import { fetchListings } from "../api/listingApi";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useListing = () => {
  const { listings, setListings, filters } = useContext(AppContext);

  return useQuery({
    queryKey: ["listings", filters],
    queryFn: async () => {
      const data = await fetchListings(filters);
      setListings(data);
      return data;
    },
    initialData: listings || undefined,
    enabled: listings === null // Only fetch if not in context
  });
};
