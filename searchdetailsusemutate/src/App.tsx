import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SeachPage";
import DetailsPage from "./pages/DetailsPage";
import { SearchProvider } from "./context/SearchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </Router>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;