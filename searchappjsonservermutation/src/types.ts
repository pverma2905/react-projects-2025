export type ListingItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  checked: boolean;
  description: string;
};

export type DropdownItem = {
  id: number;
  label: string;
  value: string;
};

export type SearchParams = {
  keyword: string;
  category: string;
  date: string;
  checked: boolean;
  description: string;
};
