import { ADD_TODO } from "../../types";

const addTodo = (id, text) => {
  return {
    type: ADD_TODO,
    payload: { id, text }
  };
};

export default addTodo;
