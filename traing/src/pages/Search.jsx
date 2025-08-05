import { useState } from "react";
import books from "../../data.js"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const Search = () => {
 const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  );

   return (
    <div className="">
      <h1 className="text-center">Search Page</h1>
      
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or author"
        className="form-control"
      />

      {filteredBooks.length > 0 ? (
        <div  style={{ display: "flex", flexDirection: "row", width: "100%", width: "100%",  gap: "8px", flexWrap: "wrap" }}>
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              style={{ backgroundColor:"black", color: "white" , padding:"4px 8px", margin:"8px 0", borderRadius:"4px" }} className="row" data-testid="book-item"
            >
              <p data-testid={`name-${book.name}`}><strong>Name:</strong> {book.name}</p>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Price:</strong> ${book.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-8">
          <p>No books found.</p>
          <button
            onClick={() => navigate("/request")}
            className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
          >
            Request Book
          </button>
        </div>
      )}
    </div>
  );

}

export default Search