import React, { useEffect, useState } from "react";
import { useBooksData } from "../../Context/BooksContext";
import "./BooksCards.css";
import { Link } from "react-router-dom";

export default function BooksCards({ sliceStart, sliceEnd }) {
  const { books, fetchBooks } = useBooksData();

  return (
    <div className="BooksCards">
      <div className="fan-favorite-container">
        {books.slice(sliceStart, sliceEnd).map((info) => {
          return (
            <Link
              key={info?._id}
              to={`${info?.volumeInfo?.title}`}
              state={info}
            >
              <div className="book-container">
                <img
                  src={info?.volumeInfo?.imageLinks?.thumbnail}
                  alt={info?.volumeInfo?.title}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
