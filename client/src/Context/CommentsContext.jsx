import axios from "../axiosConfig";
import { createContext, useContext, useState } from "react";

const CommentsContext = createContext();

export default function CommentsContextProvider({ children }) {
  const [comments, setComments] = useState([]);

  // async function fetchComments() {
  //   try {
  //     const response = await axios.get("/comments");
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //   }
  // }

  async function createComment(comment) {
    try {
      const response = await axios.post("/comments/create", comment);
      setComments(response.data.comments);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function getBooksByName(bookId) {
    try {
      const response = await axios.get(`/books/search/${bookId}`);
      setComments(response.data[0]?.comments);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  async function getFairyBooksByName(bookId) {
    try {
      const response = await axios.get(`/fairy/title/${bookId}`);
      setComments(response.data[0]?.comments);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function removeComment(bookId) {
    try {
      const response = await axios.delete(`/comments/remove/${bookId}`);
      setComments(response.data.comments);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <CommentsContext.Provider
      value={{
        createComment,
        comments,
        getBooksByName,
        removeComment,
        getFairyBooksByName,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

export const useCommentsContext = () => useContext(CommentsContext);
