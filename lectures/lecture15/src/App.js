import './App.css';
import React from 'react';
import { useContext, useState } from 'react';

// First, create a context
const UserContext = React.createContext();

// Define a child component that consumes the context
function Profile() {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

// Then, wrap your top-level component with the provider
function App() {
  const [user] = useState({ name: 'John', age: 30 });
  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
