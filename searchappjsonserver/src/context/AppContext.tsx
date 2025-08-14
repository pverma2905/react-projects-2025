import { createContext, useState } from "react";
import type { ListingItem, DropdownItem } from "../types";
import type {ReactNode} from 'react'
interface AppContextType {
  listings: ListingItem[] | null;
  setListings: (data: ListingItem[]) => void;
  dropdowns: DropdownItem[] | null;
  setDropdowns: (data: DropdownItem[]) => void;
  filters: any;
  setFilters: (data: any) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [listings, setListings] = useState<ListingItem[] | null>(null);
  const [dropdowns, setDropdowns] = useState<DropdownItem[] | null>(null);
  const [filters, setFilters] = useState<any>({});

  return (
    <AppContext.Provider
      value={{ listings, setListings, dropdowns, setDropdowns, filters, setFilters }}
    >
      {children}
    </AppContext.Provider>
  );
};
