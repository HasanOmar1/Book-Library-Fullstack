import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Adventure() {
  const { adventureBooks, getAdventureBooks } = useBooksData();

  useEffect(() => {
    getAdventureBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Adventure`} array={adventureBooks} />
    </section>
  );
}
