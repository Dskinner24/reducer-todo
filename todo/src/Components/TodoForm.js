import React, { useReducer, useRef } from 'react';

import { todoReducer, initialTodoState } from "../reducers/reducer";

const TodoForm = () => {
    const inputRef = useRef();
    const [todos, dispatch] = useReducer(todoReducer, []);

    function handleSubmit (e) {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", task: inputRef.current.value});
        inputRef.current.value = '';
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className='input' ref={inputRef} />
                <button className='add-btn'>Add Todo</button>
            </form>
            <ol className='list-item'>
                {todos.map((todo, index) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none', fontStyle: todo.completed ? 'italic' : 'normal', listStyleType: 'none', color: todo.completed ? 'red' : 'whitesmoke'}}>
                        {todo.task}
                        <button className='complete-btn' onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', index})}>Completed</button>
                    </li>
                ))}
            </ol>
            <button className='clear-btn' onClick={() => dispatch({ type: 'REMOVE_TODOS'})}>Clear Completed</button>
        </>
    )    
}

export default TodoForm;