import React, { useState } from 'react'

function Hire ()  {
//     const[color,setcolor] = useState('red')
//     const [name, setName] = useState('hari')
//     const [age, setAge] = useState('21')

//   return (
//     <>
//     <h1>hi i'm  {name}  clg student  {age} years old</h1>

    
    
    
//     </>
//   )

const [student,setStudent] = useState({
    fname:'Hari',
    age:'21',
    email:'hari@gmail.com',
    phone:'6048641809',
    address:'128,east street,tambaram'
});


const updateStudent  = () => {
    setStudent(change =>  {
return{ ...change, fname:"Ravi",age:"20" , email:"ayyavu@gmail.com" }  
    });
    
   
}
return (
  <>
  <h1>hello   {student.fname} ,  {student.age} years old ,  {student.email} , {student.phone} , {student.address}</h1>

<button onClick={updateStudent}> update</button>


  </>  
)
}

export default Hire;
