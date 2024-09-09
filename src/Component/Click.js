import React from 'react'

class Click  extends React.Component  {
    constructor(props) {
        super(props);
        this.state={
            value:true
        }

}
render() {
    return (
        
            <button onClick={this.props.Click}>Click me</button>
    
        );
        }
}




export default Click;
