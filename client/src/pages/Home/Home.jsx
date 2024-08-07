import { useEffect, useState } from "react";
import "./Home.css";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import { useBooksData } from "../../Context/BooksContext";
import { FaArrowUp } from "react-icons/fa";
import SkeletonComp from "../../components/Skeleton/Skeleton";
import { HashLoader } from "react-spinners";
import HomeDataContainer from "../../components/HomeDataContainer/HomeDataContainer";

export default function Home() {
  // const [currentBook, setCurrentBook] = useState(null);
  const { setCurrentUser, currentUser } = useNewUsersContext();
  const { books } = useBooksData();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, [setCurrentUser]);

  // useEffect(() => {
  //   setInterval(() => {
  //     if (books) {
  //       const randomNum = Math.floor(Math.random() * books.length);
  //       setCurrentBook(books[randomNum]);
  //       // console.log(randomNum);
  //     }
  //   }, 2000);
  // }, [books]);

  const loggedUser = localStorage.getItem("user");

  return (
    <main className="Home Page">
      {books ? (
        <>
          {loggedUser && (
            <>
              <div className="logged-user">
                <h5>
                  Hello <span>{currentUser?.name}</span>, Explore the library
                  and start reading 📚
                </h5>
              </div>
            </>
          )}

          <HomeDataContainer />

          <a
            href="#top"
            id="go-top"
            role="button"
            aria-label="Click to go back to the top of the page"
          >
            <FaArrowUp />
          </a>
        </>
      ) : (
        <>
          <h3>Loading Data...</h3>
          <div className="loader">
            <HashLoader color="#36d7b7" />
          </div>
          <div>( The server is waking up, this might take some time )</div>

          <SkeletonComp />
        </>
      )}
    </main>
  );
}
