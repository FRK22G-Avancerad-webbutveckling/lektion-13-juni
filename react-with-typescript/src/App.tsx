import { useState, useEffect } from 'react'
import './App.css'

import TodoItem from './components/TodoItem/TodoItem'
import AddTodo from './components/AddTodo/AddTodo'

interface Todo {
  id: number,
  completed: boolean,
  todo: string,
  userId: number
}

interface Response {
  limit: number,
  skip: number,
  todos: Todo[],
  total: number
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos(): Promise<void> {
      const response = await fetch('https://dummyjson.com/todos');
      const data: Response = await response.json();

      setTodos(data.todos);
    }

    getTodos();
  }, []);

  function updateTodo(text: string): void {
    const todo: Todo = {
      id: todos.length + 1,
      todo: text,
      completed: false,
      userId: todos.length + 1
    }

    const tempTodos = [...todos];
    tempTodos.push(todo);

    setTodos(tempTodos);
  }

  const todoComponents = todos.map((todo) => {
    return <TodoItem todo={ todo.todo } completed={ todo.completed } key={ todo.id } />
  });

  return (
    <div className='App'>
      <ul>
        { todoComponents }
      </ul>
      <AddTodo updateTodo={ updateTodo } />
    </div>
  )
}

export default App
