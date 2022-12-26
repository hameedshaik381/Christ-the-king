import React from 'react'
import {Link} from "react-router-dom"
import calender from '../assets/calender.svg'
import { Container,Row,Col } from 'react-bootstrap'

const Eventspanel = () => {
  return (
    <Container  fluid className="bg-success  shadow-lg  ">

   <Row>
   <h2 className="p-4 text-bold text-white ">Events</h2>
   <Col sm={3} >
   <div className='d-flex justify-content-center align-items-center  my-5'>
   <div className='position-absolute  text-left ' style={{marginTop:"100px"}} ><h5 className='text-success font-weight-bold'>Christmas</h5>
   <p>21-12-2022</p><p style={{width:"150px",fontSize:"10px"}}>On the eve of christmas christ the king to celebrate semi christmas.... <Link to="/circular">see more...</Link></p></div>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Blank_Calendar_page_icon.svg/1200px-Blank_Calendar_page_icon.svg.png" alt="calender" className="img-fluid  lg:w-50 w-75 p-2 "/>
   </div>
   </Col>
   <Col sm={3} >
   <div className='d-flex justify-content-center align-items-center  my-5'>
   <div className='position-absolute  text-left ' style={{marginTop:"100px"}} ><h5 className='text-success font-weight-bold'>Christmas</h5>
   <p>21-12-2022</p><p style={{width:"150px",fontSize:"10px"}}>On the eve of christmas christ the king to celebrate semi christmas.... <Link to="/circular">see more...</Link></p></div>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Blank_Calendar_page_icon.svg/1200px-Blank_Calendar_page_icon.svg.png" alt="calender" className="img-fluid  lg:w-50 w-75 p-2 "/>
   </div>
   </Col>
   <Col sm={3} >
   <div className='d-flex justify-content-center align-items-center  my-5'>
   <div className='position-absolute  text-left ' style={{marginTop:"100px"}} ><h5 className='text-success font-weight-bold'>Christmas</h5>
   <p>21-12-2022</p><p style={{width:"150px",fontSize:"10px"}}>On the eve of christmas christ the king to celebrate semi christmas.... <Link to="/circular">see more...</Link></p></div>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Blank_Calendar_page_icon.svg/1200px-Blank_Calendar_page_icon.svg.png" alt="calender" className="img-fluid  lg:w-50 w-75 p-2 "/>
   </div>
   </Col>
   <Col sm={3} >
   <div className='d-flex justify-content-center align-items-center  my-5'>
   <div className='position-absolute  text-left ' style={{marginTop:"100px"}} ><h5 className='text-success font-weight-bold'>Christmas</h5>
   <p>21-12-2022</p><p style={{width:"150px",fontSize:"10px"}}>On the eve of christmas christ the king to celebrate semi christmas.... <Link to="/circular">see more...</Link></p></div>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Blank_Calendar_page_icon.svg/1200px-Blank_Calendar_page_icon.svg.png" alt="calender" className="img-fluid  lg:w-50 w-75 p-2 "/>
   </div>
   </Col>
   </Row>
    
    </Container>
  )
}

export default Eventspanel
