import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='todo-row'>
      {props.todo.text}
    </div>
  )
}

export default TodoItem
