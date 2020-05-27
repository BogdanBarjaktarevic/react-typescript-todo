import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem.component";
import { checkTodo } from "../../redux/todos/actions/todos.actions";
import { useSelector, useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe("Todo item", () => {
  test("Should render checkbox", () => {
    const fake_props = {
      id: "1",
      title: "fake_todo",
      checked: false,
    };
    render(<TodoItem {...fake_props} />);
    const checkboxElement = screen.getByTestId("todo-item");
    expect(checkboxElement).toBeTruthy();
  });

  test("Should checkbox checked set to true", () => {
    const fake_props = {
      id: "1",
      title: "fake_todo",
      checked: true,
    };
    render(<TodoItem {...fake_props} />);
    const checkboxElement = screen.getByTestId("todo-item") as HTMLInputElement;

    expect(checkboxElement.checked).toEqual(true);
  });

  test("Should render correct title", () => {
    const fake_props = {
      id: "1",
      title: "fake_todo",
      checked: false,
    };
    render(<TodoItem {...fake_props} />);

    const titleElement = screen.getByText("fake_todo") as HTMLHeadingElement;
    expect(titleElement).toBeTruthy();
  });
});
