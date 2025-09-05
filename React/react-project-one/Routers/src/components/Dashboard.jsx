import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/')
    }

  return (
    <div>
        <Navbar/>
        <h1>Dashboard Page</h1>
        <br />
        <button onClick={handleClick}>Go to Home</button>
        <Outlet />
    </div>
  )
}

export default Dashboard