import React from "react";
import { TodoItem } from "@/Components/TodoItem/TodoItem";
import { ITodo } from "@/types/types";

interface ITodos {
    todos: ITodo[];
}

export const TodoList = ({ todos }: ITodos) => {
    return (
        <ul>
            {todos.length > 0 ? (
                [...todos]
                    .reverse()
                    .map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
                <p className="text-gray-200">Add Todos</p>
            )}
        </ul>
    );
};
