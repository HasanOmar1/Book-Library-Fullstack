import React from "react";
import "./ErrorMsg.css";
import { forwardRef } from "react";
import { useNewUsersContext } from "../../Context/NewUsersContext";

const ErrorModal = forwardRef(function Dialog({ children }, ref) {
  const { errorMsg, setErrorMsg } = useNewUsersContext();

  function closeDialog() {
    setErrorMsg("");
  }

  return (
    <dialog ref={ref} className="ErrorMsg">
      <form method="dialog">
        <h4>{errorMsg}</h4>
        <button className="close-dialog" onClick={closeDialog}>
          Close
        </button>
      </form>
    </dialog>
  );
});

export default ErrorModal;
