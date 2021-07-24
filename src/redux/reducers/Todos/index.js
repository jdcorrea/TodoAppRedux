import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../../types";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  // console.log(action, state);
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todoItem) => {
        console.log("@ids: bus, map: ", action.id, todoItem);
        if (todoItem.id !== action.id) {
          console.log("no igual");
          return todoItem;
        }
        return {
          ...todoItem,
          completed: !todoItem.completed
        };
      });
    case DELETE_TODO:
      return (state = state.filter((todoItem) => {
        return todoItem.id !== action.id;
      }));
    default:
      return state;
  }
};

export default todoReducer;
