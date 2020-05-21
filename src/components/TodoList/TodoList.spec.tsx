import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList.component";
import { debug } from "console";
import { Todo } from "../../redux/todos/todos.types";
import store from "../../redux/store";
import { RootState } from "../../redux/rootReducer";

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe("todo list", () => {
  test("Should render form element", () => {
    useSelector.mockReturnValue([
      { id: "1", title: "Add todo", checked: false },
      { id: "3", title: "Add todo 3333", checked: false },
    ]);
    render(<TodoList />);
    const todoList = screen.getByTestId("todo-list") as HTMLDivElement;
    screen.debug(todoList);
    // expect(screen.getByTestId("todo-list")).toContain("Add todo");
  });
});
