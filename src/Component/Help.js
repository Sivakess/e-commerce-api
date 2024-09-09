import React from 'react'

class Help extends React.Component {
    constructor(){
        super();

        this.state ={
            student:
                {rollno:'101',
                gname:'Rahul',
                age:20,
                address:'Delhi',}                    
        }
    }
    render(){
    const handleSubmit = (event) => {
        event.preventDefault();
        

      }
  return (
    <>

    <form >
        <input  type="text" name="address" value={this.state.student.address} onChange={this.changeHandler}  placeholder="Enter Your address"/>

        <input type='submit' onChange={(event)=>this.setState()} />
        <p>{this.state.student.address}</p>

    </form>
    
    
    
    </>
  )}
}

export default Help;
