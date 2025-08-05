import { createContext, useContext, useState } from 'react';
import type { SearchFormData, SearchResultItem } from '../types/searchTypes';
import  type { ReactNode } from 'react';

type SearchContextType = {
  filters: SearchFormData;
  setFilters: (filters: SearchFormData) => void;
  selectedItem: SearchResultItem | null;
  setSelectedItem: (item: SearchResultItem) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<SearchFormData>({});
  const [selectedItem, setSelectedItem] = useState<SearchResultItem | null>(null);

  return (
    <SearchContext.Provider value={{ filters, setFilters, selectedItem, setSelectedItem }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('useSearchContext must be used inside Provider');
  return context;
};
