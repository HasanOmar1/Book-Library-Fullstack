import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function History() {
  const { historyBooks, getHistoryBooks } = useBooksData();

  useEffect(() => {
    getHistoryBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`History`} array={historyBooks} />
    </section>
  );
}
