import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   
    <footer className="page-footer fixed-bottom font-small special-color-dark pt-4 text-white bg-dark ">
    
    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <Link to="/">Christ the king</Link>
      </div>
      
    
    </footer>
   
  )
}

export default Footer