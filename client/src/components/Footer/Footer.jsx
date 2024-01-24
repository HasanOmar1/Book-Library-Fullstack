import React from "react";
import "./Footer.css";
import MarkunreadTwoToneIcon from "@mui/icons-material/MarkunreadTwoTone";

export default function Footer() {
  return (
    <section className="Footer">
      <div className="footer-container">
        <div className="used">
          <p>Frameworks & Packages</p>
          <ul>
            <li>Material UI</li>
            <li>Bootstrap</li>
            <li>React page-flip</li>
            <li>Puppeteer</li>
          </ul>
        </div>
        <div className="contact">
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=hasanromar2002@gmail.com&tf=cm"
            target="_blank"
            className="mail-to"
          >
            <MarkunreadTwoToneIcon className="icon" />
          </a>
          <p>Hasanromar2002@gmail.com</p>
        </div>
        <p>© 2024, Hasan Omar, All rights reserved</p>
      </div>
    </section>
  );
}
