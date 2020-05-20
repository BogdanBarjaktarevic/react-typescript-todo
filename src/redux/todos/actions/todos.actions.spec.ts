import { ADD_TODO } from "../todos.types";
import { addTodo } from "./todos.actions";

describe("Todo actions", () => {
  test("Should create an action to add a todo", () => {
    const todo = {
      id: "1",
      title: "Add todo",
    };
    const expectedAction = {
      type: ADD_TODO,
      payload: todo,
    };
    expect(addTodo(todo)).toEqual(expectedAction);
  });
});
