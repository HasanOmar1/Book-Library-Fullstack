import HomeTitles from "../HomeTitles/HomeTitles";
import BookOfTheDayContainer from "../BookOfTheDayContainer/BookOfTheDayContainer";
import WeeklyFeaturedBooksContainer from "../WeeklyFeaturedBooksContainer/WeeklyFeaturedBooksContainer";
import LinksToCategoryPages from "../LinksToPages/LinksToCategoryPages";
import LinksToAuthorPages from "../LinksToPages/LinksToAuthorPages";
import FairyBooksCardsContainer from "../FairyBooksCardsContainer/FairyBooksCardsContainer";
import Carousel from "../Carousel/Carousel";

export default function HomeDataContainer() {
  return (
    <>
      <HomeTitles title={"Fan Favorite Series"} id={"top"} />

      <Carousel />
      <BookOfTheDayContainer />
      <WeeklyFeaturedBooksContainer />
      <LinksToCategoryPages />
      <LinksToAuthorPages />
      <FairyBooksCardsContainer />
    </>
  );
}
