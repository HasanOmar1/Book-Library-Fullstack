import axios from "../axiosConfig";
import React, { createContext, useContext, useEffect, useState } from "react";

const BooksContext = createContext();

export default function BooksProvider({ children }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [books, setBooks] = useState();
  const [booksByName, setBooksByName] = useState();
  const [fictionBooks, setFictionBooks] = useState([]);
  const [comicsBooks, setComicsBooks] = useState([]);
  const [artBooks, setArtBooks] = useState([]);
  const [howToBooks, setHowToBooks] = useState([]);
  const [crimeBooks, setCrimeBooks] = useState([]);
  const [criticismBooks, setCriticismBooks] = useState([]);
  const [carsBooks, setCarsBooks] = useState([]);
  const [historyBooks, setHistoryBooks] = useState([]);
  const [adventureBooks, setAdventureBooks] = useState([]);
  const [romanceBooks, setRomanceBooks] = useState([]);
  const [cookingBooks, setCookingBooks] = useState([]);
  const [horrorBooks, setHorrorBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  //fetches all books
  async function fetchBooks() {
    try {
      const response = await axios.get("/books");
      // console.log(response.data);
      setBooks(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getBooksByName(bookName) {
    try {
      const response = await axios.get(`/books/search/${bookName}`);
      // console.log(response.data);

      setBooksByName(response.data);
    } catch (error) {
      // console.log(error.response.data.message);
      setErrorMsg(error.response.data.message);
      setBooksByName([]);
    }
  }

  // gets all books that name includes whats in the parameter
  async function getHowToBooks() {
    try {
      const response = await axios.get(`/books/search/how to`);
      console.log(response.data);
      setHowToBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getFictionBooks() {
    try {
      const response = await axios.get(`/books/category/fiction`);
      console.log(response.data);
      setFictionBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getComicsBooks() {
    try {
      const response = await axios.get(`/books/category/comics`);
      console.log(response.data);
      setComicsBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getArtBooks() {
    try {
      const response = await axios.get(`/books/category/art`);
      console.log(response.data);
      setArtBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCriticismBooks() {
    try {
      const response = await axios.get(`/books/category/criticism`);
      console.log(response.data);
      setCriticismBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getHowToBooks() {
    try {
      const response = await axios.get(`/books/search/how to`);
      console.log(response.data);
      setHowToBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCrimeBooks() {
    try {
      const response = await axios.get(`/books/search/criminal`);
      console.log(response.data);
      setCrimeBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCarsBooks() {
    try {
      const response = await axios.get(`/books/search/cars`);
      console.log(response.data);
      setCarsBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getHistoryBooks() {
    try {
      const response = await axios.get(`/books/search/history`);
      console.log(response.data);
      setHistoryBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAdventureBooks() {
    try {
      const response = await axios.get(`/books/search/adventure`);
      console.log(response.data);
      setAdventureBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRomanceBooks() {
    try {
      const response = await axios.get(`/books/search/romance`);
      console.log(response.data);
      setRomanceBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCookingBooks() {
    try {
      const response = await axios.get(`/books/category/cooking`);
      console.log(response.data);
      setCookingBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getHorrorBooks() {
    try {
      const response = await axios.get(`/books/search/horror`);
      console.log(response.data);
      setHorrorBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        getFictionBooks,
        fictionBooks,
        getComicsBooks,
        comicsBooks,
        getArtBooks,
        artBooks,
        getHowToBooks,
        howToBooks,
        getCrimeBooks,
        crimeBooks,
        getCriticismBooks,
        criticismBooks,
        getCarsBooks,
        carsBooks,
        getHistoryBooks,
        historyBooks,
        getAdventureBooks,
        adventureBooks,
        getRomanceBooks,
        romanceBooks,
        getCookingBooks,
        cookingBooks,
        getHorrorBooks,
        horrorBooks,
        getBooksByName,
        booksByName,
        errorMsg,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export const useBooksData = () => useContext(BooksContext);
