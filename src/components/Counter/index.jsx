import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
    render(){
        const{increment,decrement,num,id,amount}=this.props
    return (
      <div className="counter">
        <span>{num}</span>
        <button className="increment" onClick={()=>increment(id,amount)}>+</button>
        <button className="decrement" onClick={()=>decrement(id,amount)}>-</button>
      </div>
    );
  }}

export default Counter;
