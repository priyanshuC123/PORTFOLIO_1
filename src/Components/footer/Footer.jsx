import React from 'react'
import './Footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <section id="footer">
    <footer>
      <a href="#" className="footer_logo"></a>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/priyanshu-choudhary-44b49a254/" target="_blank"><AiFillLinkedin size={30} className='icons1'/></a>
        <a href="https://github.com/priyanshuC123" target="_blank"><AiFillGithub size={30} className='icons1'/></a>
        <a href="https://www.instagram.com/pr_iyans_hu/" target="_blank"><BsInstagram size={30} className='icons1'/></a>
        <h4 className='footer_content'>@copyrights; All Rights Reserved</h4>
    </div>

    </footer>
    </section>
  )
}

export default Footer