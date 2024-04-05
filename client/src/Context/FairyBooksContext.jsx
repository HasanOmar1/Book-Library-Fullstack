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
      setFairyBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchForFairyBooksByName(bookName) {
    try {
      const response = await axios.get(`/fairy/title/${bookName}`);
      setSearchForFairyBooks(response.data);
    } catch (error) {
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
