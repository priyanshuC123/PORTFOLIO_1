import React from 'react'
import './Skills.css'
import NIT from '../../assets/skills.png'

function Skills() {
  return (
    <section id="skills">
       <h5>My</h5> 
    <h1>Skills</h1>
    
    <div className="skills_sec">
         
        <div className="skills_content">
        <ul>
            <li>
                 <h4 className='bold'>Programming languages :</h4><h4> C, C++, HTML, CSS, JavaScript</h4>
                 
            </li>
            <li>
                 <h4 className='bold'>Familiar languages :</h4><h4> python </h4>
            </li>
            <li>
                 <h4 className='bold'>Software Tools/Packages :</h4><h4> Jupyter Notebook. </h4>
            </li>
            <li>
                 <h4 className='bold'>Libraries And Frameworks :</h4><h4> Numpy, Pandas, Sklearn, Matplotlib, Node.js, Express.js, React. </h4>
            </li>
        </ul>
       
      </div>
     
     <div className="skill_image" >
          <img src={NIT} alt="image.png" />
     </div>
      
    </div>

    </section>
    
  )
}

export default Skills