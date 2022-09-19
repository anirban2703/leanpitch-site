import React,{useEffect, useState} from 'react'
import '../styles/maincontainer.css'

import Training from './Training'
import Meetup from './Meetup'
import Conf from './Conf'
import Blogs from './Blogs'
import Pmspeak from './Pmspeak'
import Videos from './Videos'
import Webinars from './Webinars'

import { trainingData} from '../AllData/trainingData.js'
import { videosData} from '../AllData/videosData.js'
import { pmData} from '../AllData/pmData.js'
import { blogsData } from '../AllData/blogData.js'


const MainContainer = () => {
  const [currData, setCurrData] = useState([])
  const [typeData, setTypeData] = useState('null')
  const [comp, setcomp] = useState();

  useEffect(()=>{
    if(typeData==='training'){setcomp(<Training trainingData={trainingData}/>)}
    else if(typeData === 'meetups'){setcomp(<Meetup/>)}
    else if(typeData === 'webinars'){setcomp(<Webinars/>)}
    else if(typeData === 'conf'){setcomp(<Conf/>)}
    else if(typeData === 'videos'){setcomp(<Videos  videosData={videosData}/>)}
    else if(typeData === 'pm'){setcomp(<Pmspeak pmData={pmData}/>)}
    else if(typeData === 'blog'){setcomp(<Blogs blogsData={blogsData}/>)}

  },[typeData])
  



  return (
    <div className='container'>
      <div className="leftsidebar">
        <ul>
            <li onMouseEnter={()=>{setCurrData(trainingData);setTypeData('training')}}>Trainings</li>
            <li onMouseEnter={()=>{setTypeData('meetups')}}>Meetups</li>
            <li onMouseEnter={()=>{setTypeData('webinars')}}>Webinars</li>
            <li onMouseEnter={()=>{setTypeData('conf')}}>Conference</li>
            <li onMouseEnter={()=>{setCurrData(videosData);setTypeData('videos')}}>Vedios</li>
            <li onMouseEnter={()=>{setCurrData(pmData);setTypeData('pm')}}>PM Speak Series</li>
            <li onMouseEnter={()=>{setCurrData(blogsData);setTypeData('blog')}}>Blogs</li>
            <li >Podcasts</li>
            <li>Be A Speaker</li>
            <li>Be A Volunteer</li>
            <li>About Us</li>
        </ul>
      </div>

      <div className="rightsidebar">
           {
             comp
           }
      </div>
    </div>
  )
}

export default MainContainer
