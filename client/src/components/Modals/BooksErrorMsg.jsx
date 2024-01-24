import React from "react";
import "./ErrorMsg.css";
import { forwardRef } from "react";
import { useLibraryContext } from "../../Context/LibraryContext";

const BooksErrorModal = forwardRef(function Dialog({ children }, ref) {
  const { booksErrorMsg, setBooksErrorMsg } = useLibraryContext();

  function closeDialog() {
    setBooksErrorMsg("");
  }

  return (
    <dialog ref={ref} className="ErrorMsg">
      <form method="dialog">
        <h4>{booksErrorMsg}</h4>
        <button className="book-error-close-dialog" onClick={closeDialog}>
          Close
        </button>
      </form>
    </dialog>
  );
});

export default BooksErrorModal;
