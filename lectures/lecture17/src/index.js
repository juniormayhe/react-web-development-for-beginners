/*
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const UseEffectExample = () => {
    // side effect goes here
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        console.log('clicked state value is', clicked);

    }, [clicked]);// clicked is in dependencies array

    const handleClick = () => {
        // toggle the value of clicked
        setClicked(!clicked);
    };

    return (
        <div style={{ padding: '2em' }}>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
};
export default UseEffectExample;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UseEffectExample />
);
*/

import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App />
);
