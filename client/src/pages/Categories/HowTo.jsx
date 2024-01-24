import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function HowToBooks() {
  const { howToBooks, getHowToBooks } = useBooksData();

  useEffect(() => {
    getHowToBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Educational`} array={howToBooks} />
    </section>
  );
}
