import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { searchSchema } from '../types/searchTypes';
import type { SearchFormData } from '../types/searchTypes';
import { useSearchContext } from '../contexts/SearchContext';

const SearchForm = ({ onSearch }: { onSearch: () => void }) => {
  const { filters, setFilters } = useSearchContext();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<SearchFormData>({
    defaultValues: filters,
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = (data: SearchFormData) => {
    setFilters(data);
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-x-2 mb-4">
      <input {...register('keyword')} placeholder="Keyword" />
      <input {...register('category')} placeholder="Category" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
