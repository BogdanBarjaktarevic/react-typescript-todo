import {
  ADD_TODO,
  CHECK_TODO,
  TodoActionTypes,
  TodoState,
  DELETE_TODO,
} from "../types/todos.types";
import { checkedTodos, deletedTodos } from "../util/todos.util";

const initialState: TodoState = {
  todos: [],
};

export default (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: checkedTodos(state.todos, action.payload),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: deletedTodos(state.todos, action.payload),
      };
    default:
      return state;
  }
};
