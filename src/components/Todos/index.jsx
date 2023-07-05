import React, {Component} from "react";
import Counter from "../Counter";
import { counterdata } from "../mock/CounterData";
export default class Todos extends Component {
    state = {
        counter: counterdata,
    }
    increment = (id, amount) => {
        this.setState((prevState) => {
            const incrementcounter = prevState.counter.map((newnum) => {
                if (newnum.id === id) {
                    return {
                        ...newnum,
                        num: newnum.num + amount,
                    };
                }
                return newnum;
            });

            return {
                counter: incrementcounter,
            };
        });
    }

    decrement = (id, amount) => {
        this.setState((prevState) => {
            const decrementcounter = prevState.counter.map((newnum) => {
                if (newnum.id === id && newnum.num > 0) {
                    return {
                        ...newnum,
                        num: newnum.num - amount,
                    };
                }
                return newnum;
            });

            return {
                counter: decrementcounter,
            };
        });
    }

    total = () => {
        const clctotal = this.state.counter.reduce((accumulator, count) => {
            return accumulator + count.num;
        }, 0);

        return clctotal;
    }

    render() {
        return(
            <div>
                {this.state.counter.map((count) => (
                    <Counter
                        key={count.id} 
                        id={count.id}
                        num={count.num}
                        amount={count.amount}
                        increment={this.increment}
                        decrement={this.decrement}
                    />
                ))}
                <span>{this.total() > 0 && this.total()}</span>
            </div>
        )
    }
}
