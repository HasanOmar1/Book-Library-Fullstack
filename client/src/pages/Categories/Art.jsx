import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Art() {
  const { artBooks, getArtBooks } = useBooksData();

  useEffect(() => {
    getArtBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Art`} array={artBooks} />
    </section>
  );
}
