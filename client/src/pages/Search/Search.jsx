import { useEffect, useState } from "react";
import "./Search.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
import SearchIcon from "@mui/icons-material/Search";
import { useFairyContext } from "../../Context/FairyBooksContext";
import { HashLoader } from "react-spinners";
import SkeletonComp from "../../components/Skeleton/Skeleton";

export default function Search() {
  const [results, setResults] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  // const [searchValueAfterSubmit, setSearchValueAfterSubmit] = useState(""); // for collection name
  const { books, booksByName, getBooksByName } = useBooksData();
  const { searchForFairyBooks, searchForFairyBooksByName } = useFairyContext();

  useEffect(() => {
    if (booksByName || searchForFairyBooks) {
      setResults(booksByName?.length + searchForFairyBooks?.length);
    } else {
      setResults(0);
    }
  }, [booksByName, searchForFairyBooks]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getBooksByName(searchValue);
      searchForFairyBooksByName(searchValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const allBooks = booksByName?.concat(searchForFairyBooks);

  return (
    <div className="Search" id="home">
      {books && (
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search for books"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="search-btn">
            <SearchIcon />
          </button>
        </div>
      )}
      {/* <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for books"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div> */}

      {books ? (
        <div className="info-container">
          {searchValue ? (
            <>
              <div className="results">
                <p>{results} results found</p>
              </div>
              <div>
                <BooksByCategories
                  categoryName={searchValue}
                  array={allBooks}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <BooksByCategories
                  categoryName={`Recommended`}
                  array={books?.slice(70, 85)}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="loading">
          <h3>Loading Data...</h3>
          <div className="loader">
            <HashLoader color="#36d7b7" />
          </div>
          <div>( The server is waking up, this might take some time )</div>

          <SkeletonComp />
        </div>
      )}
      {/* <div className="info-container">
        {searchValue ? (
          <>
            <div className="results">
              <p>{results} results found</p>
            </div>
            <div>
              <BooksByCategories categoryName={searchValue} array={allBooks} />
            </div>
          </>
        ) : (
          <>
            <div>
              <BooksByCategories
                categoryName={`Recommended`}
                array={books?.slice(70, 85)}
              />
            </div>
          </>
        )}
      </div> */}
    </div>
  );
}
