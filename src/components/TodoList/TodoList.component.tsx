import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TodoItem from "./../TodoItem/TodoItem.component";

const TodoList: React.FC = () => {
  const selectTodos = (state: RootState) => state.todos.todos;
  const todos = useSelector(selectTodos);

  return (
    <div data-testid="todo-list">
      {todos.map(({ title, id, checked }) => (
        <TodoItem key={id} title={title} checked={checked} id={id} />
      ))}
    </div>
  );
};

export default TodoList;
