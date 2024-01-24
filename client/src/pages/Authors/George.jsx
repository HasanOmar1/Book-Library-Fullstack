import React, { useEffect } from "react";
import "./Authors.css";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
import { useAuthorsContext } from "../../Context/AuthorsContext";

export default function George() {
  const { georgeMartinBooks, getGeorgeMartinBooks } = useAuthorsContext();

  useEffect(() => {
    getGeorgeMartinBooks();
  }, []);

  return (
    <section className="Authors">
      <BooksByCategories
        categoryName={"George R. R. Martin"}
        array={georgeMartinBooks}
      />
    </section>
  );
}
