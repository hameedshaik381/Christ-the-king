import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button,Typography} from '@mui/material'
import { Link } from 'react-router-dom';

const Topbar=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="light">
      <Container  >
        <Navbar.Brand  >
        <Link to="/"><div className='h2 text-warning btn font-bold' >Christ <span className="h6 text-white">the king</span></div></Link>
       
       
       </Navbar.Brand>
        <Nav.Link ><Button><Link style={{textDecoration:"none",color:"whitesmoke"}} to="student-corner">Students</Link></Button></Nav.Link>
      
            
            
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='text-center'>
          <Nav className="me-auto ">
         
       
          <Nav.Link ><Button><Link style={{textDecoration:"none",color:"whitesmoke"}} to="school">Academics</Link></Button></Nav.Link>
           
            
          </Nav>
          <Nav>
         
            
          <Nav.Link ><Button><Link style={{textDecoration:"none",color:"whitesmoke"}} to="school">About</Link></Button></Nav.Link>
            
            <Nav.Link ><Button><Link style={{textDecoration:"none",color:"whitesmoke"}} to="contact">Contact</Link></Button></Nav.Link>
           
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