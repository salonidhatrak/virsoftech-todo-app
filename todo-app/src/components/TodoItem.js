import React from 'react'
import { MdDelete } from 'react-icons/md';
const TodoItem = (props) => {
    const { todo, removeTodo } = props
    return (
        <div className='todo-row'>
            {props.todo.text}
            <div className='iconContainer'>
                <MdDelete className='icon' onClick={() => removeTodo(todo.id)} />
            </div>
        </div>
    )
}

export default TodoItem
