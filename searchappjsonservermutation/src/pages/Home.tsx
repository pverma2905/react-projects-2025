import { useEffect, useState } from "react";
import { useListingContext } from "../context/ListingContext";
import { useDropdown } from "../hooks/useDropdown";
import { useListing } from "../hooks/useListing";
import { Link } from "react-router-dom";

export const Home = () => {
  const { filters, setFilters, listings } = useListingContext();
  const { data: categories } = useDropdown();
  const listingMutation = useListing();

  const [formValues, setFormValues] = useState(filters);

  useEffect(() => {
    if (listings.length === 0) {
      listingMutation.mutate(filters);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(formValues);
    listingMutation.mutate(formValues);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Form */}
      <form onSubmit={handleSubmit} style={{ width: "250px" }}>
        <input
          type="text"
          placeholder="Keyword"
          value={formValues.keyword}
          onChange={(e) => setFormValues({ ...formValues, keyword: e.target.value })}
        />
        <select
          value={formValues.categoryId}
          onChange={(e) => setFormValues({ ...formValues, categoryId: e.target.value })}
        >
          <option value="">All Categories</option>
          {categories?.map((cat: any) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>

      {/* Listing */}
      <div>
        {listings.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <Link to={`/details/${item.id}`}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
