// src/components/TodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo({ id: Date.now(), text: todoText, completed: false }));
      setTodoText("");
    }
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="border border-gray-300 rounded-l px-4 py-2 w-full"
        placeholder="Enter your todo"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white rounded-r px-4 py-2"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
