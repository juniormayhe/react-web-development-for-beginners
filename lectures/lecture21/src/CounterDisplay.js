import Counter from "./Counter";

function CounterDisplay() {
    return (
        <Counter>
            {(count, handleIncrement, handleDecrement) => (
                <div>
                    <h2>Counter</h2>
                    <p>Count: {count}</p>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleDecrement}>-</button>
                </div>
            )}
        </Counter>
    );
}

export default CounterDisplay;
