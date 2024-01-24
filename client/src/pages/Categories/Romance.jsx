import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Romance() {
  const { romanceBooks, getRomanceBooks } = useBooksData();

  useEffect(() => {
    getRomanceBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Romance`} array={romanceBooks} />
    </section>
  );
}
