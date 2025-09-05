import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/About')
    }

  return (
    <div>
        <Navbar/>
        <h1>Home Page</h1>
        <br />
        <button onClick={handleClick}>Go to About</button>
    </div>
  )
}

export default Home