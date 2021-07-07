import React, { useState, useEffect, useRef } from "react";

function NotesAppForm(props) {
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
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update note"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="todo-button edit">Add note</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a note"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="todo-button">Add note</button>
        </>
      )}
    </form>
  );
}

export default NotesAppForm;
