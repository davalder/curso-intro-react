/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import iconCompleted from '../Icon/completed.png';
import './TodoCompletedIcon.css'

function TodoCompletedIcon(props) {
    return (
        <figure>
            <img
                src={iconCompleted}
                className={`Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            />
        </figure>
    );
};

export { TodoCompletedIcon };