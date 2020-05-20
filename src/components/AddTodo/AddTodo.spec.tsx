import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo.component";
import store from "../../redux/store";

describe("Add todo", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
  });

  test("Should render form element", () => {
    const formElement = screen.getByTestId("add-todo") as HTMLFormElement;
    expect(formElement).toBeTruthy();
  });

  test("Should update input value onChange", () => {
    const inputElement = screen.getByLabelText("Add todo:") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "added todo" } });
    expect(inputElement.value).toBe("added todo");
  });

  test("Should set input to '' when todo is added", () => {
    const inputElement = screen.getByLabelText("Add todo:") as HTMLInputElement;
    const formElement = screen.getByTestId("add-todo") as HTMLFormElement;
    fireEvent.change(inputElement, { target: { value: "added todo" } });
    fireEvent.submit(formElement);
    expect(inputElement.value).toBe("");
  });
});
