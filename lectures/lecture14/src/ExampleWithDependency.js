import React, { useState, useEffect } from "react";

function ExampleWithDependency() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (count === 0) {
            setMessage("Click the button to start counting!");
        } else if (count === 1) {
            setMessage(`You clicked the button ${count} time.`);
        } else {
            setMessage(`You clicked the button ${count} times.`);
        }
    }, [count]);

    return (
        <div>
            <p>{message}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default ExampleWithDependency;