import React from "react";
import BookOfTheDay from "../BooksCards/BookOfTheDay";
import HomeTitles from "../HomeTitles/HomeTitles";

export default function BookOfTheDayContainer() {
  return (
    <div className="big-book-container">
      <div className="book-of-the-day-container">
        <HomeTitles title={"Book of the day"} />

        <div className="book-of-the-day">
          <BookOfTheDay sliceStart={26} sliceEnd={27} />
        </div>
      </div>
    </div>
  );
}
