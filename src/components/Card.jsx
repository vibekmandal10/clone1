import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'
const Card = (props) => {
  
  return (
    <div className='cards'>
        <div className='card'> 
        <img src={props.img} alt="" />
        
        <Link to={props.url ? props.url: "/hello"}>See More</Link>
        </div>
        
    </div>
  )
}

export default Card