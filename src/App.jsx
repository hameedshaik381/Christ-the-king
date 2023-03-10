
import { Box, Typography } from "@mui/material";
import Topbar from "./Components/Topbar";
import Home from './Components/Home'
import Schoolinfo from './Components/Schoolinfo'
import Homeworklist from './Components/Homeworklist'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";





function App() {
  return (
    <Box   >
      <Topbar />
      
     <Routes>
     <Route path="/" element={ <Home/>} exact/>
     <Route path="/student-corner" element={ <Homeworklist/>} exact/>
     <Route path="/school" element={ <Schoolinfo/>} exact/>
     <Route path="/contact" element={ <Contact/>} exact/>
     </Routes>
  
  </Box>
  );
}

export default App;
