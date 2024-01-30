import React, { useState } from 'react';

function Counter({ children }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return <div>{children(count, handleIncrement, handleDecrement)}</div>;
}

export default Counter;