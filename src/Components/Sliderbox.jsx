import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Sliderbox =()=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel   activeIndex={index} onSelect={handleSelect} fade={true} touch={true} interval={2000} >
      <Carousel.Item >
        <img
          className="d-block w-100  img-fluid  mx-auto rounded text-center "
          src="https://vijayawadadiocese.org/wp-content/uploads/photo-gallery/PRIESTLY_ORDINATION_2017/1.jpg"
          alt="First slide"  style={{objectFit:"cover",height:"500px"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100  img-fluid mx-auto rounded text-center"
          src="https://www.infomediasearch.com/media/post/2017/2/25/christ-the-king-engineering-college15845536112-img.png"
          alt="Second slide" style={{objectFit:"cover",height:"500px"}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100  img-fluid mx-auto rounded text-center"
          src="https://cdn.ghanaweb.com/imagelib/pics/866/86699307.jpg"
          alt="Third slide"
 style={{objectFit:"cover",height:"500px"}}        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliderbox;