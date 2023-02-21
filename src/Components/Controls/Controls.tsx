import { useState } from "react";
import { addTodo } from "@/store/TodosSlice";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "@/hooks/useRTKHook";
import React from "react";
import { todoTextIsValid } from "@/utils/utils";

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
        <form onSubmit={handleSubmit} className="w-full my-7">
            <input
                value={text}
                onChange={change}
                className="w-3/4 px-3 py-2 focus:outline-none rounded-l-md"
            />
            <button
                type="submit"
                className="w-1/4 px-3 py-2 bg-gray-500 rounded-r-md hover:bg-gray-600  focus:bg-gray-600 text-gray-200"
            >
                Add
            </button>
        </form>
    );
};
