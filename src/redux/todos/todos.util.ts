import { Todo, TodoList } from "./todos.types";

export const addTodoToList = (todos: null | TodoList, todo: Todo): TodoList => {
  return { ...todos, [todo.id]: todo };
};
