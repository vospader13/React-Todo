import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.tasks.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
            ))}
            <button onClick={props.clearCompleted}>
                Clear Task(s)
            </button>
        </div>
    );
};


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js






export default TodoList;