import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useSearchContext } from '../contexts/SearchContext';
import { getItemDetails } from '../api/SearchApi';

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedItem } = useSearchContext();

  const { data } = useQuery({
    queryKey: ['details', id],
    queryFn: () => getItemDetails(id!),
  });

  return (
    <div className="flex gap-4 p-4">
      <form className="w-1/2 border p-4">
        <h3>Selected Values</h3>
        <input readOnly value={selectedItem?.title || ''} />
      </form>
      <div className="w-1/2 border p-4">
        <h3>Details</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <button onClick={() => navigate(-1)} className="absolute top-4 right-4">Back</button>
    </div>
  );
};

export default DetailsPage;
