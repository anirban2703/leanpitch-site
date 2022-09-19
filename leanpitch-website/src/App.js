import './App.css';
import Blogs from './components/Blogs';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Pmspeak from './components/Pmspeak';
import Productlab from './components/Productlab';
import Training from './components/Training';
import Videos from './components/Videos';
import Whymatter from './components/Whymatter';


import { trainingData} from './AllData/trainingData.js'
import {videosData} from './AllData/videosData.js'
import {pmData} from './AllData/pmData.js'
import {blogsData} from './AllData/blogData.js'
import Meetup from './components/Meetup';
import Webinars from './components/Webinars';
import Conf from './components/Conf';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContainer/>
      <Whymatter/>
      <Productlab/>
      <h1>Our Training</h1>
      <Training trainingData={trainingData}/>
      <h1>Our Meetups</h1>
      <div style={{
        margin:'3rem'
      }}>
        <span style={{
          fontSize:'2rem',
          color:'white',
          backgroundColor:'black',
          padding:'0.5rem',
          margin:'2rem 0 2rem 2rem'
          }}>Upcoming</span>
        <span
        style={{
          fontSize:'2rem',
          color:'black',
          border:'2px solid black',
          padding:'0.38rem',
          margin:'2rem 2rem 2rem 0'
          }}
        >Past</span>
      </div>
      <Meetup/>
      <h1>Our Webinars</h1>
      <div style={{
        margin:'3rem'
      }}>
        <span style={{
          fontSize:'2rem',
          color:'white',
          backgroundColor:'black',
          padding:'0.5rem',
          margin:'2rem 0 2rem 2rem'
          }}>Upcoming</span>
        <span
        style={{
          fontSize:'2rem',
          color:'black',
          border:'2px solid black',
          padding:'0.38rem',
          margin:'2rem 2rem 2rem 0'
          }}
        >Past</span>
      </div>
      <Webinars/>
      <div style={{ backgroundColor:'black',padding:'4rem 2rem'}}>
      <h1 style={{color:'white'}}>Our Conference</h1>
      <Conf/>
      </div>
      <h1>Videos</h1>
      <Videos videosData={videosData}/>
      <Pmspeak pmData={pmData}/>
      <Blogs blogsData={blogsData}/>
      
    </div>
  );
}

export default App;
