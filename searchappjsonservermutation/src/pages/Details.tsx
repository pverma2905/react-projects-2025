import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const Details = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["listing", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/listings/${id}`);
      if (!res.ok) throw new Error("Failed to fetch item");
      return res.json();
    }
  });

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
