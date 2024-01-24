import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";

export default function Cooking() {
  const { cookingBooks, getCookingBooks } = useBooksData();

  useEffect(() => {
    getCookingBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Cooking`} array={cookingBooks} />
    </section>
  );
}
