import { useEffect, useState } from "react";
import { useSearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const allData = [
  { id: 1, title: "Apple", category: "Fruit", date: "2025-08-10" },
  { id: 2, title: "Carrot", category: "Vegetable", date: "2025-08-11" },
  { id: 3, title: "Banana", category: "Fruit", date: "2025-08-12" }
];

export default function HomePage() {
  const { formData, setFormData, listData, setListData } = useSearchContext();
  const [localForm, setLocalForm] = useState(formData);
  const navigate = useNavigate();

  useEffect(() => {
    if (listData.length === 0) {
      setListData(allData); // Load default data on first visit only
    }
  }, []);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
    setLocalForm({ ...localForm, [name]: e.target.checked });
  } else {
    setLocalForm({ ...localForm, [name]: value });
  }
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(localForm);
    const filtered = allData.filter((item) => {
      return (
        (localForm.keyword === "" ||
          item.title.toLowerCase().includes(localForm.keyword.toLowerCase())) &&
        (localForm.category === "" || item.category === localForm.category) &&
        (localForm.date === "" || item.date === localForm.date) &&
        (!localForm.agree || item.category === "Fruit") // example checkbox filter
      );
    });
    setListData(filtered);
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {/* Left: Form */}
      <form onSubmit={handleSubmit} style={{ flex: 1 }}>
        <input
          type="text"
          name="keyword"
          placeholder="Search..."
          value={localForm.keyword}
          onChange={handleChange}
        />
        <br />
        <input
          type="date"
          name="date"
          value={localForm.date}
          onChange={handleChange}
        />
        <br />
        <select name="category" value={localForm.category} onChange={handleChange}>
          <option value="">-- Select Category --</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={localForm.agree}
            onChange={handleChange}
          />
          Only show fruits
        </label>
        <br />
        <textarea
          name="notes"
          placeholder="Notes..."
          value={localForm.notes}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Search</button>
      </form>

      {/* Right: Listing */}
      <div style={{ flex: 2 }}>
        {listData.map((item) => (
          <div
            key={item.id}
            style={{
              cursor: "pointer",
              padding: "8px",
              borderBottom: "1px solid #ccc"
            }}
            onClick={() => navigate(`/details/${item.id}`)}
          >
            {item.title} — {item.category} ({item.date})
          </div>
        ))}
      </div>
    </div>
  );
}
