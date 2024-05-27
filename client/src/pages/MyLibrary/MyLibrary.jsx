import "./MyLibrary.css";
import LibraryBooks from "../../components/BooksCards/LibraryBooks/LibraryBooks";
import FairyLibraryBooks from "../../components/BooksCards/LibraryBooks/FairyLibraryBooks";
import { useNewUsersContext } from "../../Context/NewUsersContext";

export default function MyLibrary() {
  const { currentUser } = useNewUsersContext();

  return (
    <main className="MyLibrary">
      <h4 className="title">My Library</h4>
      <div className="library-container">
        {(currentUser && currentUser?.books.length !== 0) ||
        currentUser?.fairyBooks.length !== 0 ? (
          <>
            <LibraryBooks library={currentUser?.books} />
            <FairyLibraryBooks library={currentUser?.fairyBooks} />
          </>
        ) : (
          <h2 className="no-books">No books in your library</h2>
        )}
      </div>
    </main>
  );
}
