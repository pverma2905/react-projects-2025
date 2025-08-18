// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Request from "./pages/Request";
import { BookProvider } from "./context/BookContext";

function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
