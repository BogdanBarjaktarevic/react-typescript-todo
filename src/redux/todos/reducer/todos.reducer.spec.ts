import todosReducer from "./todos.reducer";
import { addTodo } from "../actions/todos.actions";

const initialState = {
  todos: [],
};

describe("Todos reducer", () => {
  test("Should add todo", () => {
    const mockTodo = {
      id: "1",
      title: "Add todo",
      checked: false,
    };

    expect(todosReducer(initialState, addTodo(mockTodo)).todos).toEqual([
      mockTodo,
    ]);
  });
});
