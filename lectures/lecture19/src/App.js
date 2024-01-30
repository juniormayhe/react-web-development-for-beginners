import './App.css';
import React from 'react';
import BootstrapExample from './bootstrapExample';
import MaterialExample from './materialExample';


function App() {
  return (
  <div style={{padding: "2em", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
    <div><BootstrapExample /></div>
    <div><MaterialExample /></div>
  </div>
  );
};

export default App;
