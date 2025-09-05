import React, { useContext } from 'react'
// import { UserContext } from '../App'
import {ThemeContext} from '../App'

const ChildC = () => {
    // const file = useContext(UserContext);
      const {theme, setTheme} = useContext(ThemeContext);

      function handleClick(){
        setTheme(theme === 'light' ? 'dark' : 'light');
      }
  return (
    <>
        {/* <h1>Data from parent : </h1>
        <h2>Name : {file.name}</h2>
        <h2>email : {file.email}</h2>
        <h2>Age : {file.age}</h2>
        <h2>Phone : {file.phone}</h2> */}
        <button onClick={handleClick}>
          Change theme
        </button>
    </>
  )
}

export default ChildC
