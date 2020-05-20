import { addTodoToList } from "./todos.util";

test("Should add new todo to the list and return list of todos", () => {
  const todoToAdd = {
    id: "1",
    title: "Todo one",
  };

  const das = addTodoToList(null, todoToAdd);
  console.log(das);
  const result = addTodoToList(
    { "1": { id: "1", title: "Todo one" } },
    { id: "2", title: "Todo two" }
  );
  expect(result).toEqual({
    "1": {
      id: "1",
      title: "Todo one",
    },
    "2": {
      id: "2",
      title: "Todo two",
    },
  });
});
