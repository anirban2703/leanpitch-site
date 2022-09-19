import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Conf = () => {
  return (
    <div 
     style={{
        width:'100%',
        color:'red',
        fontSize:'1.5rem'
     }}
    >
      <p>Conferences are not just about learning from the speakers. It’s also about meeting new people, learning from attendees, making connections, getting to know each other and being part of a community.</p>
    <p>Having hosted the conference online last year and after close consultation with the community, speakers, exhibitors and event partners, we have decided to host our next conference in person to make it more effective.</p>
    <p>We will be back with more information once COVID subsides</p>
    <button
    style={{
       width:'20rem',
       height:'3rem',
       marginTop:'2rem',
       borderRadius:'2rem',
       outline:'none',
       border:'none',
       fontSize:'1.25rem',
       fontWeight:'600',
       textAlign:'center',
       backgroundColor:'red',
       color:'#fff'
    }}
    >Notify Me
    <FaArrowRight/>
    </button>
    </div>
  )
}

export default Conf
