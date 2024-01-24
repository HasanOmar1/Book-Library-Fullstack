import React, { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";

const AuthorsContext = createContext();

export default function AuthorsProvider({ children }) {
  const [rowlingBooks, setRowlingBooks] = useState([]);
  const [georgeMartinBooks, setGeorgeMartinBooks] = useState([]);
  const [stanLeeBooks, setStanLeeBooks] = useState([]);
  const [stephenKingBooks, setStephenKingBooks] = useState([]);

  async function getRowlingBooks() {
    try {
      const response = await axios.get("/books/author/j. k. rowling");
      console.log(response.data);
      setRowlingBooks(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function getGeorgeMartinBooks() {
    try {
      const response = await axios.get("/books/author/george r. r. martin");
      console.log(response.data);
      setGeorgeMartinBooks(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function getStanLeeBooks() {
    try {
      const response = await axios.get("/books/author/Stan lee");
      console.log(response.data);
      setStanLeeBooks(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function getStephenKingBooks() {
    try {
      const response = await axios.get("/books/author/Stephen king");
      console.log(response.data);
      setStephenKingBooks(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <AuthorsContext.Provider
      value={{
        getRowlingBooks,
        rowlingBooks,
        getGeorgeMartinBooks,
        georgeMartinBooks,
        getStanLeeBooks,
        stanLeeBooks,
        getStephenKingBooks,
        stephenKingBooks,
      }}
    >
      {children}
    </AuthorsContext.Provider>
  );
}

export const useAuthorsContext = () => useContext(AuthorsContext);
