import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value =5) =>{
    setCounter(counter+ value)
  }
  const decrement = (value = 5) =>{
   if (counter===1) return
    setCounter(counter- value)
  }
  const reset = () =>{
    setCounter(initialValue)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  };
};
