import React from 'react'
import './Footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo"></a>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/priyanshu-choudhary-44b49a254/" target="_blank"><AiFillLinkedin className='icons'/></a>
        <a href="https://github.com/priyanshuC123" target="_blank"><AiFillGithub className='icons'/></a>
        <a href="https://www.instagram.com/pr_iyans_hu/" target="_blank"><BsInstagram className='icons'/></a>
        <h4>@copyrights; All Rights Reserved</h4>
    </div>

    </footer>
  )
}

export default Footer