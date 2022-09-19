import React from 'react'
import '../styles/training.css'

const Training = ({trainingData}) => {



  return (
    <div className='main-tariningcontainers'>
      <div className="cards">
        {
            trainingData.map((data,index)=>(
                <div key={index} className="card" style={{backgroundColor:`#${data.bgColor}`}}>
                <div>
                <img src={data.logo} alt="" srcset="" />
                </div>
                <h4>{data.title}</h4>
                <div className="timings">
                    <small>Upcomming Trainings</small>
                    <h3>{data.timimg}</h3>
                </div>
                <button>Register</button>
            </div>
            ))
        }

      </div>
    </div>
  )
}

export default Training
