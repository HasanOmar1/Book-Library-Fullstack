import { useEffect, useRef, useState } from "react";
import "./BookDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLibraryContext } from "../../Context/LibraryContext";
import BooksErrorModal from "../../components/Modals/BooksErrorMsg";
import { useCommentsContext } from "../../Context/CommentsContext";
import BookComments from "../../components/BookComments/BookComments";
import BookInfo from "../../components/BookInfo/BookInfo";

const noImg =
  "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

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

  const errorRef = useRef();

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
    if (state?.volumeInfo) {
      getBooksByName(state?.volumeInfo?.title);
    }

    if (state?.content) {
      getFairyBooksByName(state?.title);
    }
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
                : noImg
            }
            alt={newState?.title ? newState?.title : state?.title}
          />
        </div>
        <BookInfo
          addToLibraryFunction={addToLibraryFunction}
          newState={newState}
          state={state}
        />
      </div>
      <div className="description">
        <h3>About</h3>
        <p>
          {newState?.description ? newState?.description : state?.description}
        </p>
      </div>

      <BookComments
        commentValue={commentValue}
        comments={comments}
        handleComments={handleComments}
        removeComment={removeComment}
        setCommentValue={setCommentValue}
      />

      <BooksErrorModal ref={errorRef} />
    </main>
  );
}
