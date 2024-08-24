import { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";
import { useNewUsersContext } from "./NewUsersContext";

const LibraryContext = createContext();

export default function LibraryProvider({ children }) {
  const { currentLoggedUser } = useNewUsersContext();
  const [booksErrorMsg, setBooksErrorMsg] = useState();
  const [libraryBooks, setLibraryBooks] = useState([]);

  async function addBookToLibrary(bookId) {
    try {
      await axios.put(`/books/addBook/${bookId}`, {});
      currentLoggedUser();
      setBooksErrorMsg("Book has been added to your library");
    } catch (error) {
      console.log(error.response.data.message);
      setBooksErrorMsg("You must be logged in to do this action");
    }
  }

  async function removeBookFromLibrary(bookId) {
    try {
      await axios.put(`/books/removeBook/${bookId}`, {});
      currentLoggedUser();
    } catch (error) {
      console.log(error.response.data.message);
      setBooksErrorMsg("You must be logged in to do this action");
    }
  }

  async function addFairyBookToLibrary(bookId) {
    try {
      await axios.put(`/fairy/addBook/${bookId}`, {});
      currentLoggedUser();
      setBooksErrorMsg("Book has been added to your library");
    } catch (error) {
      console.log(error.response.data.message);
      setBooksErrorMsg("You must be logged in to do this action");
    }
  }

  async function removeFairyBookFromLibrary(bookId) {
    try {
      await axios.put(`/fairy/removeBook/${bookId}`, {});
      currentLoggedUser();
    } catch (error) {
      console.log(error.response.data.message);
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
