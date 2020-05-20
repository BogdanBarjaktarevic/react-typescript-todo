export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface Todo {
  id: string;
  title: string;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: string;
}

export interface TodoList {
  [id: string]: Todo;
}

export interface TodoState {
  todos: null | TodoList;
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction;
