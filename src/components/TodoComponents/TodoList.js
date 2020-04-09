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

export default TodoList;