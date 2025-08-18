import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../context/BookContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { books } = useBooks();

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center">Search Page</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or author"
        className="form-control"
      />

      {filteredBooks.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-between gap-4 m-5">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="col-4 bg-black text-white text-center p-4 mt-4 rounded"
              data-testid="book-item"
            >
              <h4 data-testid={`name-${book.name}`}>{book.name}</h4>
              <p>
                <strong>Author Name:</strong> {book.author}
              </p>
              <p>
                <strong>Price:</strong> ${book.price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/request")}
            className="btn btn-primary"
          >
            Request Book
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
