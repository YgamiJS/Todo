import React from "react";
import { ITodo } from "../../types/types";
import { useAppDispatch } from "../../hook/hook";
import {
  toggleCompliteTodo,
  changeText,
  removeTodo,
} from "../../store/TodosSlice";

interface Todo {
  todo: ITodo;
}

export const TodoItem = ({ todo }: Todo) => {
  const dispatch = useAppDispatch();

  const toggleComplited = (id: string) => dispatch(toggleCompliteTodo(id));
  const changedText = (id: string, text: string) =>
    dispatch(changeText({ id, text }));
  const removedTodo = (id: string) => dispatch(removeTodo(id));

  return (
    <li id={todo.id.toString()}>
      {todo.text}
      <input
        type="checkbox"
        checked={todo.complited}
        onChange={() => toggleComplited(todo.id)}
      />
      <button onClick={() => changedText(todo.id, prompt())}>Change</button>
      <button onClick={() => removedTodo(todo.id)}>Delete</button>
    </li>
  );
};
