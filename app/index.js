// Your code here!
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  constructor() {
    super()
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(state => ({ count: state.count +1 }));
  }

  decrement() {
    this.setState(state => ({ count: state.count -1 }));
  }

  render() {
    return (
      <div id="counter">
        <div id="navbar">
          Counter.js
        </div>
        <div id="counter">
          <button onClick={this.increment}>+</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
