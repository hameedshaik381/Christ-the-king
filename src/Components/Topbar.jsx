import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

const Topbar=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <Container  >
        <Navbar.Brand  style={{fontWeight:"bold",fontFamily:"Roboto"}}>Christ the King</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='text-center'>
          <Nav className="me-auto ">
            <Nav.Link href="#features"><Button>Academics</Button></Nav.Link>
            <Nav.Link ><Button><Link to="student-corner">Students corner</Link></Button></Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="/"><Button>Home</Button></Nav.Link>
            <Nav.Link  href="#memes">
            <Button>Contact</Button>
            </Nav.Link>
            <Nav.Link >
            <Button>About</Button>
            </Nav.Link>
            <Nav.Link  href="#memes">
            <Button variant="contained" color="success" size="small">Join now</Button>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;