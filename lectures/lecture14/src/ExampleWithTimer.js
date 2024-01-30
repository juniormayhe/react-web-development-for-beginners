import React, { useState, useEffect } from "react";

function ExampleWithTimer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return <div>{seconds} seconds have elapsed</div>;
}

export default ExampleWithTimer;