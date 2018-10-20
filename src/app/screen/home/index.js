import {Component} from "react";
import React from "react";

class Home extends Component {
    render() {
        const {increment, decrement, reset, count} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Home</h1>
                    <p>{count}</p>
                    <div>
                        <button onClick={increment.bind(this)}>Increment</button>
                        <button onClick={decrement.bind(this)}>Decrement</button>
                    </div>
                    <div>
                        <button onClick={reset.bind(this)}>Reset</button>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;