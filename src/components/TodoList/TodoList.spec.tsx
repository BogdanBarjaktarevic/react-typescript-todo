import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList.component";

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe("todo list", () => {
  test("Should render empty todo list", () => {
    (useSelector as jest.Mock).mockReturnValue([]);
    render(<TodoList />);
    const fakeTodoItem = screen.queryByText("add_fake_todo") as HTMLDivElement;
    const fakeTodoItemOne = screen.queryByText(
      "add_fake_todo_one"
    ) as HTMLDivElement;

    expect(fakeTodoItem).toBeNull();
    expect(fakeTodoItemOne).toBeNull();
  });

  test("Should render todo elements when added", () => {
    (useSelector as jest.Mock).mockReturnValue([
      { id: "1", title: "add_fake_todo", checked: false },
      { id: "3", title: "add_fake_todo_one", checked: false },
    ]);
    render(<TodoList />);
    const fakeTodoItem = screen.getByText("add_fake_todo") as HTMLDivElement;
    const fakeTodoItemOne = screen.getByText(
      "add_fake_todo_one"
    ) as HTMLDivElement;

    expect(fakeTodoItem).toBeTruthy();
    expect(fakeTodoItemOne).toBeTruthy();
  });
});
