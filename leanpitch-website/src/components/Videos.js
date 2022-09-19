import React from 'react'
import '../styles/videos.css'

const Videos = ({videosData}) => {
  
  return (
    <div className='videos-container'>
      <div className="videos-cards">
        {
            videosData.map((data,index)=>(
              <div key={index}className="video-card">
                <img src={data.imgUrl} alt="" srcset="" />
              </div>
            ))
        }
        
      </div>
    </div>
  )
}

export default Videos
