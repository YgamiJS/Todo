import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./TodosSlice";

export const store = configureStore({
  reducer: {
    todo: TodosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
