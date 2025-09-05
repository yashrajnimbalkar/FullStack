import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    function handleChange(e){
      console.log("Value in input : ",e.target.value);
    }

    function handleSubmit(e){
      e.preventDefault();
      alert("submit krdu kya");
    }
  return (
    <div>
    <form onClick={handleSubmit}>
      <input type="text" onChange={handleChange}/>
      <button  type='submit'>submit</button> 
    </form>
      
    </div>
  )
}

export default App
