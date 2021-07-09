import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { MdDone } from "react-icons/md";

import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo, filteredTodos }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    isComplete: false,
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
      isComplete: false,
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return filteredTodos.map((todo, index) => {
    // return todos.map((todo, index) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id}>{todo.text}</div>
        <div className="todo-icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="todo-delete-icon"
          />

          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="todo-edit-icon"
          />

          <MdDone
            onClick={() => completeTodo(todo.id)}
            className="todo-complete-icon"
          />
        </div>
      </div>
    );
  });
}

export default Todo;
