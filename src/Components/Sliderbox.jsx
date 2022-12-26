import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Sliderbox = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      fade={true}
      touch={true}
      interval={2000}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover img-fluid  mx-auto  text-center  "
          style={{ height: "600px" }}
          src="https://vijayawadadiocese.org/wp-content/uploads/photo-gallery/PRIESTLY_ORDINATION_2017/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 object-ficoverll mg-fluid mx-auto  text-center "
          style={{ height: "600px" }}
          src="https://www.infomediasearch.com/media/post/2017/2/25/christ-the-king-engineering-college15845536112-img.png"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 object-ficoverll mg-fluid mx-auto  text-center "
          style={{ height: "600px" }}
          src="https://cdn.ghanaweb.com/imagelib/pics/866/86699307.jpg"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Sliderbox;
