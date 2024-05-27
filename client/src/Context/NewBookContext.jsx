import React, { createContext, useContext } from "react";
import axios from "../axiosConfig";
import { useFairyContext } from "./FairyBooksContext";
import { useNewUsersContext } from "./NewUsersContext";
import { toast } from "react-toastify";

const NewBookContext = createContext();

const token = localStorage.getItem("token");

export default function NewBookProvider({ children }) {
  const { getFairyBooks } = useFairyContext();
  const { setCurrentUser } = useNewUsersContext();

  async function addNewBook(book) {
    try {
      const response = await axios.post("/fairy", book, {
        headers: { authorization: `Bearer ${token}` },
      });
      toast.success("Book added successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async function removeMyBook(bookId) {
    try {
      const config = {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response = await axios.delete(`/fairy/${bookId}`, config);

      if (response.data.fairyBooks) {
        const userJSON = JSON.stringify(response.data);
        localStorage.setItem("user", userJSON);
        setCurrentUser(response.data);
        getFairyBooks();
      }
      toast.error("Book has been deleted");

      getFairyBooks();
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
