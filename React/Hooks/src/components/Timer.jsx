import React, { useState, useEffect } from 'react'

const Timer = () => {

    const[count, updatecount]=useState(0);


    useEffect(() => {
        const IntervalId = setInterval(()=>{
            updatecount(count + 1);

        },1000);
    
      return () => {
        console.log("Time to stop");
        clearInterval(IntervalId);
      }
    }, [count])
    

  return (
    <div>
        <h1>Time : {count} </h1>
    </div>
  )
}

export default Timer