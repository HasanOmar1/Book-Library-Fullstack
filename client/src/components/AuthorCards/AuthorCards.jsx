import React from "react";
import "./AuthorCards.css";
import authors from "./authors";
import { Link } from "react-router-dom";

export default function AuthorCards() {
  return (
    <div className="AuthorCards">
      {authors.map((auth, i) => {
        return (
          <Link to={`/${auth.to}`} className="link" key={i}>
            <div className="author-card">
              <div className="info-container">
                <img src={auth.img} alt={auth.author} />
                <h4>{auth.author}</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
