// feature/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../utils/initialState";

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    updateTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text:
                action.payload.text !== undefined
                  ? action.payload.text
                  : todo.text,
              done:
                action.payload.done !== undefined
                  ? action.payload.done
                  : todo.done,
            }
          : todo
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
