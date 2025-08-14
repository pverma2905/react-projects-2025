export interface ListingItem {
  id: number;
  name: string;
  category: string;
  date: string;
  checked: boolean;
  description: string;
}

export interface SearchFilters {
  searchText?: string;
  category?: string;
  date?: string;
  active?: boolean;
  description?: string;
}

export interface DropdownItem{
  id:number,
  label:string,
  value:string
}
