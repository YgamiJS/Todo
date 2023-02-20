import * as React from "react";
import { Controls, TodoList } from "../Components/index";
import { useAppSelector } from "../hook/hook";

export const Todos = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <div>
      <Controls />
      <TodoList todos={todos} />
    </div>
  );
};
