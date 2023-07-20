import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IWishList {
  books: IBook[];
}

const initialState: IWishList = {
  books: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (!existing) {
        state.books.push({ ...action.payload });
      }
    },
    removeFromWishList: (state, action: PayloadAction<IBook>) => {
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

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
