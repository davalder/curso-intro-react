import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { TodoEmpty } from "../TodoEmpty";
import { Modal } from '../Modal';


function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodoError error={error} />}
                {loading && <TodoLoading />}
                {(!loading && !searchedTodos.length) && <TodoEmpty />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm>

                    </TodoForm>
                </Modal>
            )}

            <CreateTodoButton
                // openModal={openModal} al usar prevState no neceistamos enviar el estado
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export { AppUI };