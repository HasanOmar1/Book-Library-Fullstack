import React, { useEffect } from "react";
import "./Categories.css";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
import { useFairyContext } from "../../Context/FairyBooksContext";

export default function BooksByPeople() {
  const { fairyBooks, getFairyBooks } = useFairyContext();

  useEffect(() => {
    getFairyBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories
        categoryName={`Added By People`}
        array={fairyBooks?.slice(11)}
      />
    </section>
  );
}
