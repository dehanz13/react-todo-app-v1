import React, { useState, useEffect } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  // const [complete, isComplete] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    // console.log("updated todos = ", updatedTodos);
  };

  const filterHandler = (stat) => {
    setStatus(stat);
    switch (stat) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isComplete === true));
        // console.log(filteredTodos);
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.isComplete === false));
        // console.log(filteredTodos);
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler(status);
  }, [todos, status]);

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm onSubmit={addTodo} setStatus={filterHandler} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        filteredTodos={filteredTodos}
      />
    </>
  );
}

export default TodoList;
