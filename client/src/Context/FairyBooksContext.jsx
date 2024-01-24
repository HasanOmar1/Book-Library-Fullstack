import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";

const FairyContext = createContext();

export default function FairyBooksProvider({ children }) {
  const [fairyBooks, setFairyBooks] = useState();
  const [searchForFairyBooks, setSearchForFairyBooks] = useState();

  useEffect(() => {
    getFairyBooks();
  }, []);

  async function getFairyBooks() {
    try {
      const response = await axios.get("/fairy");
      // console.log(response.data);
      setFairyBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchForFairyBooksByName(bookName) {
    try {
      const response = await axios.get(`/fairy/title/${bookName}`);
      // console.log(response.data);
      setSearchForFairyBooks(response.data);
    } catch (error) {
      // console.log(error.response.data.message);
      setSearchForFairyBooks([]);
    }
  }

  return (
    <FairyContext.Provider
      value={{
        fairyBooks,
        getFairyBooks,
        searchForFairyBooksByName,
        searchForFairyBooks,
      }}
    >
      {children}
    </FairyContext.Provider>
  );
}

export const useFairyContext = () => useContext(FairyContext);
