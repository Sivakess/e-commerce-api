import React, { Component } from "react";

// function Carr() {
//     const shoot =(a) => {
//         alert(a);
//     }
//     return(
//         <button onClick={()=> shoot(4*7)}>Click Here</button>
//     );
// };

// 


class Carr extends Component{
    constructor(props){
        super(props);
        this.state = {
            result:0
        }
    }
    shoot(a) {
        this.setState({ result: a * 7 }, () => {
          alert(this.state.result);
        });
      }
    
      render() {
        return (
          <div>
            <button onClick={() => this.shoot(5)}>Shoot</button>
            <p>Result: {this.state.result}</p>
          </div>
        );
      }
    }



export default Carr;





