import React from "react";
import iconCancel from '../Icon/canceled.png';
import './TodoCancelIcon.css'

function TodoCancelIcon(props) {
    return (
        <figure>
            <img
                src={iconCancel}
                className="Icon-delete"
                onClick={props.onDelete}
            />
        </figure>
    );
};

export { TodoCancelIcon };