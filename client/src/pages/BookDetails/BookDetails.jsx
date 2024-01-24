import React, { useEffect, useRef, useState } from "react";
import "./BookDetails.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StarsRating from "../../components/Rating/Rating";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLibraryContext } from "../../Context/LibraryContext";
import BooksErrorModal from "../../components/Modals/BooksErrorMsg";
import { useCommentsContext } from "../../Context/CommentsContext";
import { useNewUsersContext } from "../../Context/NewUsersContext";

export default function BookDetails() {
  const { addBookToLibrary, booksErrorMsg, addFairyBookToLibrary } =
    useLibraryContext();
  const {
    createComment,
    comments,
    getBooksByName,
    removeComment,
    getFairyBooksByName,
  } = useCommentsContext();
  const { state } = useLocation();
  const newState = state?.volumeInfo;
  const navigate = useNavigate();
  const [commentValue, setCommentValue] = useState("");

  const { currentUser } = useNewUsersContext();

  // console.log(currentUser);
  // console.log(state);
  const errorRef = useRef();

  const loggedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(loggedUser);

  if (booksErrorMsg) {
    errorRef?.current?.showModal();
  }

  function addToLibraryFunction() {
    if (state?.volumeInfo) {
      addBookToLibrary(state?._id);
    }
    if (state?.content) {
      addFairyBookToLibrary(state?._id);
    }
  }

  function handleComments(e) {
    e.preventDefault();
    if (state?.volumeInfo) {
      createComment({
        bookName: state?._id,
        comment: commentValue,
      });
    }

    if (state?.content) {
      createComment({
        fairyBookName: state?._id,
        comment: commentValue,
      });
    }

    setCommentValue("");
  }

  useEffect(() => {
    getBooksByName(state?.volumeInfo?.title);
    getFairyBooksByName(state?.title);
  }, []);

  return (
    <main className="BookDetails">
      <div className="back-btn-container">
        <div className="back-btn" onClick={() => navigate(-1)}>
          <Button variant="outline-warning">
            <ArrowBackIosIcon className="back-icon" />
            Back
          </Button>
        </div>
      </div>
      <div className="info-container">
        <div className="img-container">
          <img
            src={
              newState?.imageLinks?.thumbnail
                ? newState?.imageLinks?.thumbnail
                : state?.img
                ? state?.img
                : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
            }
            alt={newState?.title ? newState?.title : state?.title}
          />
        </div>
        <div className="more-info-container">
          <h4>{newState?.title ? newState?.title : state?.title}</h4>
          <div className="mid-info">
            <h5>
              {newState ? (
                <>
                  Written by
                  <span className="important-info">
                    {newState?.authors.join(" , ")}
                  </span>
                </>
              ) : (
                <>
                  Written by
                  <span className="important-info">{state?.author}</span>
                </>
              )}
            </h5>
            <h5>
              {newState ? (
                <>
                  Published By
                  <span className="important-info">{newState?.publisher}</span>
                </>
              ) : (
                ""
              )}
            </h5>
            <h5>
              {newState ? (
                <>
                  Published Date
                  <span className="important-info">
                    {newState?.publishedDate.slice(0, 10)}
                  </span>
                </>
              ) : (
                ""
              )}
            </h5>
          </div>
          <div className="row-info">
            <div className="small-p">
              <h5>
                {newState ? (
                  <>
                    <span>{newState?.categories}</span>
                  </>
                ) : (
                  <span>{state?.categories}</span>
                )}
              </h5>
              <p>Categories</p>
            </div>

            <hr className="divider" />

            <div className="small-p">
              <h5>
                <span>
                  {newState?.pageCount
                    ? newState?.pageCount
                    : state?.content?.length
                    ? state?.content?.length
                    : "UnKnown"}
                </span>
              </h5>
              <p>Pages</p>
            </div>

            <hr className="divider" />

            <div className="small-p">
              {newState ? (
                <>
                  <span>{newState?.maturityRating.split("_").join(" ")}</span>
                </>
              ) : (
                "Kids"
              )}
              <h5></h5>
              <p>Maturity Rating</p>
            </div>
          </div>
          <div className="rating">
            <StarsRating
              rate={newState?.averageRating ? newState?.averageRating : 3}
            />
          </div>
          <div className="buttons">
            <Link
              to={"/reading-book"}
              state={state?.volumeInfo ? state?.volumeInfo : state}
            >
              <Button variant="success" className="read-me">
                Read me
              </Button>
            </Link>
            <Button variant="primary" onClick={addToLibraryFunction}>
              Add to Library
            </Button>
          </div>
        </div>
      </div>
      <div className="description">
        <h3>About</h3>
        <p>
          {newState?.description ? newState?.description : state?.description}
        </p>
      </div>

      <div className="read-comments-container">
        <div className="comments-section">
          <h4>Comments Section</h4>
          {parsedUser ? (
            <>
              <div className="add-comment">
                <form onSubmit={handleComments} className="submit-comment">
                  <div className="comment-container">
                    <input
                      required
                      type="text"
                      value={commentValue}
                      maxLength={100}
                      onChange={(e) => setCommentValue(e.target.value)}
                    />
                    <button type="submit">Comment</button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <p>Login to comment</p>
          )}

          <div className="read-comment-box">
            {comments?.map((data) => {
              // console.log(data);
              return (
                <div className="read-comment" key={data?._id}>
                  <p
                    onClick={() => removeComment(data?._id)}
                    className={
                      data?.user?.name === currentUser?.name
                        ? "remove-comment"
                        : "hide"
                    }
                  >
                    Delete
                  </p>
                  <h5>
                    <span className="username">
                      {data?.user?.name ? data?.user?.name : "Deleted User"}{" "}
                    </span>{" "}
                    commented:
                  </h5>
                  <p className="comment">{data?.comment}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BooksErrorModal ref={errorRef} />
    </main>
  );
}
