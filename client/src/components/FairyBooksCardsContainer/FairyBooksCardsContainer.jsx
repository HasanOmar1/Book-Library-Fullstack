import React from "react";
import FairyBooksCards from "../FairyBooksCards/FairyBooksCards";
import HomeTitles from "../HomeTitles/HomeTitles";

export default function FairyBooksCardsContainer() {
  return (
    <>
      <HomeTitles title={"Fairy Tales"} />
      <FairyBooksCards />
    </>
  );
}
