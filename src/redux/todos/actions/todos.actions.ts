import {
  Todo,
  ADD_TODO,
  CHECK_TODO,
  DELETE_TODO,
  TodoActionTypes,
} from "../types/todos.types";

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

export const deleteTodo = (id: string): TodoActionTypes => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
