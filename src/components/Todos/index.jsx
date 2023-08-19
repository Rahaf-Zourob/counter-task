import React, { useReducer } from "react";
import Counter from "../Counter";
import { counterdata } from "../mock/CounterData";
import { CounterAction } from '../mock/CouterActions'

const reducer = (state, action) => {
    switch (action.type) {
        case CounterAction.INCREASE:
            return state.map((count) => {
                if (count.id === action.payload.id) {
                    return {
                        ...count,
                        num: count.num + action.payload.amount,
                    };
                }
                return count;
            });
        case CounterAction.DECREASE:
            return state.map((count) => {
                if (count.id === action.payload.id && count.num > 0) {
                    return {
                        ...count,
                        num: count.num - action.payload.amount,
                    };
                }
                return count;
            });
        default:
            return state;
    }
};

export default function Todos() {
    const [counter, dispatch] = useReducer(reducer, counterdata);
    const increment = (id, amount) => dispatch({ type: 'INCREASE', payload: { id, amount } })
    const decrement = (id, amount) => dispatch({ type: 'DECREASE', payload: { id, amount } })
    const total = () => {
        const clctotal = counter.reduce((accumulator, count) => {
            return accumulator + count.num;
        }, 0);

        return clctotal;
    }
    return (
        <div>
            {counter.map((count) => (
                <Counter
                    key={count.id}
                    id={count.id}
                    num={count.num}
                    amount={count.amount}
                    increment={increment}
                    decrement={decrement}
                />
            ))}
            <span style={{
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center"
            }}>{total() > 0 && total()}</span>
        </div>
    );
}
