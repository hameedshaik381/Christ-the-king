
import { Box, Typography } from "@mui/material";
import Topbar from "./Components/Topbar";
import Sliderbox from "./Components/Sliderbox";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container,Row,Col } from "react-bootstrap";
import Sidebar from "./Components/Sidebar";
import Announcements from "./Components/Announcements";
import About from "./Components/About";




function App() {
  return (
    <Box display="block" bgcolor="#f8f9fa" >
      <Topbar />
      
      <Container fluid >
      <Row >
        <Col sm={8}>
        <Sliderbox/>
        </Col>
        <Col sm={4}>
        <Announcements/>
        </Col>
        
        </Row>
        
     
      <About/>
    </Container>
      
      
    
      
      </Box>
  );
}

export default App;
