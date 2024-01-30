import React from "react";

// ATTENTION: don't change the Component name "TodoItem"
const TodoItem = ({ id, task, handleRemove }) => {
    return (
        <div>
            <p>
                <button onClick={handleRemove}>Remove</button>{" "}
                <span style={{ color: "blue" }}>
                    <strong>
                        Task {id + 1}: {task}
                    </strong>
                </span>
            </p>
        </div>
    );
};

export default TodoItem;
