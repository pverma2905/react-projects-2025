import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useDropdown } from "../hooks/useDropdown";

export const SearchForm = () => {
  const { setFilters, filters } = useContext(AppContext);
  const [formState, setFormState] = useState(filters);
  const { data: dropdowns } = useDropdown();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <input
        placeholder="Name"
        value={formState.name || ""}
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
      />
      <select
        value={formState.category || ""}
        onChange={(e) => setFormState({ ...formState, category: e.target.value })}
      >
        <option value="">All</option>
        {dropdowns?.map((d:any) => (
          <option key={d.id} value={d.value}>{d.label}</option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

