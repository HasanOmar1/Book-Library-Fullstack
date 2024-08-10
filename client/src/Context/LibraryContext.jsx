import { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";
import { useNewUsersContext } from "./NewUsersContext";

const LibraryContext = createContext();

export default function LibraryProvider({ children }) {
  const { currentLoggedUser } = useNewUsersContext();
  const [booksErrorMsg, setBooksMsg] = useState();
  const [libraryBooks, setLibraryBooks] = useState([]);

  async function addBookToLibrary(bookId) {
    try {
      await axios.put(`/books/addBook/${bookId}`, {});
      currentLoggedUser();
      setBooksMsg("Book has been added to your library");
    } catch (error) {
      console.log(error.response.data.message);
      setBooksMsg(error.response.data.message);
    }
  }

  async function removeBookFromLibrary(bookId) {
    try {
      await axios.put(`/books/removeBook/${bookId}`, {});
      currentLoggedUser();
    } catch (error) {
      console.log(error.response.data.message);
      setBooksMsg(error.response.data.message);
    }
  }

  async function addFairyBookToLibrary(bookId) {
    try {
      await axios.put(`/fairy/addBook/${bookId}`, {});
      currentLoggedUser();
      setBooksMsg("Book has been added to your library");
    } catch (error) {
      console.log(error.response.data.message);
      setBooksMsg(error.response.data.message);
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
        setBooksMsg,
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
