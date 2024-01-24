import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Horror() {
  const { horrorBooks, getHorrorBooks } = useBooksData();

  useEffect(() => {
    getHorrorBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Horror`} array={horrorBooks} />
    </section>
  );
}
