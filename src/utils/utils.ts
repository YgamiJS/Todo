import { ITodo } from "@/types/types";

export const todoTextIsValid = (content: ITodo["text"]) => !!content.trim();
