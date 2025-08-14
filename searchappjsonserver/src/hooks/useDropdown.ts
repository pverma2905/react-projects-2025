import { useQuery } from "@tanstack/react-query";
import { fetchDropdowns } from "../api/dropdownApi";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useDropdown = () => {
  const { dropdowns, setDropdowns } = useContext(AppContext);

  return useQuery({
    queryKey: ["dropdowns"],
    queryFn: async () => {
      const data = await fetchDropdowns();
      setDropdowns(data);
      return data;
    },
    initialData: dropdowns || undefined,
    enabled: dropdowns === null
  });
};
