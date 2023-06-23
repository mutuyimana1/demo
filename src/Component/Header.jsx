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
    <li className='nav-item'><a href="#home">Home</a> </li>
    <li className='nav-item'> <a href="#gallery">Gallery</a> </li>
    <li className='nav-item'> <a href="#about">About us</a> </li>
    <li className='nav-item'> <a href="#contact">Contact</a> </li>
    <li className='nav-item' > <a href="#blog"> Blog</a></li>
    
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
