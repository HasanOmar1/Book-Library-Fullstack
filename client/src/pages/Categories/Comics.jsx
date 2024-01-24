import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Comics() {
  const { comicsBooks, getComicsBooks } = useBooksData();

  useEffect(() => {
    getComicsBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Comics`} array={comicsBooks} />
    </section>
  );
}
