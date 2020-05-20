import { Todo, ADD_TODO, TodoActionTypes } from "../todos.types";

export const addTodo = (todo: Todo): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
