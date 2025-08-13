import { useParams, useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { listData } = useSearchContext();

  const item = listData.find((i) => i.id === Number(id));

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h2>{item.title}</h2>
      <p>Category: {item.category}</p>
      <p>Date: {item.date}</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}
