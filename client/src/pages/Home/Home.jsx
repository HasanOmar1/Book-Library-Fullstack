import { useEffect, useState } from "react";
import "./Home.css";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import { useBooksData } from "../../Context/BooksContext";
import { FaArrowUp } from "react-icons/fa";
import SkeletonComp from "../../components/Skeleton/Skeleton";
import { HashLoader } from "react-spinners";
import HomeDataContainer from "../../components/HomeDataContainer/HomeDataContainer";

export default function Home() {
  const { currentUser } = useNewUsersContext();
  const { books } = useBooksData();

  return (
    <main className="Home Page">
      {books ? (
        <>
          {currentUser && (
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
