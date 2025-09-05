import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/dashboard')
    }

  return (
    <div>
        <Navbar/>
        <h1>About Page</h1>
        <br />
        <button onClick={handleClick}>Go to Dasboard</button>
    </div>
  )
}

export default About