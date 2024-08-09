import axios from "../axiosConfig";
import { createContext, useContext, useEffect, useState } from "react";

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
  const [bookOfTheDay, setBookOfTheDay] = useState(null);

  useEffect(() => {
    fetchBooks();
    getBookOfTheDay();

    const intervalId = setInterval(() => {
      getBookOfTheDay();
    }, 86400);

    return () => clearInterval(intervalId);
  }, []);

  //fetches all books
  async function fetchBooks() {
    try {
      const response = await axios.get("/books");
      setBooks(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getBookOfTheDay() {
    try {
      const { data } = await axios.get("/books/randomBook");
      setBookOfTheDay(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getBooksByName(bookName) {
    try {
      const response = await axios.get(`/books/search/${bookName}`);
      setBooksByName(response.data);
    } catch (error) {
      setErrorMsg(error.response.data.message);
      setBooksByName([]);
    }
  }

  // gets all books that name includes whats in the parameter
  async function getHowToBooks() {
    try {
      const response = await axios.get(`/books/search/how to`);
      setHowToBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getFictionBooks() {
    try {
      const response = await axios.get(`/books/category/fiction`);
      setFictionBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getComicsBooks() {
    try {
      const response = await axios.get(`/books/category/comics`);
      setComicsBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getArtBooks() {
    try {
      const response = await axios.get(`/books/category/art`);
      setArtBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCriticismBooks() {
    try {
      const response = await axios.get(`/books/category/criticism`);
      setCriticismBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCrimeBooks() {
    try {
      const response = await axios.get(`/books/search/criminal`);
      setCrimeBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCarsBooks() {
    try {
      const response = await axios.get(`/books/search/cars`);
      setCarsBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getHistoryBooks() {
    try {
      const response = await axios.get(`/books/search/history`);
      setHistoryBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAdventureBooks() {
    try {
      const response = await axios.get(`/books/search/adventure`);
      setAdventureBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRomanceBooks() {
    try {
      const response = await axios.get(`/books/search/romance`);
      setRomanceBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCookingBooks() {
    try {
      const response = await axios.get(`/books/category/cooking`);
      setCookingBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getHorrorBooks() {
    try {
      const response = await axios.get(`/books/search/horror`);
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
        bookOfTheDay,
        getBookOfTheDay,
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
