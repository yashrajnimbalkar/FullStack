import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type="text" onChange={(e)=>{props.setName(e.target.value)}} />
        <p>I am in child component, where name = {props.name}</p> 
    </div>
  )
}

export default Card