import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Topbar=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:"bold",fontFamily:"Roboto",fontSize:"30px"}}>Christ the King</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Academics</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title="Admissions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Academics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Admission
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Exams</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Sports
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link  href="#memes">
              Contact
            </Nav.Link>
            <Nav.Link  href="#memes">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;