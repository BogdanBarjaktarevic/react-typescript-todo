import React from "react";
import { TodoItemProps } from "./TodoItem.types";
import { checkTodo, deleteTodo } from "../../redux/todos/actions/todos.actions";
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../../redux/todos/types/todos.types";
import { Dispatch } from "redux";

const TodoItem: React.FC<TodoItemProps> = ({ title, checked, id }) => {
  const dispatch = useDispatch<Dispatch<TodoActionTypes>>();
  return (
    <div>
      <input
        data-testid="todo-item"
        type="checkbox"
        checked={checked}
        onChange={() => dispatch(checkTodo(id))}
      />
      <h2>{title}</h2>
      <div onClick={() => dispatch(deleteTodo(id))}>Remove</div>
    </div>
  );
};

export default TodoItem;
