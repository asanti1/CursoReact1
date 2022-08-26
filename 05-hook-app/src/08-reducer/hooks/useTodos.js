import { useEffect, useReducer } from "react";

import { todoReducer } from "../todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todosCount = () => {
    return todos.length;
  };

  const todosPendingCount = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  const handleNewTodo = (todo) => {
    const action = { type: "Add", payload: todo };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = { type: "Remove", payload: id };

    dispatch(action);
  };
  const handleToggleTodo = (id) => {
    const action = { type: "Toggle", payload: id };

    dispatch(action);
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    todosPendingCount,
  };
};
