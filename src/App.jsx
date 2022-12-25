
import { Box, Typography } from "@mui/material";
import Topbar from "./Components/Topbar";
import Sliderbox from "./Components/Sliderbox";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container,Row,Col } from "react-bootstrap";
import Sidebar from "./Components/Sidebar";
import Article from "./Components/Article";




function App() {
  return (
    <Box display="block" bgcolor="pink" >
      <Topbar />
      
      <Container fluid  >
      <Sliderbox/>
      
    </Container>
      
      
    
      
      </Box>
  );
}

export default App;
