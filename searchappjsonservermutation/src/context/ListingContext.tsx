import { createContext, useContext, useState } from "react";

interface SearchFilters {
  keyword: string;
  categoryId: string;
}

interface ListingItem {
  id: number;
  title: string;
  categoryId: number;
  description: string;
}

interface ListingContextType {
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  listings: ListingItem[];
  setListings: (list: ListingItem[]) => void;
}

const ListingContext = createContext<ListingContextType | undefined>(undefined);

export const ListingProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<SearchFilters>({ keyword: "", categoryId: "" });
  const [listings, setListings] = useState<ListingItem[]>([]);

  return (
    <ListingContext.Provider value={{ filters, setFilters, listings, setListings }}>
      {children}
    </ListingContext.Provider>
  );
};

export const useListingContext = () => {
  const ctx = useContext(ListingContext);
  if (!ctx) throw new Error("useListingContext must be used inside ListingProvider");
  return ctx;
};
