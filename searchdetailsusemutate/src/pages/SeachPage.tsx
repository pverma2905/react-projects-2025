import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { postSearchApi, searchSchema, type SearchPayload } from "../api/searchApi";
import { useSearchContext } from "../context/SearchContext";

const SearchPage = () => {
  const navigate = useNavigate();
  const { searchPayload, setSearchPayload, searchResults, setSearchResults } =
    useSearchContext();

  const searchMutation = useMutation({
    mutationFn: postSearchApi,
    onSuccess: (data) => setSearchResults(data),
  });

  useEffect(() => {
    if (!searchResults) {
      const defaultPayload: SearchPayload = { keyword: "" };
      setSearchPayload(defaultPayload);
      searchMutation.mutate(defaultPayload);
    }
  }, []);

  const handleCustomSearch = () => {
    const payload: SearchPayload = { keyword: "custom" };
    const result = searchSchema.safeParse(payload);
    if (!result.success) return alert("Invalid search input");
    setSearchPayload(payload);
    searchMutation.mutate(payload);
  };

  return (
    <div>
      <h2>Search Page</h2>
      <button onClick={handleCustomSearch}>Custom Search</button>

      {searchMutation.isPending && <p>Loading...</p>}
      {searchResults?.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid #ccc", padding: "8px", margin: "8px" }}
          onClick={() => navigate(`/details/${user.id}`)}
        >
          {user.name} (Age: {user.age})
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
