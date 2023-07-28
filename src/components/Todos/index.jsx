//? Counter by class component
// import React, { useState } from "react";
// import Counter from "../Counter";
// import { counterdata } from "../mock/CounterData";
// export default class Todos extends Component {
//     state = {
//         counter: counterdata,
//     }
//     increment = (id, amount) => {
//         this.setState((prevState) => {
//             const incrementcounter = prevState.counter.map((newnum) => {
//                 if (newnum.id === id) {
//                     return {
//                         ...newnum,
//                         num: newnum.num + amount,
//                     };
//                 }
//                 return newnum;
//             });

//             return {
//                 counter: incrementcounter,
//             };
//         });
//     }

//     decrement = (id, amount) => {
//         this.setState((prevState) => {
//             const decrementcounter = prevState.counter.map((newnum) => {
//                 if (newnum.id === id && newnum.num > 0) {
//                     return {
//                         ...newnum,
//                         num: newnum.num - amount,
//                     };
//                 }
//                 return newnum;
//             });

//             return {
//                 counter: decrementcounter,
//             };
//         });
//     }

//     total = () => {
//         const clctotal = this.state.counter.reduce((accumulator, count) => {
//             return accumulator + count.num;
//         }, 0);

//         return clctotal;
//     }

//     render() {
//         return(
//             <div>
//                 {this.state.counter.map((count) => (
//                     <Counter
//                         key={count.id}
//                         id={count.id}
//                         num={count.num}
//                         amount={count.amount}
//                         increment={this.increment}
//                         decrement={this.decrement}
//                     />
//                 ))}
//                 <span>{this.total() > 0 && this.total()}</span>
//             </div>
//         )
//     }
// }
//! Counter by functinal component
import React, { useState } from "react";
import Counter from "../Counter";
import { counterdata } from "../mock/CounterData";
export default function Todos() {
    const [counter, setCounter] = useState(counterdata);
    const increment = (id, amount) => {
        setCounter((prevState) => {
            const incrementcounter = prevState.map((newnum) => {
                if (newnum.id === id) {
                    return {
                        ...newnum,
                        num: newnum.num + amount,
                    };
                }
                return newnum;
            });
            return incrementcounter;
        });
    };
    const decrement = (id, amount) => {
        setCounter((prevState) => {
            const decrementcounter = prevState.map((newnum) => {
                if (newnum.id === id && newnum.num > 0) {
                    return {
                        ...newnum,
                        num: newnum.num - amount,
                    };
                }
                return newnum;
            });
            return decrementcounter;
        });
    }
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
                "alignItems":"center",
                "justifyContent":"center"
            }}>{total() > 0 && total()}</span>
        </div>
    );
}
