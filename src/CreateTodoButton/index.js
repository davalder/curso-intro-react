import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
        // prevState guarda el estado anterior, por lo cual al pasarlo por fucion
        // y negarlo con !, cambiaria de true a false, o de false a true, segun el caso.
    };

    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton }