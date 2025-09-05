import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState("")

  return (
    <div>
      <Card name={name} setName={setName}/>
      <p>I am in Parent component where name = {name}</p>
    </div>
  )
}

export default App
