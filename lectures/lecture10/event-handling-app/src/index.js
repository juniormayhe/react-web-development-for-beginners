import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ItemList from './App';
import reportWebVitals from './reportWebVitals';

const items = [{ id: 1, name: "Junior" }, { id: 2, name: "Mayhe" }];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemList items={items} />
    {/* <ButtonExample /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
