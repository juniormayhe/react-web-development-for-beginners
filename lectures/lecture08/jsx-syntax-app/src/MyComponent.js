import React from "react";  

// uncomment this to have a functional component
// and comment the class MyComponent block

/*
function MyComponent() {
  return <div>Hello, I’m functional component!</div>;
}
*/
class MyComponent extends React.Component {
    render(){
        return <div>Hello, I'm a class component!</div>;
    }
}

export default MyComponent;