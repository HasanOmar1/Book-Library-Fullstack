import React, { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";
import { useNewUsersContext } from "./NewUsersContext";

const LibraryContext = createContext();

export default function LibraryProvider({ children }) {
  const { currentUser, setCurrentUser } = useNewUsersContext();
  const [booksErrorMsg, setBooksErrorMsg] = useState();
  const [libraryBooks, setLibraryBooks] = useState([]);

  async function addBookToLibrary(bookId) {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.put(`/books/addBook/${bookId}`, {});
        const userJSON = JSON.stringify(response.data);
        localStorage.setItem("user", userJSON);
        setCurrentUser(response.data);

        setBooksErrorMsg("Book has been added to your library");
      } else {
        setBooksErrorMsg("Login to add it to your library");
      }
    } catch (error) {
      console.log(error.response.data.message);
      setBooksErrorMsg(error.response.data.message);
    }
  }

  async function removeBookFromLibrary(bookId) {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.put(`/books/removeBook/${bookId}`, {});
        const userJSON = JSON.stringify(response.data);
        localStorage.setItem("user", userJSON);
        setCurrentUser(response.data);
      } else {
        setBooksErrorMsg("Please login first");
      }
    } catch (error) {
      console.log(error.response.data.message);
      setBooksErrorMsg(error.response.data.message);
    }
  }
  //
  //

  async function addFairyBookToLibrary(bookId) {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.put(`/fairy/addBook/${bookId}`, {});
        const userJSON = JSON.stringify(response.data);
        localStorage.setItem("user", userJSON);
        setCurrentUser(response.data);

        setBooksErrorMsg("Book has been added to your library");
      } else {
        setBooksErrorMsg("Login to add it to your library");
      }
    } catch (error) {
      console.log(error.response.data.message);
      setBooksErrorMsg(error.response.data.message);
    }
  }

  async function removeFairyBookFromLibrary(bookId) {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.put(`/fairy/removeBook/${bookId}`, {});
        const userJSON = JSON.stringify(response.data);
        localStorage.setItem("user", userJSON);
        setCurrentUser(response.data);
      } else {
        setBooksErrorMsg("Please login first");
      }
    } catch (error) {
      console.log(error.response.data.message);
      setErrorMsg(error.response.data.message);
    }
  }
  return (
    <LibraryContext.Provider
      value={{
        addBookToLibrary,
        removeBookFromLibrary,
        libraryBooks,
        setLibraryBooks,
        setBooksErrorMsg,
        booksErrorMsg,
        addFairyBookToLibrary,
        removeFairyBookFromLibrary,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export const useLibraryContext = () => useContext(LibraryContext);
