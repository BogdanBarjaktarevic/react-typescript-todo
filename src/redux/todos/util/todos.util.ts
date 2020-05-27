import { Todo } from "../types/todos.types";

export const checkedTodos = (todos: Todo[], id: string): Todo[] => {
  return todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        checked: !todo.checked,
      };
    }
    return todo;
  });
};

export const deletedTodos = (todos: Todo[], id: string): Todo[] =>
  todos.filter((todo) => todo.id !== id);
