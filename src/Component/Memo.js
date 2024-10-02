import React, { useState } from 'react'
import ReactDom  from 'react-dom'


const Memo = () => {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(val => ({...val, [name]: value}));
    }

        const Submit = (event)=>{
            event.preventDefault();
           // alert(inputs);
            console.log(inputs);
        }
    
  return (
    <form onSubmit={Submit}>
        <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>
        <input type="number" name="age" value={inputs.age ||  ""} onChange={handleChange}/>

        <label><input type='submit'/></label>


    </form>
  )
}

export default Memo
