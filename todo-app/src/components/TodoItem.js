import React from 'react'
import { MdDelete} from 'react-icons/md';
const TodoItem = (props) => {
  return (
    <div className='todo-row'>
      {props.todo.text}
<div className='iconContainer'>
      <MdDelete className='icon'/>
      </div>
    </div>
  )
}

export default TodoItem
