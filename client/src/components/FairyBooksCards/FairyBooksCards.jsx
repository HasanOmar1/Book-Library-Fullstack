import React from "react";
import { Link } from "react-router-dom";
import { useFairyContext } from "../../Context/FairyBooksContext";

export default function FairyBooksCards() {
  const { fairyBooks } = useFairyContext();
  return (
    <div className="BooksCards WeeklyFeaturedBooks">
      <div className="fan-favorite-container weekly-books fairy-books ">
        {fairyBooks?.slice(0, 11).map((info) => {
          return (
            <Link
              key={info?._id}
              to={`${info?.title}`}
              state={info}
              className="link"
            >
              <div className="book-container">
                <img
                  src={
                    info?.img
                      ? info?.img
                      : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                  }
                  alt={info?.title}
                />
                <div className="category">{info?.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
