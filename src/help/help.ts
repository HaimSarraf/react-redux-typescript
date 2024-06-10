import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// import type {} from '@redux-devtools/extension' // required for devtools typing

export type Todo = {
  text: string;
  id: number;
  isCompleted: boolean;
};

export type Todos = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
};

export const useTodoStore = create<Todos>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (text: string) =>
          set((state) => ({
            todos: [
              ...state.todos,
              { text, id: Date.now(), isCompleted: false },
            ],
          })),
        removeTodo: (id: number) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),
        toggleCompleted: (id: number) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
            ),
          })),
      }),
      { name: "todos-storage" }
    )
  )
);
