import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import { useContext } from 'react'

// const UserContext = createContext();
const ThemeContext = createContext();
function App() {

  // const [file, setFile] = useState({
  //   name:"Rahul",
  //   age: 25,
  //   email: "rahul@gmail.com",
  //   phone: 8446094508,
  //   })

  const [theme, setTheme] = useState("light");
  return (
    <>
      {/* <UserContext.Provider value={file}>
          <ChildA/>
      </UserContext.Provider> */}

      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
          <ChildA/>
        </div>
        
      </ThemeContext.Provider>
     

      
    </>
  )
}

export default App
// export {UserContext}
 export {ThemeContext}
