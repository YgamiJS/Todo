import * as React from "react";
import { Controls, TodoList } from "./Components/index";
import { useAppSelector } from "./hook/hook";

const App = () => {
    const todos = useAppSelector((state) => state.todo.todos);

    return (
        <div>
            <h1 className="text-gray-200 text-5xl text-center">React Todo</h1>
            <Controls />
            <TodoList todos={todos} />
        </div>
    );
};
export default App;
