import { Todo } from "./todos.types";

export const checkedTodos = (todos: Todo[], id: string): Todo[] => {
  return todos.map((todo) => {
    if (todo.id === id) {
      todo.checked = !todo.checked;
    }
    return todo;
  });
};
