import React, { useEffect } from "react";
import "./Authors.css";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
import { useAuthorsContext } from "../../Context/AuthorsContext";

export default function Rowling() {
  const { rowlingBooks, getRowlingBooks } = useAuthorsContext();

  useEffect(() => {
    getRowlingBooks();
  }, []);

  return (
    <section className="Authors">
      <BooksByCategories categoryName={"J. K. Rowling"} array={rowlingBooks} />
    </section>
  );
}
