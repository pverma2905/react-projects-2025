import { Link } from "react-router-dom";

export const Listing = ({ data }: { data: any[] }) => {
  return (
    <div className="p-4">
      {data.map((item) => (
        <div key={item.id} className="border p-2 my-2">
          <Link to={`/details/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};


