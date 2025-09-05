import { useState } from 'react'
import './App.css'
import Child from './components/Child'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleclick = useCallback(()=>{
    setCount(count + 1)
  }, [])

  return (
    <>
      <p>Count {count}</p>
      <button onClick={handleclick}>Increament</button>

      <Child name="Click me" handleclick={handleclick}/>
    </>
  )
}

export default App
