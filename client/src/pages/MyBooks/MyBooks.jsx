import React, { useEffect, useState } from "react";
import "./MyBooks.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useFairyContext } from "../../Context/FairyBooksContext";
import StarsRating from "../../components/Rating/Rating";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import { useNewBookContext } from "../../Context/NewBookContext";

export default function MyBooks() {
  const [isThereABook, setIsThereABook] = useState();
  const navigate = useNavigate();
  const { fairyBooks } = useFairyContext();
  const { currentUser } = useNewUsersContext();
  const { removeMyBook } = useNewBookContext();

  useEffect(() => {
    const myBook = fairyBooks?.findIndex(
      (book) => book.author === currentUser.name
    );
    setIsThereABook(myBook);
  }, [fairyBooks, currentUser]);

  return (
    <div className="CategoryBooksCards MyBooks">
      <div className="back-btn-container">
        <div className="back-btn" onClick={() => navigate("/")}>
          <Button variant="outline-warning">
            <ArrowBackIosIcon className="back-icon" />
            Back
          </Button>
        </div>
      </div>

      <div className="big-container">
        {isThereABook === -1 && (
          <h4 style={{ textAlign: "center", width: "100%" }}>
            You don't have any books
          </h4>
        )}

        {fairyBooks?.map((books, i) => (
          <React.Fragment key={i}>
            {books?.author === currentUser?.name && (
              <div className="container">
                <Link to={`/${books?.title}`} state={books}>
                  <img
                    src={
                      books?.img
                        ? books?.img
                        : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                    }
                    alt={books?.title}
                  />
                </Link>
                <div className="book-info">
                  <Link to={`/${books?.title}`} state={books} className="link">
                    <h6 id="title">{books?.title}</h6>
                  </Link>
                  <h6>
                    Written by
                    <span className="written-by">{books?.author}</span>
                  </h6>
                  <div className="pages-rating">
                    <h6 className="pages">{books?.content?.length} Pages</h6>
                    <div className="rating">
                      <StarsRating rate={3} />
                    </div>
                  </div>
                  <div className="desc-container">
                    <p className="description">
                      {books?.description.slice(0, 40) + " ..."}
                    </p>
                  </div>
                  <div className="btns">
                    <Link to={`/${books?.title}`} state={books}>
                      <Button variant="primary" className="info-btn">
                        More Info
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="info-btn"
                      onClick={() => removeMyBook(books?._id)}
                    >
                      Delete Book
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <a href="#home" id="go-top">
        <FaArrowUp />
      </a>
    </div>
  );
}
