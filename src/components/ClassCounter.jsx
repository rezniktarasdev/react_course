import { React, Component } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    };




    render() {
        return (
            <div>
                <h1>Result is {this.state.count}</h1>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.increment}>increment</button>
        </div>
        )
    }
}

export default ClassCounter;