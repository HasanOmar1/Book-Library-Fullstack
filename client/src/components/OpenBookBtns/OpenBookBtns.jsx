import Button from "react-bootstrap/Button";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const OpenBookBtns = ({
  book,
  handlePageChange,
  currentPageNum,
  goToPage,
  goToPageValue,
  bookContent,
  setGoToPageValue,
}) => {
  return (
    <div className="btns-container">
      <Button
        variant="primary"
        onClick={() => {
          book.current.pageFlip().flipPrev();
          handlePageChange(currentPageNum - 1);
        }}
      >
        <KeyboardDoubleArrowLeftIcon className="double-arrow-icon" />
        Previous Page
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          book.current.pageFlip().flip(0);
        }}
      >
        Start
      </Button>

      <form onSubmit={goToPage} className="go-container">
        <input
          className="goto-input"
          type="number"
          value={goToPageValue}
          min={-1}
          max={bookContent.length + 2}
          onChange={(e) => setGoToPageValue(e.target.value)}
        />
        <Button variant="success" type="submit" className="goto-button">
          Go
        </Button>
      </form>

      <Button
        className="end-btn"
        variant="secondary"
        onClick={() => {
          book.current.pageFlip().flip(bookContent.length + 3);
        }}
      >
        End
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          book.current.pageFlip().flipNext();
          handlePageChange(currentPageNum + 1);
        }}
      >
        Next Page
        <KeyboardDoubleArrowRightIcon className="double-arrow-icon" />
      </Button>
    </div>
  );
};

export default OpenBookBtns;
