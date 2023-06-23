import React from 'react'
import {visions }from "../constant/value"
import Button from './button'
import {AiFillPlusCircle} from "react-icons/ai"
import imgTwo from "../assets/images/BANNER 02.png"
import imgOne from "../assets/images/BANNER 04.png"
import imgThree from "../assets/images/BANNER.png"
import imgCar1 from "../assets/images/Rectangle 8 (1).png"
import imgCard2 from "../assets/images/Rectangle 8 (2).png"
import imgCard3 from "../assets/images/Rectangle 8.png"
const About = () => {
  return (
    <>
    <div className='about-container' id='about'>
        <div className='about-vector1'>
            
        </div>
        <div className='about-content'> 
        <h2>ABOUT Lorem ipsum</h2>
        <div className='like-line'></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br /> <br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      
    </div>
    <div className='value-section' id='about'>
        {visions.map((vision)=>(
  <div className='mission'>
  <h2>{vision.h2}</h2>
  <div className='like-line'></div>
  <p>{vision.p}</p>

</div>
        ))}
  </div>
  <div className='bland' id='gallery'>
    <div style={{width:"30%"}}>
  <h2>Tellus erat aliquam blandit etiam</h2>
        <div className='like-line'></div>
        </div>
        <div className='bland-images'>
        <div className='bland-item'> <img src={imgOne} alt="" /></div>
        <div className='bland-item'> <img src={imgTwo} alt="" /></div>
        <div className='bland-item'> <img src={imgThree} alt="" /></div>
        </div>
        
  </div>
  <div className='partners-section' id='blog'>
  <div className='about-vector'>
            
            </div>
            <div className='partner-conent'>
<div>
<h2>Lorem ipsum dolor sit consectetur.</h2> <p>Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
<button className='btn-own'>lorem ipsm</button>
</div>
<div>
<h2>Lorem ipsum dolor sit consectetur.</h2> <p>Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
<button className='btn-own' style={{background:"transparent", border:" 1px solid white", color:"white"}}>lorem ipsm</button>
</div>
            </div>
            <div className='about-vector2'>
            
            </div>
  </div>
  <div className='story-section' id='blog'>
    <div style={{width:"30%"}}>
  <h2>Latest stories and Updates</h2>
        <div className='like-line'></div>
        </div>
        <div className='stories-content'>
        <div className='story-item'>
            <img src={imgCard3} alt="" />
            <h3>Blandit dolor eu enim ac nisl enim sed diam. </h3>
            <p>Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p>
           <p className='card-icon'><AiFillPlusCircle/></p> 
        </div>
        <div className='story-item'>
        <img src={imgCar1} alt="" />
            <h3>Blandit dolor eu enim ac nisl enim sed diam. </h3>
            <p>Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p>
           <p className='card-icon'><AiFillPlusCircle/></p> 
        </div>
        <div className='story-item'>
        <img src={imgCard2} alt="" />
            <h3>Blandit dolor eu enim ac nisl enim sed diam. </h3>
            <p>Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p>
        
           <p className='card-icon'> <AiFillPlusCircle/></p>
            </div>
        </div>
        <button className="btn btn-two">lorem ipsm</button>
  </div>
  
    </>
  )
}

export default About
