import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList.js';

function App() {
  const items = [
    {
      "id": 1,
      "name": "Laptop"
    },
    {
      "id": 2,
      "name": "Air conditioner"
    },
    {
      "id": 3,
      "name": "Blender"
    }
  ];
  return (
    <ItemList items={items} />
  );
}

export default App;
