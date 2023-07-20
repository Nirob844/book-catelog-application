import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IFinished {
  books: IBook[];
}

const initialState: IFinished = {
  books: [],
};

const finishedSlice = createSlice({
  name: "finished",
  initialState,
  reducers: {
    addToFinished: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (!existing) {
        state.books.push({ ...action.payload });
      }
    },
    removeFromFinished: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (existing) {
        state.books = state.books.filter(
          (book) => book._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToFinished, removeFromFinished } = finishedSlice.actions;

export default finishedSlice.reducer;
