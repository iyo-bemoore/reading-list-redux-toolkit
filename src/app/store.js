import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/bookStore/bookSlice";
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
