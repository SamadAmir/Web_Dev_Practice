import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice.js"

export const store = configureStore({
  reducer: {
    todos: todoReducer, // The key must match the state you're accessing in useSelector
  }
});
