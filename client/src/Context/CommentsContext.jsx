import axios from "../axiosConfig";
import React, { createContext, useContext, useEffect, useState } from "react";

const CommentsContext = createContext();

export default function CommentsContextProvider({ children }) {
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    try {
      const response = await axios.get("/comments");
      // console.log(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function createComment(comment) {
    try {
      const config = {
        headers: { authorization: `Bearer ${token}` },
      };
      const response = await axios.post("/comments/create", comment, config);
      // console.log(response.data.comments);
      setComments(response.data.comments);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function getBooksByName(bookId) {
    try {
      const response = await axios.get(`/books/search/${bookId}`);
      // console.log(response.data[0]?.comments);
      setComments(response.data[0]?.comments);
    } catch (error) {
      // console.log(error.response.data.message);
    }
  }
  async function getFairyBooksByName(bookId) {
    try {
      const response = await axios.get(`/fairy/title/${bookId}`);
      // console.log(response.data[0]?.comments);
      setComments(response.data[0]?.comments);
    } catch (error) {
      // console.log(error.response.data.message);
    }
  }

  async function removeComment(bookId) {
    try {
      // const token = localStorage.getItem("token");
      const response = await axios.delete(`/comments/remove/${bookId}`, {
        headers: { authorization: `Bearer ${token}` },
      });

      // console.log(response.data.comments);
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
