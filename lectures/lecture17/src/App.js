import './App.css';
import React from 'react';
import styles from './MyComponent.module.css';

function MyComponent() {
  return (
    <div className={styles['my-component']}>
      <h1>My Component</h1>
      <p>This is my component with some text.</p>
    </div>
  );
}

function App() {
  return (
    <MyComponent />
  );
};

export default App;
