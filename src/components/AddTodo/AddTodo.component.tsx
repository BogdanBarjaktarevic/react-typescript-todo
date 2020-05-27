import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/actions/todos.actions";
import { Dispatch } from "redux";
import { TodoActionTypes } from "../../redux/todos/types/todos.types";

const AddTodo: React.FC = () => {
  const dispatch = useDispatch<Dispatch<TodoActionTypes>>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const val = event.target.value;
    setInputValue(val);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!inputValue) return;
    const newTodo = {
      id: uuidv4(),
      title: inputValue,
      checked: false,
    };
    dispatch(addTodo(newTodo));
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={onSubmitHandler} data-testid="add-todo">
      <label>
        Add todo:
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={onChangeHandler}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
