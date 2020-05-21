import React from "react";
import { TodoItemProps } from "./TodoItem.types";
import { checkTodo } from "../../redux/todos/actions/todos.actions";
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../../redux/todos/todos.types";
import { Dispatch } from "redux";

const TodoItem: React.FC<TodoItemProps> = ({ title, checked, id }) => {
  const dispatch = useDispatch<Dispatch<TodoActionTypes>>();
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => dispatch(checkTodo(id))}
      />
      <h2>{title}</h2>
      <div>Remove</div>
    </div>
  );
};

export default TodoItem;
