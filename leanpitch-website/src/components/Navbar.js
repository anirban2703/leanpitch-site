import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-comp'>
      <div className="logo">
        <img src="https://productthinking.io/static/media/productwhite.c1e4d670.webp" alt="company-logo" srcset="" />
        <h2>Product Thinking</h2>
      </div>
      <div className="subs">
        <div className="subscribe">Subscribe</div>
        <div className="contact-us">Contact Us</div>
      </div>
    </div>
  )
}

export default Navbar
