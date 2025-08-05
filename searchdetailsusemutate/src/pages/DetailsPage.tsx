import { useParams, useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { searchResults } = useSearchContext();

  const item = searchResults?.find((i) => i.id === id);
  if (!item) return <p>No Data Found</p>;

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h2>Form</h2>
        <p>Name: {item.name}</p>
        <p>Age: {item.age}</p>
      </div>

      <div>
        <h2>Details</h2>
        <pre>{JSON.stringify(item, null, 2)}</pre>
      </div>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default DetailsPage;
