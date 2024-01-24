import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Crime() {
  const { crimeBooks, getCrimeBooks } = useBooksData();

  useEffect(() => {
    getCrimeBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Crime`} array={crimeBooks} />
    </section>
  );
}
