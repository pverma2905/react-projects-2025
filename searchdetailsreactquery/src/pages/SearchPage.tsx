import { useEffect } from 'react';
import { useSearchContext } from '../contexts/SearchContext';
import { useQuery } from '@tanstack/react-query';
import { postSearch } from '../api/SearchApi';
import SearchForm from '../components/SearchForm';
import SearchResultList from '../components/SearchResultList';

const SearchPage = () => {
  const { filters } = useSearchContext();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['searchResults', filters],
    queryFn: () => postSearch(filters),
    enabled: true,
    staleTime: Infinity,
    //cacheTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return (
    <div className="p-4">
      <SearchForm onSearch={refetch} />
      {isLoading ? <p>Loading...</p> : <SearchResultList results={data || []} />}
    </div>
  );
};

export default SearchPage;
