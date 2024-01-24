import React, { useEffect, useState } from "react";
import "./Search.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
import SearchIcon from "@mui/icons-material/Search";
import { useFairyContext } from "../../Context/FairyBooksContext";

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
  // console.log(allBooks);

  return (
    <div className="Search" id="home">
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
      <div className="info-container">
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
      </div>
    </div>
  );
}
