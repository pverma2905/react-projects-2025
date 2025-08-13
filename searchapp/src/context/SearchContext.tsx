import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type SearchFormData = {
  keyword: string;
  date: string; // ISO format
  category: string;
  agree: boolean;
  notes: string;
};

type ListItem = {
  id: number;
  title: string;
  category: string;
  date: string;
};

type SearchContextType = {
  formData: SearchFormData;
  setFormData: (data: SearchFormData) => void;
  listData: ListItem[];
  setListData: (data: ListItem[]) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<SearchFormData>({
    keyword: "",
    date: "",
    category: "",
    agree: false,
    notes: ""
  });
  const [listData, setListData] = useState<ListItem[]>([]);

  return (
    <SearchContext.Provider value={{ formData, setFormData, listData, setListData }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearchContext must be used inside SearchProvider");
  return ctx;
};
