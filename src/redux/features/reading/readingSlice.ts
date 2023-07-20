import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IReading {
  books: IBook[];
}

const initialState: IReading = {
  books: [],
};

const readingSlice = createSlice({
  name: "reading",
  initialState,
  reducers: {
    addToReading: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (!existing) {
        state.books.push({ ...action.payload });
      }
    },
    removeFromReading: (state, action: PayloadAction<IBook>) => {
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

export const { addToReading, removeFromReading } = readingSlice.actions;

export default readingSlice.reducer;
