import React from 'react'
import './Nav.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import CV from '../../assets/cv_1.pdf'


function NavBar() {
  return (
    <section id="Navbar">
       <div className="navbar">
      
      <a className="brand" href="/"><h1>Portfolio</h1></a>
      <ul className="nav-menu">
     
        <li >
          <a href="#about"><h5>About Me!</h5></a>
        </li>
        <li>
          <a href="#skills"><h5>Skills</h5></a>
        </li>
        <li>
          <a href="#contact"><h5>Contact</h5></a>
        </li>
      </ul>
      <ul className="nav-menu1">
        <li> 
          <a href="https://www.linkedin.com/in/priyanshu-choudhary-44b49a254/" target="_blank"><AiFillLinkedin/></a>
        </li>
        <li>
          <a href="https://github.com/priyanshuC123" target="_blank"><AiFillGithub/></a>
        </li>
      </ul>
      
          <a href={CV} download className='download_cv btn btn-outline-secondary'>Download CV</a> 
      
    </div>
    </section>
   
    
  )
}

export default NavBar