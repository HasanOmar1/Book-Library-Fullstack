import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Navbar/Header";
import Login from "./pages/LoginAndSign-up/Login/Login";
import SignUp from "./pages/LoginAndSign-up/Sign-up/SignUp";
import NewUsersProvider from "./Context/NewUsersContext";
import BooksProvider from "./Context/BooksContext";
import BookDetails from "./pages/BookDetails/BookDetails";
import MyLibrary from "./pages/MyLibrary/MyLibrary";
import LibraryProvider from "./Context/LibraryContext";
import Fiction from "./pages/Categories/Fiction";
import Comics from "./pages/Categories/Comics";
import Art from "./pages/Categories/Art";
import HowToBooks from "./pages/Categories/HowTo";
import Crime from "./pages/Categories/Crime";
import Criticism from "./pages/Categories/Criticism";
import Cars from "./pages/Categories/Cars";
import ReadBook from "./pages/ReadBook/ReadBook";
import History from "./pages/Categories/History";
import Adventure from "./pages/Categories/Adventure";
import Romance from "./pages/Categories/Romance";
import Cooking from "./pages/Categories/Cooking";
import Horror from "./pages/Categories/Horror";
import Search from "./pages/Search/Search";
import Rowling from "./pages/Authors/Rowling";
import George from "./pages/Authors/George";
import StanLee from "./pages/Authors/StanLee";
import StephenKing from "./pages/Authors/StephenKing";
import AuthorsProvider from "./Context/AuthorsContext";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import FairyBooksProvider from "./Context/FairyBooksContext";
import CommentsContextProvider from "./Context/CommentsContext";
import NewBookProvider from "./Context/NewBookContext";
import AddBookPage from "./pages/AddBookPage/AddBookPage";
import BooksByPeople from "./pages/Categories/BooksByPeople";
import MyBooks from "./pages/MyBooks/MyBooks";

function App() {
  return (
    <>
      <BooksProvider>
        <NewUsersProvider>
          <LibraryProvider>
            <AuthorsProvider>
              <FairyBooksProvider>
                <CommentsContextProvider>
                  <NewBookProvider>
                    <Header />
                    <ScrollToTop />
                    <Routes>
                      <Route path={"/"} exact element={<Home />} />
                      <Route path={"/sign-up"} element={<SignUp />} />
                      <Route path={"/login"} element={<Login />} />
                      <Route path={"/:name"} element={<BookDetails />} />
                      <Route path={"/library"} element={<MyLibrary />} />
                      <Route path={"/reading-book"} element={<ReadBook />} />
                      <Route path={"/search"} element={<Search />} />
                      <Route path={"/add-book"} element={<AddBookPage />} />
                      <Route path={"/my-books"} element={<MyBooks />} />

                      {/* Categories */}
                      <Route path={"/fiction"} element={<Fiction />} />
                      <Route path={"/comics"} element={<Comics />} />
                      <Route path={"/art"} element={<Art />} />
                      <Route path={"/educational"} element={<HowToBooks />} />
                      <Route path={"/crime"} element={<Crime />} />
                      <Route path={"/criticism"} element={<Criticism />} />
                      <Route path={"/cars"} element={<Cars />} />
                      <Route path={"/history"} element={<History />} />
                      <Route path={"/adventure"} element={<Adventure />} />
                      <Route path={"/romance"} element={<Romance />} />
                      <Route path={"/cooking"} element={<Cooking />} />
                      <Route path={"/horror"} element={<Horror />} />
                      <Route
                        path={"/books-by-people"}
                        element={<BooksByPeople />}
                      />
                      {/*  */}

                      {/* Authors */}
                      <Route path={"/j-k-rowling"} element={<Rowling />} />
                      <Route path={"/george-martin"} element={<George />} />
                      <Route path={"/stan-Lee"} element={<StanLee />} />
                      <Route path={"/stephen-king"} element={<StephenKing />} />
                      {/*  */}
                    </Routes>
                    <Footer />
                  </NewBookProvider>
                </CommentsContextProvider>
              </FairyBooksProvider>
            </AuthorsProvider>
          </LibraryProvider>
        </NewUsersProvider>
      </BooksProvider>
    </>
  );
}

export default App;
