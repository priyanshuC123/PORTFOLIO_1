
import React from 'react'
import './Header.css'
import ME from '../../assets/Priyanshu.jpeg'
import NIT from '../../assets/skills.png'

function Header() {
  return (
   <section id='header'>
  
   <div className="header_sec">
      <div className="header_image"><img  src={ME} alt="image.png" /></div>
      <div className="header_content">
      <h5>Hello I'm</h5>
      <h1>
      <strong>Priyanshu Choudhary.</strong> </h1>
      <h5>Currently a final year undergraduate at <a href="https://www.nitrkl.ac.in/" target='_blank'>NIT Rourkela</a> </h5>
      <a href="#contact" className="btn btn-outline-secondary">Lets talk!</a> 
      </div>
    </div>
  
   </section>
  )
}

export default Header
