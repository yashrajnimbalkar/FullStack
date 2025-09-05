import { useState, useEffect } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
  // const [count, setCount] = useState(0)
  // const [target, targetchange] = useState(0)


  // function handlecount(){
  //   setCount(count + 1)
  // }

  // function handletarget(){
  //   targetchange(target + 1)
  // }



  //UseSffect hook vatiations
  //variation 1
  // useEffect(() => {
  //   alert("I will run on every render");
  // })
  
  //Variation 2
  // useEffect(() => {
  //   alert("I will run on first render")
  // }, [])

  //variation 3
  // useEffect(() => {
  //   alert("I will run when count is updated")
  // }, [count])

  //variation 4
  // useEffect(() => {
  //   alert("Run when count or target changes")
  
  // }, [count, target])

  //vasriatoin 5
  // useEffect(() => {
  //   alert("updated count")
  
  //   return () => {
  //     alert("Purana count bye bye")
  //   }
  // }, [count])
  
  
  

  return (
    // <>
    //   <button onClick={handlecount}>click me</button>
    //   <p>count is : {count}</p>
    //   <button onClick={handletarget}>click me</button>
    //   <p>target is : {target}</p>
    // </>

    <>
    <Timer/>
    </>
  )
}

export default App
