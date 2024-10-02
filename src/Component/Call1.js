import React, { useState } from 'react'
import { useEffect } from 'react';

const Call1 = () => {

    const [count, setCount] = useState([{}]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos/')
         .then(response => response.json())
         .then(json => setCount(json))
        
     },[]);

  return (


    <table >
        
          <tr>

      <th > <td> ID {count.map((hello) =>      <p>{hello.id}</p>)}   </td></th>
      <th > <td>USER ID {count.map((hello) =>  <p>{hello.userId}</p>)}        </td> </th>
      <th > <td>TITLE {count.map((hello) =>   <p>{hello.title}</p>)}     </td> </th>
      <th > <td>COMPLETED {count.map((hello) => <p>{hello.completed}</p>)}</td> </th>
      
        </tr>

    </table>
  )
}

export default Call1
