// src/context/BookContext.js
import { createContext, useContext, useState } from "react";
import booksData from "../data"; // your dummy data

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(booksData);

  const addBook = (book) => {
    const newBook = { id: books.length + 1, ...book };
    setBooks([...books, newBook]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
