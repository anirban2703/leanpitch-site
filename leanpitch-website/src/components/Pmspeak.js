import React from 'react'
import '../styles/pmspeak.css'

const Pmspeak = ({pmData}) => {
    
  return (
    <div>
      <h1 className='pmspeak-heading'>PM Speak Series</h1>
      <div className="pm-cards">
        {
            pmData.map((data,index) =>(
                <div key ={index}className="pm-card">
                <img src={data.imgUrl} alt="" srcset="" />
            </div>
            ))
        }
      </div>
    </div>
  )
}

export default Pmspeak
