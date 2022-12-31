import React from 'react'
import './About.css'
import Nit from '../../assets/aboutimg.png'

export const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h1>About me</h1>
    
    <div className="about_sec">
        <div className="about_content">
        <h4>Hey there! I'm Priyanshu Choudhary, a student at the National Institute of Technology, Rourkela from the branch of Biomedical Engg. When I'm not busy crushing it in the world of programming and web development, you can find me binging a new series or movie or just chilling on youtube . I am also a huge football fan and often try to follow and get updated on daily football. I also belive in keeping your mind in top shape for better prodductivity, so you can often catch me reading a book or relaxing. In my free time, I love tinkering with linkin for opportunities, and most importantly I tend to always look to level up my skills. Follow me on my website as I continue to grow and learn, always striving to grow.</h4>
      
      </div>
      <div className="about_image">
           <div>
            <img src={Nit} alt="image.png" />
           </div>
      </div>
    </div>
    </section>
  )
}

export default About