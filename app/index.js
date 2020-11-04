// Your code here!
import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  render() {
    return (
      <div id="counter">
        <div id="navbar">
          Counter.js
        </div>
        <div id="counter">
          <h1>0</h1>
          <button>Increment</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
