import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((curCount) => curCount + 1)
    };

    const decrement = () => {
        setCount((curCount) => curCount - 1)
    };

    return (
        <div>
            <h1>Result is {count}</h1>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
    </div>

    )
}

export default Counter;