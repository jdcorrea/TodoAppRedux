import { createStore } from "redux";
import todoReducer from "./reducers/Todos";

export const store = createStore(todoReducer);
