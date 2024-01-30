import './App.css';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color: blue;
color: white;
font-size: 1.2rem;
padding: 10px 20px;
border-radius: 5px;
border: none;
cursor: pointer;

&:hover{
  background-color: darkblue;
}
`;

function App() {
  return (
    <div><Button>Click me!</Button></div>
  );
};

export default App;
