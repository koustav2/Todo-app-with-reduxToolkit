// src/components/TodoList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul className="mt-4 flex flex-col gap-5">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center">
          <span
            className={`flex-grow ${todo.completed ? "line-through" : ""}`}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button
            onClick={() => handleRemoveTodo(todo.id)}
            className="bg-red-500 text-white rounded px-2 py-1"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
