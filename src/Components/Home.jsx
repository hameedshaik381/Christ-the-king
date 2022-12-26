import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Announcements from "./Announcements";
import About from "./About";
import Sliderbox from "./Sliderbox";
import Eventspanel from './Eventspanel'

const Home = () => {
  return (
    <div >
      
      <Sliderbox/>
      <About/>
      <Eventspanel/>
      
    </div>
  );
};

export default Home;
