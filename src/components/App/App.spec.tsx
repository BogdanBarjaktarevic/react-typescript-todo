import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.component";
import store from "../../redux/store";
import { Provider } from "react-redux";

test("should render App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = screen.getByTestId("app");

  expect(element).toBeTruthy();
});
