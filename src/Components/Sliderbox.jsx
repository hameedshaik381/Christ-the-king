import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/system";

const Sliderbox = () => {
  const images = [
    {
      id: "1",
      image:
        "https://vijayawadadiocese.org/wp-content/uploads/photo-gallery/PRIESTLY_ORDINATION_2017/1.jpg",
    },
    {
      id: "2",
      image:
        "https://www.infomediasearch.com/media/post/2017/2/25/christ-the-king-engineering-college15845536112-img.png",
    },
    {
      id: "3",
      image: "https://cdn.ghanaweb.com/imagelib/pics/866/86699307.jpg",
    },
  ];

  return (
    <div  >
    <Carousel autoPlay interval={2000} infiniteLoop  stopOnHover >
    {images.map((img) => (
     
        <img key={img.id} src={img.image}  className="img-fluid"/>
      
    ))}
  </Carousel>
    </div>
   
    
    
  );
};

export default Sliderbox;
