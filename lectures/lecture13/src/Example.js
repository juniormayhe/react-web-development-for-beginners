import React, { useState } from 'react';

function Example() {
  const [isOn, setIsOn] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleAddItem() {
    setItems([...items, text]);
    setText('');
  }

  return (
    <div style={{padding:'2em'}}>
      <h2>Toggle</h2>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>

      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <h2>Text Input</h2>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleAddItem}>Add Item</button>

      <h2>List of Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Example;