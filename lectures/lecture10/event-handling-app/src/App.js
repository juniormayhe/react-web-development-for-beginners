import React, { useState } from 'react';

function ItemList({ items }) {
  const [list, setList] = useState(items);

  function handleDelete(id) {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          {item.name} <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function ButtonExample() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>You've clicked the button {count} times.</p>
    </div>
  );
}

//export default ButtonExample;
export default ItemList;