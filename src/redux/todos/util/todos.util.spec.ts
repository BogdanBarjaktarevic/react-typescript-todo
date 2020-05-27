import { checkedTodos, deletedTodos } from "./todos.util";

describe("Checked todos", () => {
  test("Should return array with checked todo if that todo is clicked", () => {
    const mockTodos = [{ id: "1", title: "fake_todo", checked: false }];
    expect(checkedTodos(mockTodos, "1")).toStrictEqual([
      { id: "1", title: "fake_todo", checked: true },
    ]);
  });

  test("Should return array with unchecked todo if that todo is clicked", () => {
    const mockTodos = [{ id: "1", title: "fake_todo", checked: true }];
    expect(checkedTodos(mockTodos, "1")).toStrictEqual([
      { id: "1", title: "fake_todo", checked: false },
    ]);
  });
});

test("Should return array with todos except one that is deleted", () => {
  const mockTodos = [{ id: "1", title: "fake_todo", checked: false }];
  expect(deletedTodos(mockTodos, "1")).toStrictEqual([]);
});
