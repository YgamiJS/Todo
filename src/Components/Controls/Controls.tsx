import { useState } from "react";
import { addTodo } from "../../store/TodosSlice";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../../hook/hook";
import React from "react";
import { todoTextIsValid } from "../../utils/utils";

export const Controls = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!todoTextIsValid(text)) return;
    dispatch(
      addTodo({
        id: uuidv4(),
        text,
        complited: false,
      })
    );
    setText("");
  };

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={change} />
      <button type="submit">Add</button>
    </form>
  );
};
