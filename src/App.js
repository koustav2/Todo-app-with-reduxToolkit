// src/App.js
import React, { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Load todos from LocalStorage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      storedTodos.forEach((todo) => dispatch(addTodo(todo)));
    }
  }, [dispatch]);

  // Update LocalStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container mx-auto max-w-lg p-4">
      <h1 className="text-2xl font-semibold">Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
