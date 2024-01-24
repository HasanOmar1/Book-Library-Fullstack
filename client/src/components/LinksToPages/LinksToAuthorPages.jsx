import React from "react";
import "./LinksToPages.css";
import { Link } from "react-router-dom";
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
