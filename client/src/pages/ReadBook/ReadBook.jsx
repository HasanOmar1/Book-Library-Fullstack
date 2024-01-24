import React from "react";
import "./ReadBook.css";
import OpenBook from "../../components/PageFlip-Package/OpenBook";
import Button from "react-bootstrap/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export default function ReadBook() {
  const navigate = useNavigate();
  return (
    <main className="ReadBook">
      <div className="back-btn-container">
        <div className="back-btn" onClick={() => navigate(-1)}>
          <Button variant="outline-warning">
            <ArrowBackIosIcon className="back-icon" />
            Back
          </Button>
        </div>
      </div>

      <div className="book">
        <OpenBook />
      </div>
    </main>
  );
}
