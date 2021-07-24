import { ADD_TODO } from "../../types";

const initialState = [
  {
    id: "123123",
    text: "Inicio",
    completed: false
  }
];

const todoReducer = (state = initialState, action) => {
  console.log(action, state);
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
    default:
      return state;
  }
};

export default todoReducer;
