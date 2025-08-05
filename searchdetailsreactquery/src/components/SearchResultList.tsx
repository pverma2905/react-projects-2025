import type { SearchResultItem } from '../types/searchTypes';
import { useSearchContext } from '../contexts/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchResultList = ({ results }: { results: SearchResultItem[] }) => {
  const { setSelectedItem } = useSearchContext();
  const navigate = useNavigate();

  return (
    <div>
      {results.map((item) => (
        <div key={item.id} onClick={() => {
          setSelectedItem(item);
          navigate(`/details/${item.id}`);
        }} className="cursor-pointer border p-2 mb-2">
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
