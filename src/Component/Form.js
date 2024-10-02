import { useState } from "react"
import React  from 'react'
import Dom from './Dom'

const Form = () => {
    
  const[myCar, setMyCar ]= useState("BMW")

  const handleChange = (event)=>{
    setMyCar(event.target.value)
  }

  return (
    <>
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="BENZ">BENZ</option>
        <option value="AUDI">AUDI</option>
        <option value="BMW">BMW</option>
        <option value="ROLLSROYS">ROLLSROYS</option>
        <option value="JAQUAR">JAQUAR</option>
        <option value="FERAARI">FERAARI</option>

       

      </select>
     

      <h1> My car is {myCar}</ h1>
      
      </form>
      <Dom value={myCar}/>
      </>
     

    
  )
  
}

export default Form
