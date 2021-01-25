import React, {Component} from "react";

class Counter extends Component{

    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
    }

    Increment =() =>{
        this.setState({
            count: this.state.count +1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }



   render(){ return (
        <div className="App">
            <p>This is our current count : {this.state.count}</p>
            <button onClick={this.Increment}>Increment</button>  
            <button onClick={this.decrement}>Decrement</button>
        </div>
      );}

}

export default Counter;