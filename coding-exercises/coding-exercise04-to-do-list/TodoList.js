import React, { useState } from "react";
import TodoItem from "../src/TodoItem";

// ATTENTION: don't change the Component name "TodoList"
const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState("");
    const [duplicateTaskError, setDuplicateTaskError] = useState(false);

    const isTaskExist = (task) => {
        return tasks.some((t) => t.toLowerCase() === task.toLowerCase());
    };

    const handleAddTask = () => {
        const newTask = inputTask.trim();
        if (newTask !== "") {
            if (!isTaskExist(newTask)) {
                setTasks([...tasks, newTask]);
                setInputTask("");
                setDuplicateTaskError(false);
            } else {
                setDuplicateTaskError(true);
            }
        }
    };

    const handleRemoveTask = (indexToRemove) => {
        const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <input
                type="text"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                placeholder="Enter task"
            />{" "}
            <button onClick={handleAddTask}>Add Task</button>
            {duplicateTaskError && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                    You already have this task in your list.
                </p>
            )}
            <hr />
            {tasks.map((task, index) => (
                <TodoItem
                    key={index}
                    id={index}
                    task={task}
                    handleRemove={() => handleRemoveTask(index)}
                />
            ))}
            {tasks.length === 0 ? (
                <p style={{ color: "grey", fontWeight: "bold" }}>
                    There are no items in your list.
                </p>
            ) : (
                <p>
                    You have <strong>{tasks.length} items</strong> in your list.
                </p>
            )}
        </div>
    );
};

export default TodoList;
