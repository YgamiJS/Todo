import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ITodo } from "../types/types";

interface Todos {
  todos: ITodo[];
}

const initialState: Todos = {
  todos: [{ id: "cdfghj", text: "fs", complited: true }],
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleCompliteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complited: !todo.complited }
          : todo
      );
    },
    changeText(state, action: PayloadAction<{ id: string; text: string }>) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, toggleCompliteTodo, changeText } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.todo.todos;

export default counterSlice.reducer;
