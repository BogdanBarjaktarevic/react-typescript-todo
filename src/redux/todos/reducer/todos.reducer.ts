import {
  ADD_TODO,
  CHECK_TODO,
  TodoActionTypes,
  TodoState,
} from "../todos.types";
import { checkedTodos } from "./../todos.util";

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
    default:
      return state;
  }
};
