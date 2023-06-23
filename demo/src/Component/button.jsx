import React from 'react'
import "./index.css"
const Button = ({btnName, color, borders}) => {
  return (
    <div>
      <button className="btn" style={{backgroundColor: `${color}`, border:`${borders}`}}>{btnName}</button>
    </div>
  )
}

export default Button
