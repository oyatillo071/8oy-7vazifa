import React from "react";
import { useState } from "react";
import { useTodosStore } from "../store/todocard";

function Todo() {
  const { todos, addTodo, removeTodo, toggleTodo, updateTodo } =
    useTodosStore();
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      updateTodo(id, editText);
      setEditingId(null);
    }
  };
  console.log(todos);

  return (
    <div className="container p-10 mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex border rounded-md items-center overflow-hidden w-[308px] mx-auto"
      >
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="  p-2  "
        />
        <button
          type="submit"
          className=" whitespace-nowrap p-2 bg-black text-white "
        >
          Add Todo
        </button>
      </form>
      <ul className="flex flex-col gap-4 items-center">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={
              todo.completed
                ? "flex rounded-md p-3 border w-[600px]  items-center bg-green-400 text-white justify-between"
                : "flex rounded-md p-3 border w-[600px]  items-center bg-white text-black justify-between"
            }
          >
            {editingId == todo.id ? (
              <div className="flex items-center border border-black overflow-hidden justify-between w-full rounded-md ">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full bg-white text-black p-2 "
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className=" p-2 w-28 bg-green-500 text-white rounded font-bold"
                >
                  Update
                </button>
              </div>
            ) : (
              <div className="flex items-center w-full justify-between">
                <h2>{todo.text}</h2>
                <p>{todo.id}</p>
                <div>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="mr-2 p-1 bg-black text-white rounded"
                  >
                    Status
                  </button>
                  <button
                    onClick={() => handleEdit(todo.id, todo.text)}
                    className="mr-2 px-2 p-1 bg-green-600 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="p-1 px-2 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
