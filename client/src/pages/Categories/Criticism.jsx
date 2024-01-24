import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Criticism() {
  const { criticismBooks, getCriticismBooks } = useBooksData();

  useEffect(() => {
    getCriticismBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Criticism`} array={criticismBooks} />
    </section>
  );
}
