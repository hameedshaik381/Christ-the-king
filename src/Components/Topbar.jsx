import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="transparent" variant="light">
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand> </Navbar.Brand>
        <Nav.Link>
          <Button>
            <Link style={{ textDecoration: "none" }} to="student-corner">
              Homework
            </Link>
          </Button>
        </Nav.Link>

        
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav className="me-auto ">
            <Nav.Link>
              <Button>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Academics
                </Link>
              </Button>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button>
                <Link
                  style={{ textDecoration: "none" }}
                  to="school"
                >
                  About
                </Link>
              </Button>
            </Nav.Link>

            <Nav.Link>
              <Button>
                <Link
                  style={{ textDecoration: "none" }}
                  to="contact"
                >
                  Contact
                </Link>
              </Button>
            </Nav.Link>

            <Nav.Link href="#memes">
              <Button variant="contained" color="success" size="small">
                Join now
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
