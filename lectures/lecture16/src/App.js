import './App.css';
import React from 'react';
import useFetch from './useFetch';

function UsersList() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <UsersList />
  );
};

export default App;
