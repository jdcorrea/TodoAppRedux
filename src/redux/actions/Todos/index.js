import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../../types";

export const addTodo = (id, text) => {
  return {
    type: ADD_TODO,
    payload: { id, text }
  };
};

export const toggleTodo = (id, text) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const deleteTodo = (id, text) => {
  return {
    type: DELETE_TODO,
    id
  };
};
