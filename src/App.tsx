import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './components/todo.model'; 


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler= (text:string) => {
    setTodos(prevValue =>[
      ...prevValue,
      {id: Math.random().toString(), text:text}
    ]);
  };

  const totoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo = {todoAddHandler}/>
      <TodoList items = {todos} onDeleteTodo = {totoDeleteHandler}/>
    </div>
  );
}

export default App;
