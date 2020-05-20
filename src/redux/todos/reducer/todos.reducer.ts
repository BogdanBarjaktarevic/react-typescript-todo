import { ADD_TODO, TodoActionTypes, TodoState } from "../todos.types";
import { addTodoToList } from "../todos.util";

const initialState: TodoState = {
  todos: null,
};

export default (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      console.log(addTodoToList(state.todos, action.payload));
      return {
        ...state,
        todos: addTodoToList(state.todos, action.payload),
      };
    default:
      return state;
  }
};
