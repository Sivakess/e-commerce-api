import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";



function Call() {

  const [count,setCount] =  useState({});



  useEffect(() => {

     fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setCount(json))
     
  });

  return(
    <>
 
    <h1>{count.id}</h1>

    </>
  )
  
}

 
export default Call;
