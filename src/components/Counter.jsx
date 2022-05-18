import React, { useState } from "react";


import "../style.modules.css"




const Counter = ({initialValue}) => {
  // hook use useState

  const [count, setCount] = useState(initialValue);

  const handleClick = (e) =>{
 
    if(e.target.name === "Increment"){
        setCount(count + 1)
    }
    else{
        if(e.target.name === "Double")
        {
            setCount(count * 2)
        }
        else{
            setCount(count - 1)
        }
    }
   

  }


  return (
    <div>
      <h1 className={count% 2 === 0 ? "green" : "red"}>Counter App: {count}</h1>
      <button name= "Increment" onClick={handleClick}>Increment</button>
      <button name= "Decrement" onClick={handleClick}>Decrement</button>
      <button name= "Double" onClick={handleClick}>Double</button>
    </div>
  );
};

export default Counter;
