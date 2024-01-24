import React, { useEffect, useState } from "react";
import { useBooksData } from "../../Context/BooksContext";
import "./BooksCards.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function BookOfTheDay({ sliceStart, sliceEnd }) {
  const { books, fetchBooks } = useBooksData();

  return (
    <div className="BooksCards">
      <div className="big-book">
        {books.slice(sliceStart, sliceEnd).map((info) => {
          return (
            <div key={info?._id} className="book-of-the-day-container">
              <div className="book-of-the-day-left">
                <Link
                  to={`${info?.volumeInfo?.title.slice(0, 6)}`}
                  state={info}
                >
                  <img
                    src={info?.volumeInfo?.imageLinks?.thumbnail}
                    alt={info?.volumeInfo?.title}
                  />
                </Link>
              </div>
              <div className="book-of-the-day-right">
                <h5>{info?.volumeInfo?.title}</h5>
                <div className="author-category">
                  <p>
                    By: <span>{info?.volumeInfo?.authors}</span>
                  </p>
                  <p>
                    Categories: <span>{info?.volumeInfo?.categories}</span>
                  </p>
                </div>
                <p>{info?.volumeInfo?.description}</p>
                <Link
                  to={`${info?.volumeInfo?.title.slice(0, 6)}`}
                  state={info}
                >
                  <Button variant="info" className="more-info">
                    More Info
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
