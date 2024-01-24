import Carousel from "react-bootstrap/Carousel";
import BooksCards from "../BooksCards/BooksCards";
import "./Carousel.css";

function BooksCarousel() {
  return (
    <Carousel data-bs-theme="light" className="Carousel">
      <Carousel.Item className="carousel-item">
        <h5>Sherlock Holmes</h5>
        <div className="books">
          <BooksCards sliceStart={0} sliceEnd={4} />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <h5>Harry Potter</h5>
        <div className="books">
          <BooksCards sliceStart={9} sliceEnd={13} />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <h5>Lord of the rings</h5>
        <div className="books">
          <BooksCards sliceStart={21} sliceEnd={25} />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default BooksCarousel;
