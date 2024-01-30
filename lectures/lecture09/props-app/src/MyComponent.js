import React from "react";

function MyComponent(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.profileUrl} alt="profile picture" />
        </div>
    );
}

export default MyComponent;