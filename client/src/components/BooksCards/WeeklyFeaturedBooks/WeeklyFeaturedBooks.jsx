import React, { useEffect, useState } from "react";
import { useBooksData } from "../../../Context/BooksContext";
import "./WeeklyFeaturedBooks.css";
import { Link } from "react-router-dom";

export default function BooksCards({ sliceStart, sliceEnd }) {
  const { books, fetchBooks } = useBooksData();

  return (
    <div className="BooksCards WeeklyFeaturedBooks">
      <div className="fan-favorite-container weekly-books ">
        {books.slice(sliceStart, sliceEnd).map((info) => {
          return (
            <Link
              key={info?._id}
              to={`${info?.volumeInfo?.title}`}
              state={info}
              className="link"
            >
              <div className="book-container">
                <img
                  src={info?.volumeInfo?.imageLinks?.thumbnail}
                  alt={info?.volumeInfo?.title}
                />
                <div className="category">{info?.volumeInfo?.categories}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
