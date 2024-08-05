import { useBooksData } from "../../../Context/BooksContext";
import "./WeeklyFeaturedBooks.css";
import { Link } from "react-router-dom";

export default function BooksCards({ title, sliceStart, sliceEnd }) {
  const { books } = useBooksData();

  return (
    <>
      <div className="weekly-featured-container ">
        <div className="weekly-featured">
          <p>{title}</p>
          <div className="books">
            <div className="BooksCards WeeklyFeaturedBooks">
              <div className="fan-favorite-container weekly-books ">
                {books.slice(sliceStart, sliceEnd).map((info) => {
                  return (
                    <Link
                      key={info?._id}
                      to={`${info?.volumeInfo?.title}`}
                      state={info}
                      className="link"
                      aria-label={`Book Title: ${info?.volumeInfo?.title} , Book Category: ${info?.volumeInfo?.categories}`}
                    >
                      <div className="book-container">
                        <img
                          src={info?.volumeInfo?.imageLinks?.thumbnail}
                          alt={info?.volumeInfo?.title}
                          aria-hidden
                        />
                        <div className="category">
                          {info?.volumeInfo?.categories}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
