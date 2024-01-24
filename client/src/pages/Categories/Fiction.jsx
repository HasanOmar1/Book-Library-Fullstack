import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Fiction() {
  const { fictionBooks, getFictionBooks } = useBooksData();

  useEffect(() => {
    getFictionBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Fiction`} array={fictionBooks} />
    </section>
  );
}
