import React from "react";
import "./LinksToPages.css";
import { Link } from "react-router-dom";

export default function LinksToCategoryPages() {
  return (
    <div className="LinksToPages">
      <div className="books-container">
        <h5>Books by Categories</h5>
        <hr className="divider" />
        <div className="big-container">
          <div className="categories">
            <Link to={"/fiction"} className="link">
              <p className="great-btn">Fiction</p>
            </Link>
            <Link to={"/comics"} className="link">
              <p className="great-btn">Comics</p>
            </Link>
            <Link to={"/art"} className="link">
              <p className="great-btn">Art</p>
            </Link>
            <Link to={"/educational"} className="link">
              <p className="great-btn">Educational</p>
            </Link>
            <Link to={"/crime"} className="link">
              <p className="great-btn">Crime</p>
            </Link>
            <Link to={"/criticism"} className="link">
              <p className="great-btn">Criticism</p>
            </Link>
            <Link to={"/cars"} className="link">
              <p className="great-btn">Cars</p>
            </Link>
            <Link to={"/history"} className="link">
              <p className="great-btn">History</p>
            </Link>
            <Link to={"/adventure"} className="link">
              <p className="great-btn">Adventure</p>
            </Link>
            <Link to={"/romance"} className="link">
              <p className="great-btn">Romance</p>
            </Link>
            <Link to={"/cooking"} className="link">
              <p className="great-btn">Cooking</p>
            </Link>
            <Link to={"/horror"} className="link">
              <p className="great-btn">Horror</p>
            </Link>
            <div className="people-books">
              <Link to={"/books-by-people"} className="link">
                <p className="great-btn">Books Added By People</p>
              </Link>
            </div>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
}
