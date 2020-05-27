export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHECK_TODO = "CHECK_TODO";

export interface Todo {
  id: string;
  title: string;
  checked: boolean;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface CheckTodoAction {
  type: typeof CHECK_TODO;
  payload: string;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: string;
}

export interface TodoState {
  todos: Todo[];
}

export type TodoActionTypes =
  | AddTodoAction
  | CheckTodoAction
  | DeleteTodoAction;
