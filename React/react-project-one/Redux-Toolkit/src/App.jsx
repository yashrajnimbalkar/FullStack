import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/CounterSlice'

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  function handleincreament(){
    dispatch(increment())
  }
  function handledecreament(){
    dispatch(decrement())
  }
  function handleReset(){
    dispatch(reset());
  }
  function handleincrementByAmount(){
    dispatch (incrementByAmount(amount));
  }
  return (
    
    <div className="container">
      <button onClick={handleincreament}>+</button>
      <p>Count : {count}</p>
      <button onClick={handledecreament}>-</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <input type="Number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
      <button onClick={handleincrementByAmount}>Add</button>
    </div>
      
    
  )
}

export default App
