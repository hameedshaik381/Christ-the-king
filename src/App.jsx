
import { Box, Typography } from "@mui/material";
import Topbar from "./Components/Topbar";
import Home from './Components/Home'
import Schoolinfo from './Components/Schoolinfo'
import Homework from './Components/Homework'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from "react-router-dom";





function App() {
  return (
    <Box display="block"  >
      <Topbar />
      
     <Routes>
     <Route path="/" element={ <Home/>} exact/>
     <Route path="/student-corner" element={ <Homework/>} exact/>
     <Route path="/school" element={ <Schoolinfo/>} exact/>

     </Routes>
  </Box>
  );
}

export default App;
