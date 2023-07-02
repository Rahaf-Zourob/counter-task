import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
    state = {
      count: this.props.num
    };
  render() {
    const { amount } = this.props;
    const increment = (amount) => {
      this.setState(prevState => ({
        count: prevState.count + amount
      }));
    };

    const decrement = (amount) => {
      if (!(this.state.count <= 0)) {
        this.setState(prevState => ({
          count: prevState.count - amount
        }));
      }
    };

    return (
      <div>
        <span>{this.state.count}</span>
        <button className="increment" onClick={()=>increment(amount)}>+</button>
        <button className="decrement" onClick={()=>decrement(amount)}>-</button>
      </div>
    );
  }
}

export default Counter;
