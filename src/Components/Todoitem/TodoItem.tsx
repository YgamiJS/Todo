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
        <li
            id={todo.id.toString()}
            className="bg-gray-900  px-3 py-2 rounded-md my-3"
        >
            <input
                type="checkbox"
                checked={todo.complited}
                onChange={() => toggleComplited(todo.id)}
            />
            {todo.text}
            <button
                onClick={() => changedText(todo.id, prompt())}
                className="w-1/5 bg-blue-700"
            >
                Change
            </button>
            <button
                onClick={() => removedTodo(todo.id)}
                className="w-1/5 bg-blue-700"
            >
                Delete
            </button>
        </li>
    );
};
