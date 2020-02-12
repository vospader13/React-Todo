import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
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