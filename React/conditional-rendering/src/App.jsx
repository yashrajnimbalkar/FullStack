import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  const [isLogin, setLogin] = useState(false);

  
  
    
  


  //1
  // if(isLogin)
  // {
  //   return(<Logout/> )
  // }
  // else{
  //   return(<Login/>)
  // }


  //2
  // return(
  //   <div>
  //     {isLogin ? <Logout/> : <Login/>}
  //   </div>
  // )


  
  //3
  // if(!isLogin){
  //   return(<Login/>) 
  // } return(isLogin && <Logout/>)
  
}

export default App
