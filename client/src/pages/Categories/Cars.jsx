import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Cars() {
  const { carsBooks, getCarsBooks } = useBooksData();

  useEffect(() => {
    getCarsBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Cars`} array={carsBooks} />
    </section>
  );
}
