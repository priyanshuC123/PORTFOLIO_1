
import React from 'react'
import './Header.css'
import ME from '../../assets/image.jpeg'

function Header() {
  return (
   <section id='header'>
   <header>
   <div className='images'>
      <img className='image' src={ME} alt="image.png" />
    </div>
    <div className="header_content">
      <h5>Hello I'm</h5>
      <h1>Priyanshu Choudhary.</h1>
      <h5>Currently a 2nd year undergraduate at <a href="https://www.nitrkl.ac.in/" target='_blank'>NIT Rourkela</a> </h5>
      <a href="#contact" className="btn btn-outline-secondary">Lets talk!</a> 
    </div>
    
   </header>
   </section>
  )
}

export default Header