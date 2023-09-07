import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo={id:id, text:text}
    setTodos([todo, ...todos])
  }
  return (
    <div className="todo-app">
      <h2>Todo App</h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo)=>{
        return(
          <TodoItem todo={todo}/>
        )
      })}
    </div>

  );
}

export default App;
