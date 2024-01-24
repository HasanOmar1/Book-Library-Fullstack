import React, { useEffect } from "react";
import "./MyLibrary.css";
import LibraryBooks from "../../components/BooksCards/LibraryBooks/LibraryBooks";
import FairyLibraryBooks from "../../components/BooksCards/LibraryBooks/FairyLibraryBooks";
import { useNewUsersContext } from "../../Context/NewUsersContext";

export default function MyLibrary() {
  const { currentUser } = useNewUsersContext();
  console.log(currentUser);

  return (
    <main className="MyLibrary">
      <h4 className="title">My Library</h4>
      <div className="library-container">
        <LibraryBooks library={currentUser?.books} />
        <FairyLibraryBooks library={currentUser?.fairyBooks} />
      </div>
    </main>
  );
}
