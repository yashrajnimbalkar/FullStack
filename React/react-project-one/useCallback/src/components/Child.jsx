import React from 'react'

const Child = React.memo((props) => {
    console.log("In the child");
  return (  
    <div>
        <button>{props.name}</button>
    </div>
  )
})

export default Child