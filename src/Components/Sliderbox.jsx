import React, { useState } from "react";
import { Carousel } from "react-carousel-minimal";
import Announcements from "./Announcements";
import {Grid} from "@mui/material";

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
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
  
    <Grid container >
  <Grid item md={9} sx={{width:"100vw"}}>
  <Carousel
  data={images}
  time={1000}
  width="850"
  height="500px"
  captionStyle={captionStyle}
  captionPosition="bottom"
  automatic={true}
  pauseIconColor="white"
  pauseIconSize="40px"
  slideBackgroundColor="white"
  slideImageFit="fill"
  style={{
    textAlign: "center",
    maxWidth: "100vw",
    maxHeight: "100vh",
    margin: "auto"
  }}
/>
  </Grid>
  <Grid item md={3} >
  <Announcements/>
  </Grid>
</Grid>
    
   
    
  );
};

export default Sliderbox;
