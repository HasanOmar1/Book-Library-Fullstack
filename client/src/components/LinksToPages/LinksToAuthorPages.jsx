import "./LinksToPages.css";
import AuthorCards from "../AuthorCards/AuthorCards";

export default function LinksToAuthorPages() {
  return (
    <div className="LinksToPages">
      <div className="books-container">
        <h5>Books by Well Known Authors</h5>
        <div className="authors">
          <AuthorCards />
        </div>
      </div>
    </div>
  );
}
