// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.tasks.map(task => (
                <Todo
                    key={task.id}
                    item={task}
                    toggleComplete={props.toggleComplete}
                />
            ))}
            <button className="clear-btn" onClick={props.clearComplete}>
                Clear Completed
      </button>
        </div>
    );
};

export default TodoList;