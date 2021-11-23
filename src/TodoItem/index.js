import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCompletedIcon } from "../TodoCompletedIcon";
import { TodoCancelIcon } from "../TodoCancelIcon";
import './TodoItem.css'

function TodoItem(props) {
    const {
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);
    return (
        <li className="TodoItem">
            <TodoCompletedIcon
                completed={props.completed}
                onComplete={() => completeTodo(props.text)}
            />

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <TodoCancelIcon
                onDelete={() => deleteTodo(props.text)}
            />
        </li>
    );
}

export { TodoItem }