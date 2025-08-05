import axios from 'axios';
import type { SearchFormData, SearchResultItem, ItemDetails } from '../types/searchTypes';

export const postSearch = async (filters: SearchFormData): Promise<SearchResultItem[]> => {
  const response = await axios.post('/api/search', filters);
  return response.data; // Ensure API returns an array of SearchResultItem
};

export const getItemDetails = async (id: string): Promise<ItemDetails> => {
  const response = await axios.get(`/api/details/${id}`);
  return response.data; // Ensure this matches ItemDetails shape
};
