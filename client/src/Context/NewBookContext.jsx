import { createContext, useContext } from "react";
import axios from "../axiosConfig";
import { useFairyContext } from "./FairyBooksContext";
import { toast } from "react-toastify";

const NewBookContext = createContext();

export default function NewBookProvider({ children }) {
  const { getFairyBooks } = useFairyContext();

  async function addNewBook(book) {
    try {
      await axios.post("/fairy", book);
      getFairyBooks();
      toast.success("Book added successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async function removeMyBook(bookId) {
    try {
      await axios.delete(`/fairy/${bookId}`);
      getFairyBooks();
      toast.error("Book has been deleted");
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <NewBookContext.Provider value={{ addNewBook, removeMyBook }}>
      {children}
    </NewBookContext.Provider>
  );
}

export const useNewBookContext = () => useContext(NewBookContext);
