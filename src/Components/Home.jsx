import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Announcements from "./Announcements";
import About from "./About";
import Sliderbox from "./Sliderbox";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row >
          <Col >
            <Sliderbox />
          </Col>
          </Row>

        <Row className="bg-warning">
          <About />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
