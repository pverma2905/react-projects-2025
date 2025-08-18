import React, { useState } from "react";
import { useBooks } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const [form, setForm] = useState({ name: "", author: "", price: "" });
  const { addBook } = useBooks();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(form);
    navigate("/"); // go back to search
  };

  return (
    <>
      <h1 className=" my-4">Request Page</h1>
      <div className=" bg-black text-white d-flex justify-content-center  p-3">
        <form
          onSubmit={handleSubmit}
          className="p-4 rounded shadow w-100"
          style={{ maxWidth: "400px" }}
        >
          <div className="mb-3 row">
            <label htmlFor="name" className="col-3 col-form-label">
              Name:-
            </label>
            <div className="col-9">
              <input
                type="text"
                value={form.name}
                name="name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="author" className="col-3 col-form-label">
              Author:-
            </label>
            <div className="col-9">
              <input
                type="text"
                value={form.author}
                name="author"
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="price" className="col-3 col-form-label">
              Price:-
            </label>
            <div className="col-9">
              <input
                type="number"
                value={form.price}
                name="price"
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="form-control"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Request Book
          </button>
        </form>
      </div>
    </>
  );
};

export default Request;
