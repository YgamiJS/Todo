import React from "react";
import { TodoItem } from "../index";
import { ITodo } from "../../types/types";

interface ITodos {
    todos: ITodo[];
}

export const TodoList = ({ todos }: ITodos) => {
    return (
        <ul>
            {todos.length > 0 ? (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
                <p>Add Todos</p>
            )}
        </ul>
    );
};
