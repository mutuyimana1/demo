import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {FaTwitter,FaLinkedinIn,FaYoutube} from "react-icons/fa"
import "./index.css"
const Footer = () => {
  return (
    <div>
      <div className='footerContainer'>
 <div className='footer-content'>
    <div>
        <h3>Subscribe to our weekly newsletter </h3>
        <input type="text" name="" id="input" placeholder='email' /> <button className='btnfnl'>Submit</button>
    </div>
    <div  className='footer-item'>
        <h3>Reach us </h3>
        <a href="">Home</a>   <br />
          <a href=""> Aboute us</a>  <br />
          <a href=""> Contact us</a>   <br />
          <a href="">  Blog</a> 
    </div>
    <div className='footer-item'>
        <h3>Be social</h3>
        
          <a href=""> <BsFacebook className='footerIcon'/> faceBook</a>   <br />
          <a href=""> <BsFacebook className='footerIcon'/> Twitter</a>  <br />
          <a href="">  <BsFacebook className='footerIcon'/> LinkedIn</a>   <br />
          <a href="">  <BsFacebook className='footerIcon'/> You tube channel</a>  
        
    </div>
    <div className='footer-item'>
        <h3>Quick Links</h3>
        <a href="">link 1</a>   <br />
          <a href=""> link 2</a>  <br />
          <a href=""> link 3</a>   <br />
          
    </div>
 </div>
 <hr className='hr'/>
 <p>© 2023 Rwanda, All right Reserved.  | Privacy policy</p>
      </div>

    </div>
  )
}

export default Footer
