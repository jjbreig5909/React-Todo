import React from "react";

const Todo = props => {
    return (
        <div
            onClick={event => props.toggleComplete(props.item.id)}
            className={`item${props.item.complete ? " completed" : ""}`}
        >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;