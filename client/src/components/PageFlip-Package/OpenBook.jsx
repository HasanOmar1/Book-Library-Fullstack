import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./OpenBook.css";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import messages from "./data";

const PageCover = React.forwardRef(({ children }, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef(({ pageNumber, children }, ref) => {
  const { state } = useLocation();
  return (
    <div className="page" ref={ref}>
      <h5 className="page-header">{state?.title}</h5>
      <hr />
      <div>{children}</div>
      <div className="page-number">{pageNumber}</div>
    </div>
  );
});

function OpenBook() {
  const book = useRef();
  const { state } = useLocation();
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [goToPageValue, setGoToPageValue] = useState(0);

  // console.log(state);

  function handlePageChange(pageNum) {
    setCurrentPageNum(pageNum);
  }

  function goToPage(e) {
    e.preventDefault();
    book.current.pageFlip().flip(+goToPageValue + 1);
  }

  const getPara = messages.map((para) => para.p);

  let bookContent = [];

  function sliceParas() {
    let start = 0;
    let end = 702;

    let paraText = state?.content ? state?.content.join("") : getPara.join("");

    while (start < paraText.length) {
      // Find the nearest space or newline character before the end index
      while (
        end < paraText.length &&
        paraText[end] !== " " &&
        paraText[end] !== "\n"
      ) {
        end++;
      }

      // If the end index is at the end of the text, break the loop
      if (end === paraText.length) {
        break;
      }

      // Slice the paragraphs and push into bookContent
      bookContent.push(paraText.slice(start, end));

      // Update the start index for the next slice
      start = end;

      // Adjust the end index for the next iteration
      end = start + 702;
    }
  }

  sliceParas();

  const [flipPageWidth, setFlipPageWidth] = useState("");
  const [flipPageHeight, setFlipPageHeight] = useState("");

  useEffect(() => {
    if (window.innerWidth > 1450) {
      setFlipPageWidth("500");
    } else if (window.innerWidth > 1300 && window.innerWidth < 1440) {
      setFlipPageWidth("400");
    } else {
      setFlipPageWidth("200");
    }

    if (window.innerWidth > 1450) {
      setFlipPageHeight("650");
    } else if (window.innerWidth > 1300 && window.innerWidth < 1440) {
      setFlipPageHeight("600");
    } else {
      setFlipPageHeight("600");
    }
  }, []);

  return (
    <section className="read-book">
      <div>
        <HTMLFlipBook
          width={flipPageWidth}
          height={flipPageHeight}
          showCover={true}
          flippingTime={800}
          maxShadowOpacity={1}
          className="album-web"
          ref={book}
        >
          <PageCover>
            <img
              src={
                state?.imageLinks?.thumbnail.replace("zoom=1", "zoom=6")
                  ? state?.imageLinks?.thumbnail.replace("zoom=1", "zoom=6")
                  : state?.img
                  ? state?.img
                  : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
              }
              alt={state?.title}
            />
          </PageCover>
          <PageCover></PageCover>

          {bookContent.map((para, i) => {
            const pageNum = i + 1;
            return (
              <Page key={i} pageNumber={pageNum}>
                <p>{bookContent[i]}</p>
              </Page>
            );
          })}

          <PageCover></PageCover>
          <PageCover>
            <div className="cover-title">The End</div>
          </PageCover>
        </HTMLFlipBook>
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
      </div>
    </section>
  );
}

export default OpenBook;
