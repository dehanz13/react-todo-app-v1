import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });
    setInput("");
  };
  const statusHandler = (e) => {
    let a = e.target.value;
    props.setStatus(a);
  };

  return (
    <div className="flex justify-center text-center align-center items-center">
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update todo"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button">Add todo</button>
          </>
        )}
        <div className="todo-select">
          <select onChange={statusHandler} name="todos" className="todo-button">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
