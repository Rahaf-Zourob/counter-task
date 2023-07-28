import React from "react";
import "./style.css";
function Counter({increment,decrement,num,id,amount}) {
    return (
      <div className="counter">
        <span>{num}</span>
        <button className="increment" onClick={()=>increment(id,amount)}>+</button>
        <button className="decrement" onClick={()=>decrement(id,amount)}>-</button>
      </div>
    );
  }
export default Counter;
