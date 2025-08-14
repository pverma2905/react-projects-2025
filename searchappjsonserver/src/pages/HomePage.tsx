import { SearchForm } from "../components/SearchForm";
import { Listing } from "../components/Listing";
import { useListing } from "../hooks/useListing";

export const HomePage = () => {
  const { data, isLoading } = useListing();

  return (
    <div className="flex">
      <div className="w-1/3">
        <SearchForm />
      </div>
      <div className="w-2/3">
        {isLoading ? <p>Loading...</p> : <Listing data={data || []} />}
      </div>
    </div>
  );
};

