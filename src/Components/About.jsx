import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Sliderbox from './Sliderbox'
import Announcements from './Announcements'
import schoolpic from "../assets/school-svgrepo-com.svg"

const About = () => {
  return (
    <Container fluid className='p-5'>
    <Row >
      <Col sm={6}>
      <img src={schoolpic} alt="school logo" className='img-fluid'/>
     
      </Col>
      <Col sm={6}>
      <div className=' w-100 h-100'>
      <h1 className='text-danger p-5 text-center'>About Us</h1>
      <p className='p-3 text-bold'> Christ Thekingemsl Primary School (CTPS) located at Krishna Vijayawada Urban Bsrkmchs Mogalrajpuram Vijayawada (Corp.)-4 is one of the popular schools in India. The School has been rated by 3 people on iCBSE. The Christ Thekingemsl Primary School has been viewed 18 times by the visitors on iCBSE. This School is counted among the top-rated Schools in Andhra Pradesh with an excellent academic track record. If you're looking for more details regarding admission procedure, syllabus, application forms, results and examinations schedule, kindly contact the relevant department of the school.</p>
      </div>
      </Col>
      
      </Row>
      
   
    
  </Container>
  )
}

export default About
