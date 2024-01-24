import React, { useRef } from "react";
import "./AddBook.css";
import { useNewBookContext } from "../../Context/NewBookContext";
import { useNewUsersContext } from "../../Context/NewUsersContext";

export default function AddBook() {
  const { currentUser } = useNewUsersContext();
  const { addNewBook } = useNewBookContext();

  const titleRef = useRef();
  const contentRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();
  const coverRef = useRef();

  function handleAddBook(e) {
    e.preventDefault();
    addNewBook({
      author: currentUser?.name,
      title: titleRef?.current?.value,
      content: [contentRef?.current?.value],
      description: descRef?.current?.value,
      img: coverRef?.current?.value,
      categories: categoryRef?.current?.value,
    });

    titleRef.current.value = "";
    contentRef.current.value = "";
    descRef.current.value = "";
    coverRef.current.value = "";
    categoryRef.current.value = "";
  }

  return (
    <div className="AddBook">
      <div className="all-container">
        <div className="form-container">
          <h5>Add your own books to our site</h5>
          <p className="extra-info">
            You will find your added books in the{" "}
            <span className="info">Books Added By People </span>
            category
          </p>
          <form onSubmit={handleAddBook}>
            <input
              type="text"
              placeholder="Book Title"
              ref={titleRef}
              required
              maxLength={20}
            />
            <input
              type="text"
              placeholder="Book Description"
              ref={descRef}
              required
              maxLength={80}
            />
            <input
              type="text"
              placeholder="Book Category"
              ref={categoryRef}
              required
              maxLength={20}
            />
            <input
              type="text"
              placeholder="Book Cover [ Link ] (optional)"
              ref={coverRef}
            />

            <textarea
              required
              type="text"
              placeholder="Book Content"
              ref={contentRef}
              cols="50"
              rows="4"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
