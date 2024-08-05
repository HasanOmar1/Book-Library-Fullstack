import HomeTitles from "../HomeTitles/HomeTitles";
import WeeklyFeaturedBooks from "../BooksCards/WeeklyFeaturedBooks/WeeklyFeaturedBooks";

export default function WeeklyFeaturedBooksContainer() {
  return (
    <>
      <HomeTitles title={"Weekly Featured Series"} />
      <WeeklyFeaturedBooks
        title={"Marvel Series"}
        sliceStart={30}
        sliceEnd={36}
      />
      <WeeklyFeaturedBooks
        title={"A Song of Ice and Fire Series"}
        sliceStart={36}
        sliceEnd={44}
      />
    </>
  );
}
