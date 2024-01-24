import React, { useEffect } from "react";
import "./Authors.css";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
import { useAuthorsContext } from "../../Context/AuthorsContext";

export default function StephenKing() {
  const { stephenKingBooks, getStephenKingBooks } = useAuthorsContext();

  useEffect(() => {
    getStephenKingBooks();
  }, []);

  return (
    <section className="Authors">
      <BooksByCategories
        categoryName={"Stephen King"}
        array={stephenKingBooks}
      />
    </section>
  );
}
