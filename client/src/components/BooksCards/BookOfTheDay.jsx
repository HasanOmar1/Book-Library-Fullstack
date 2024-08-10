import { useBooksData } from "../../Context/BooksContext";
import "./BooksCards.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function BookOfTheDay() {
  const { bookOfTheDay } = useBooksData();

  return (
    <div className="BooksCards">
      <div className="big-book">
        {bookOfTheDay ? (
          <>
            <div key={bookOfTheDay._id} className="book-of-the-day-container">
              <div className="book-of-the-day-left">
                <Link
                  to={`${bookOfTheDay.volumeInfo.title.slice(0, 6)}`}
                  state={bookOfTheDay}
                >
                  <img
                    src={bookOfTheDay.volumeInfo.imageLinks?.thumbnail}
                    alt={bookOfTheDay.volumeInfo.title}
                  />
                </Link>
              </div>
              <div className="book-of-the-day-right">
                <h5>{bookOfTheDay.volumeInfo.title}</h5>
                <div className="author-category">
                  <p>
                    By: <span>{bookOfTheDay.volumeInfo.authors}</span>
                  </p>
                  <p>
                    Categories:{" "}
                    <span>{bookOfTheDay.volumeInfo.categories}</span>
                  </p>
                </div>
                <p>
                  {bookOfTheDay.volumeInfo.description.length > 300
                    ? bookOfTheDay.volumeInfo.description.slice(0, 300) + " ..."
                    : bookOfTheDay.volumeInfo.description}
                </p>

                <Link
                  to={`${bookOfTheDay.volumeInfo.title.slice(0, 6)}`}
                  state={bookOfTheDay}
                >
                  <Button variant="info" className="more-info">
                    More Info
                  </Button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>Loading Data</div>
        )}
      </div>
    </div>
  );
}
