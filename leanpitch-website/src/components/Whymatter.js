import React from 'react'
import '../styles/whywematter.css'
import { FaArrowRight } from "react-icons/fa";


const Whymatter = () => {
  return (
    <div className='main-conatiner'>
        <div className="headings">
            <h1>Why We Matter?</h1>
            <img src="https://productthinking.io/static/media/red_arrow.e4904151.webp" alt="" srcset="" />
        </div>
        <div className="content">
            <div className="description">
                <h2>Creative Thinking for creating an impact!</h2>
                <p>Product thinking is problem solving. Whether it’s your kid asking for a solution to his day to day problems or the rise in threats of Global Warming, it’s evident that the whole human kind needs to be product thinkers. We, at Product Thinking community, strive to provide such a platform for practitioners to come together and learn from each other about the craft of building products. This Platform is run by the community for the community. We are a community with 46k+ product thinkers hosting various events across India: Webinars every week, meet-ups every month in every city, two conference a year.</p>
            </div>
            <div className="video">   
             <iframe width="560" height="315" src="https://www.youtube.com/embed/GSeAwbVnuwU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
        </div>
        <button>Join Our Community <FaArrowRight/></button>
    
    </div>
  )
}

export default Whymatter
