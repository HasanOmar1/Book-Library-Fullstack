import React, { useEffect, useState } from "react";
import "./CategoryBooks.css";
import StarsRating from "../../Rating/Rating";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function BooksByCategories({ categoryName, array }) {
  const navigate = useNavigate(-1);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    if (array?.length === 0) {
      setTimeout(() => {
        setIsError("No books found");
      }, 1300);
    }
  }, [array]);

  return (
    <div className="CategoryBooksCards">
      <div className="back-btn-container">
        <div className="back-btn" onClick={() => navigate("/")}>
          <Button variant="outline-warning">
            <ArrowBackIosIcon className="back-icon" />
            Back
          </Button>
        </div>
      </div>
      <h4 className="category-name" id="home">
        Collection of {categoryName} Books
      </h4>
      <div className="big-container">
        {array?.length === 0 && <h4 className="middle">{isError}</h4>}
        {array?.map((books, i) => {
          return (
            <div className="container" key={i}>
              <Link
                to={`/${
                  books?.volumeInfo?.title
                    ? books?.volumeInfo?.title
                    : books?.title
                }`}
                state={books}
              >
                <img
                  src={
                    books?.volumeInfo?.imageLinks?.thumbnail
                      ? books?.volumeInfo?.imageLinks?.thumbnail
                      : books?.img
                      ? books?.img
                      : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                  }
                  alt={
                    books?.volumeInfo?.title
                      ? books?.volumeInfo?.title
                      : books?.title
                  }
                />
              </Link>
              <div className="book-info">
                <Link
                  to={`/${
                    books?.volumeInfo?.title
                      ? books?.volumeInfo?.title
                      : books?.title
                  }`}
                  state={books}
                  className="link"
                >
                  <h6 id="title">
                    {books?.volumeInfo?.title
                      ? books?.volumeInfo?.title
                      : books?.title}
                  </h6>
                </Link>
                <h6>
                  Written by
                  <span className="written-by">
                    {books?.volumeInfo?.authors.slice(0, 2).join(", ")
                      ? books?.volumeInfo?.authors.slice(0, 2).join(", ")
                      : books?.author}
                  </span>
                </h6>
                <div className="pages-rating">
                  <h6 className="pages">
                    {books?.volumeInfo?.pageCount
                      ? books?.volumeInfo?.pageCount
                      : books?.content?.length
                      ? books?.content?.length
                      : 211}{" "}
                    Pages
                  </h6>
                  <div className="rating">
                    <StarsRating
                      rate={
                        books?.volumeInfo?.averageRating
                          ? books?.volumeInfo?.averageRating
                          : 3
                      }
                    />
                  </div>
                </div>
                <div className="desc-container">
                  <p className="description">
                    {books?.volumeInfo?.description.slice(0, 121)
                      ? books?.volumeInfo?.description.slice(0, 121) + " ..."
                      : books?.description.slice(0, 121) + " ..."}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#home" id="go-top">
        <FaArrowUp />
      </a>
    </div>
  );
}
