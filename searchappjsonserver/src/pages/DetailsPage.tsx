import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const DetailsPage = () => {
  const { id } = useParams();
  const { listings } = useContext(AppContext);
  const item = listings?.find((l) => l.id === Number(id));

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};


