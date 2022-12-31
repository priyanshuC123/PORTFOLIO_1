import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xd4n5ib', 'template_u8ycgcl', form.current, 'UpmP5VfZqwryJ9PLp')
      
      e.target.reset()
        
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>

      <div className="contact_us">
        <div className="contact_content">
            <article>
              <MdOutlineEmail className='icons'/>
              <h4>Email</h4>
              <h5>priyanschoudhary100@gmail.com</h5>
              <a href="mailto:priyanschoudhary100@gmail.com">Send a message</a>
            </article>
            <article>
              <AiOutlineInstagram className='icons'/>
              <h4>Instagram DM</h4>
              <h5>pr_iyans_hu</h5>
              <a href="https://www.instagram.com/pr_iyans_hu/" target='_blank'>Send a message</a>
            </article>
            <article>
              <BsWhatsapp className='icons'/>
              <h4>WhatsApp</h4>
              <h5></h5>
              <a href="https://wa.me/918169117063" target='_blank'>Send a message</a>
            </article>
        </div>
         <div className="contact_forms">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your Full Name' required />
                <input type="email" name="email" placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
              </form>
         </div>
      </div>
    </section>
  )
}

export default Contact