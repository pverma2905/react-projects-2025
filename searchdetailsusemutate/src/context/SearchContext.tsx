import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { SearchPayload } from "../api/searchApi";

interface SearchContextType {
  searchPayload: SearchPayload | null;
  setSearchPayload: (payload: SearchPayload) => void;
  searchResults: any[] | null;
  setSearchResults: (results: any[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchPayload, setSearchPayload] = useState<SearchPayload | null>(null);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);

  return (
    <SearchContext.Provider
      value={{ searchPayload, setSearchPayload, searchResults, setSearchResults }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearchContext must be used inside SearchProvider");
  return context;
};
