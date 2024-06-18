import React, { useState } from 'react'

function TodoCard(props) {
    const { children, todosIdx, deleteTodo, editValue} = props;

    const[marked, setMarked] = useState(false);


    return (
        <li className='todoItem' style={{ textDecoration: marked ? 'line-through' : 'none' }} onClick={() => {
            setMarked(!marked);
        }}>
            <div className='toggle'>
                <i className={marked ? 'fa-solid fa-toggle-on'  : 'fa-solid fa-toggle-off'}></i>
            </div>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    editValue(todosIdx);
                }}><i class="fa-solid fa-pen-to-square"></i></button>
                <button onClick={() => {
                    deleteTodo(todosIdx);
                }}><i class="fa-solid fa-trash"></i></button>
            </div>
        </li>
    )
}

export default TodoCard
