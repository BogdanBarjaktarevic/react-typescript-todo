import { combineReducers } from "redux";
import todoReducer from "./todos/reducer/todos.reducer";

export default combineReducers({
  todos: todoReducer,
});
