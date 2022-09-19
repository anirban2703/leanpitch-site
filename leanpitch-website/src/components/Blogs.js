import React from 'react'
import '../styles/blogs.css'

const Blogs = ({blogsData}) => {

    

  return (
    <div className='blog-container'>
      <h1>Blogs</h1>
      <div className="blog-cards">
        {
            blogsData.map((data,index)=>(
                <div key={index} className="blog-card">
                <img src={data.imgurl} alt="" srcset="" />
                <div className="blog-desc">
                <p>{data.title}</p>
                <small>By Jayaprakash D B</small>
                </div>
            </div>
            ))
        }
      </div>
    </div>
  )
}

export default Blogs
