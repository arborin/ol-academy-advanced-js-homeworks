import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    
    
    handleUpdateCounter = (value) => {
        this.setState({count: this.state.count + value});
    }
    
    handleIncrement = () => {
        this.handleUpdateCounter(1);
    }
    
    handleDecrement = () => {
        this.handleUpdateCounter(-1);
    }
    
    render(){
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                {this.state.count >= 10 ? (<p>MAGIC!</p>) : (<p>CLICK!</p>)}
            </div>
        )
    }
}

export default Counter;