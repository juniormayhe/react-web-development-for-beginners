import React from 'react';

function List(props) {

    return (
        <div>
            <ul>
                {props.items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>

        </div>
    );
}

export default List;