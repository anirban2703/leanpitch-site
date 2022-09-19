import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import '../styles/productlab.css'


const Productlab = () => {
  return (
    <div className='main-container'>
    <div className="descriptions">
        <h1>Product Thinking Labs</h1>
        <p>Product Thinking Community introduces PT Labs powered by Leanpitch. Product Managers are creative thinkers and life long researchers. Their curiosity to understand the problem, persistence to solve them, and empathy to make the solutions easy makes them resourceful in solving Social Problems.</p>
        <p>If you have it in you and are looking for an opportunity to contribute back to society, join PT Labs. Become part of a product team of volunteers, pickup a social problem, swarm together, design, and run experiments to find a problem/solution fit. Present your discovery and be recognized at next Product Thinking Conference. Product Thinking community will pursue further on implementing a solution in the subsequent cohorts, which you can again be part of.</p>
        <p><b>Share your interest by submitting your details. We will get back to you with more information.</b></p>
        <div className="btns">
         <button>View Details <FaArrowRight/></button>    
         <button>Register Now <FaArrowRight/></button>    
        </div>    
    </div>
    <img src="https://productthinking.io/static/media/pt_lab_image.7cb52e48.png" alt="" srcset="" />
    </div>
  )
}

export default Productlab
