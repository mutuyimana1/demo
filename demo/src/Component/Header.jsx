import React from 'react'
import {FiSearch} from "react-icons/fi"
import {FaRegUser, FaSearch} from "react-icons/fa";
import {TiShoppingCart} from "react-icons/ti";
import "./index.css"
import Button from './button';
const Header = () => {
  return (
    <>
    <div className='header-container'>
      <nav className='nav'>
      
<ul className='nav-items'>
    <li className='nav-item'>Home</li>
    <li className='nav-item'>Gallery</li>
    <li className='nav-item'>About us</li>
    <li className='nav-item'>Contact</li>
    <li className='nav-item'>Blog</li>
    
    </ul>
    <ul className='nav-icons'>
<li className='list-icon icon-cart1'> <FiSearch/> </li>
<li className='list-icon icon-cart2'> <FaRegUser/> </li>
<li className='list-icon icon-cart3'> <TiShoppingCart/> </li>
    </ul>
      </nav>  
      <div className='hard'>
        <h1>Lorem ipsum, dolor sit amet consectetur. volutpat.</h1>
      <Button btnName={"lorem ipsum"} color={"rgba(155, 208, 48, 1)"}/>
      </div>
    </div>
    
    </>
  )
}

export default Header
