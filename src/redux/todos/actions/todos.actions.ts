import { Todo, ADD_TODO, TodoActionTypes } from "../todos.types";
import { CHECK_TODO } from "./../todos.types";

export const addTodo = (todo: Todo): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const checkTodo = (id: string): TodoActionTypes => {
  return {
    type: CHECK_TODO,
    payload: id,
  };
};
