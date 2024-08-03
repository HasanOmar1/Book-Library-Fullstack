import { useEffect, useRef, useState } from "react";
import "../LoginAndSign-up.css";
import { Link } from "react-router-dom";
import { useNewUsersContext } from "../../../Context/NewUsersContext";
import ErrorModal from "../../../components/Modals/ErrorMsg";
import { HashLoader } from "react-spinners";

export default function SignUp() {
  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  const { createUser, errorMsg, registerStatus } = useNewUsersContext();

  const errorRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (errorMsg) {
      errorRef?.current?.showModal();
    }
  }, [errorMsg]);

  function handleOnSubmit(e) {
    e.preventDefault();

    createUser({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  }
  return (
    <main className="SignUp login-sign-up">
      <h5 className="title">
        Knowledge is power, <span id="join-word">Join</span> us today to become
        more powerful
      </h5>
      <div className="big-container">
        <div className="left-container">
          <div className="books-img"></div>
        </div>

        <div className="right-container">
          <h3>Sign up</h3>
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setNameValue(e.target.value)}
              ref={inputRef}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswordValue(e.target.value)}
            />

            <button type="submit" className="register">
              Join
              {!registerStatus && (
                <HashLoader color="#36d7b7" className="loader" size={30} />
              )}
            </button>
          </form>
          <p className="login">
            Already a member?{" "}
            <Link className="link" to={"/login"}>
              Login
            </Link>
          </p>
          <ErrorModal ref={errorRef} />
        </div>
      </div>
    </main>
  );
}
