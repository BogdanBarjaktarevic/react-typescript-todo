import React from "react";
import AddTodo from "../AddTodo/AddTodo.component";
import TodoList from "./../TodoList/TodoList.component";

const App: React.FC = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
