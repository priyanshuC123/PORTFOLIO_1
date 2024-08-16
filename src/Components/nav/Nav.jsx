

import React from 'react'
import { Col,Container, Navbar,Nav, Row, NavDropdown} from 'react-bootstrap'
import './Nav.css'
import {CiLinkedin} from 'react-icons/ci'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

/*
class NavBar extends Component {
  state={clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render()*/
  function NaVbar() {

  return (
    <section id="Navbar">
    <Container>
       
       <Row>
        <Col>
           <Navbar fixed='top' variant='dark' className='navbar'  expand='md'>
             <Container>
             <Navbar.Brand href="#" className='brand fw-bold'>
              <h1><strong>Portfolio</strong></h1>
             </Navbar.Brand>
             <Navbar.Toggle aria-controls='my-nav'/>
             <Navbar.Collapse id='my-nav'>
             <Nav className='content'>
              <Nav.Link href="#about"><h5>About Me!</h5></Nav.Link>
              
              <Nav.Link href="#skills"><h5>Skills</h5></Nav.Link>
              <Nav.Link href="#contact"><h5>Contact</h5></Nav.Link>
              <NavDropdown title={"Profiles"}  className='drop'>
                <NavDropdown.Item href='https://github.com/priyanshuC123'><BsGithub size={35} className='icons'/>Github</NavDropdown.Item>
                <NavDropdown.Item href='https://www.linkedin.com/in/priyanshu-choudhary-44b49a254/'><CiLinkedin size={35} className='icons'/>LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href='https://www.instagram.com/pr_iyans_hu/'><FiInstagram size={35} className='icons'/>Instagram</NavDropdown.Item>
              </NavDropdown>
             </Nav>
           <Nav className='content1'>
               <Nav.Link>
                 <a href="../../assets/121BM0731_Priyanshu_Biomedical.pdf" download="121BM0731_Priyanshu_Biomedical.pdf" className='download_cv btn btn-outline-secondary'>
                 Download CV
                </a>
             </Nav.Link>
          </Nav>


             </Navbar.Collapse>
             </Container>
           </Navbar>
        </Col>
       </Row>
    </Container>
    </section>
   
    
  )
}

export default NaVbar
