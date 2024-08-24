import { Link } from "react-router-dom";
import StarsRating from "../Rating/Rating";
import Button from "react-bootstrap/Button";

const BookInfo = ({ newState, state, addToLibraryFunction }) => {
  return (
    <div className="more-info-container">
      <h4>{newState?.title ? newState?.title : state?.title}</h4>
      <div className="mid-info">
        <h5>
          Written by
          <span className="important-info">
            {newState?.authors.join(" , ") ?? state?.author}
          </span>
        </h5>
        <h5>
          Published By
          <span className="important-info">
            {newState?.publisher ? newState?.publisher : state?.author}
          </span>
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
            <span>
              {newState?.categories ? newState?.categories : state?.categories}
            </span>
          </h5>
          <p>Categories</p>
        </div>

        <hr className="divider" />

        <div className="small-p">
          <h5>
            <span>
              {newState?.pageCount ??
                (state?.content
                  ? Math.ceil(state?.content?.join("").length / 702)
                  : 211)}
            </span>
          </h5>
          <p>Pages</p>
        </div>

        <hr className="divider" />

        <div className="small-p">
          <span>
            {newState ? newState?.maturityRating.split("_").join(" ") : "Kids"}
          </span>

          <h5></h5>
          <p>Maturity Rating</p>
        </div>
      </div>
      <div className="rating">
        <StarsRating rate={newState?.averageRating ?? 3} />
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
  );
};

export default BookInfo;
