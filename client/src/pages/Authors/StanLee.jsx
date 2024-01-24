import React, { useEffect } from "react";
import "./Authors.css";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
import { useAuthorsContext } from "../../Context/AuthorsContext";

export default function StanLee() {
  const { stanLeeBooks, getStanLeeBooks } = useAuthorsContext();

  useEffect(() => {
    getStanLeeBooks();
  }, []);

  return (
    <section className="Authors">
      <BooksByCategories categoryName={"Stan Lee"} array={stanLeeBooks} />
    </section>
  );
}
