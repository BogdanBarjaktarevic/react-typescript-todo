import todosReducer from "./todos.reducer";
import { addTodo, checkTodo, deleteTodo } from "../actions/todos.actions";

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

  test("Should check todo", () => {
    const newInitialState = {
      todos: [{ id: "1", title: "Add todo", checked: false }],
    };
    const mockId = "1";
    expect(todosReducer(newInitialState, checkTodo(mockId)).todos).toEqual([
      {
        id: "1",
        title: "Add todo",
        checked: true,
      },
    ]);
  });

  test("Should delete todo", () => {
    const newInitialState = {
      todos: [{ id: "1", title: "Add todo", checked: false }],
    };
    const mockId = "1";
    expect(todosReducer(newInitialState, deleteTodo(mockId)).todos).toEqual([]);
  });
});
