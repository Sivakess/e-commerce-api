import React from "react";
import './File.css';
import Tamil from "./text";




class Car extends React.Component {
   constructor(props){
    super(props);

    this.state  = {
        details:[
        {fname:'ajay',place:'tbm',age:22,gender:'Male'},
        {fname:'gopi',place:'tbm',age:22,gender:'Male'},
        {fname:'muthu',place:'tbm',age:22,gender:'Male'}
        ]

    }
   }
   render(){
    return (<div className="">
        <h1>Details</h1>
        {/* <hr /> */}
        {this.state.details.map((details,index)=>{
            
            return(
                <div key={index} className="container">
                     <h2>fname:{details.fname}</h2>
                     <h2>place:{details.place}</h2>
                     <h2>age:{details.age}</h2>
                     <h2>gender:{details.gender}</h2>
                    
                </div>
            )

        })}

<Tamil value = {this.state.details.fname}/>

    </div>
    )
   }
}

export default Car;