import React from "react";
import { ITodo } from "@/types/types";
import { useAppDispatch } from "@/hooks/useRTKHook";
import { toggleCompliteTodo, changeText, removeTodo } from "@/store/TodosSlice";

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
            id={todo.id}
            className="bg-gray-900  px-3 py-2 rounded-md my-3 break-all text-gray-200"
        >
            <input
                type="checkbox"
                checked={todo.complited}
                onChange={() => toggleComplited(todo.id)}
                className="mr-1"
            />
            {todo.text}
            <button
                onClick={() => changedText(todo.id, prompt())}
                className="bg-blue-700 w-full my-1 rounded-md active:bg-blue-800 active:shadow-md active:shadow-black hover:bg-blue-800 hover:shadow-md hover:shadow-black"
            >
                Change
            </button>
            <button
                onClick={() => removedTodo(todo.id)}
                className=" bg-blue-700 w-full rounded-md active:bg-blue-800 active:shadow-md active:shadow-black hover:bg-blue-800 hover:shadow-md hover:shadow-black"
            >
                Delete
            </button>
        </li>
    );
};
