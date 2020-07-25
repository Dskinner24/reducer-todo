import React from "react";

import TodoForm from "./TodoForm";

const TodoList = ()  => {

    return (
        <div>
            <header className='head'>
                <h1>Todo List ✔🙂</h1>
            </header>
            <TodoForm />
        </div>
    )
}

export default TodoList;