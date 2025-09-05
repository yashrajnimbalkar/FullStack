import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const[time, setTime] = useState(0);

  let n = useRef(0);
  let color = useRef();
  let timeRef = useRef();

  function increment(){
    setCount(count + 1)
  }

  useEffect(() => {
    n.current = n.current + 1;
    console.log("The value of n is :", n.current);
  })
  
  function changeColor(){
    color.current.style.backgroundColor = "red"
  }

  function startTime(){
    timeRef.current = setInterval(()=>{
        setTime(time => time+1);
      },1000);
  }
  function stopTime(){
    clearInterval(timeRef.current);
    timeRef.current = null;

  }
  function resetTime(){
    stopTime();
    setTime(0);

  }

  return (
    <>
      <p>count is {count}</p>
      <button  ref={color} onClick={increment}>Increment</button>
      <br />
      <button onClick={changeColor}>Change the color of upper button</button>
      <br /><br /><br />

      <p> Time : {time} sec</p>
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>Stop</button>
      <button onClick={resetTime}>Reset</button>
    </>
  )
}

export default App
