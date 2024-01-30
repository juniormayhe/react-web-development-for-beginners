import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList.js';

function App() {
  const people = [
    {
      "name": "Bruce Wayne",
      "phone": "+44 20 1234 5678"
    },
    {
      "name": "Clark Kent",
      "phone": ""
    },
    {
      "name": "James Howlett",
      "phone": ""
    }
  ];
  return (
    <PersonList people={people} />
  );
}

export default App;
