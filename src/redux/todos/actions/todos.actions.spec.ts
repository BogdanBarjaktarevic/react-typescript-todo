import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "../types/todos.types";
import { addTodo, checkTodo, deleteTodo } from "./todos.actions";

describe("Todo actions", () => {
  test("Should create an action to add a todo", () => {
    const todo = {
      id: "1",
      title: "Add todo",
      checked: false,
    };
    const expectedAction = {
      type: ADD_TODO,
      payload: todo,
    };
    expect(addTodo(todo)).toEqual(expectedAction);
  });

  test("Should create an action to check a todo", () => {
    const id = "1";
    const expectedAction = {
      type: CHECK_TODO,
      payload: id,
    };
    expect(checkTodo(id)).toEqual(expectedAction);
  });

  test("Should create an action to delete a todo", () => {
    const id = "1";
    const expectedAction = {
      type: DELETE_TODO,
      payload: id,
    };
    expect(deleteTodo(id)).toEqual(expectedAction);
  });
});
