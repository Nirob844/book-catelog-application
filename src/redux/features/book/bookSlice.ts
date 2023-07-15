import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
}

interface BookState {
  books: Book[];
  filter: string | number;
  searchTerm: string;
  searchResults: Book[];
}

const initialState: BookState = {
  books: [], // Your book data
  filter: "",
  searchTerm: "",
  searchResults: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string | number>) => {
      state.filter = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      console.log(setSearchTerm);
    },
    searchBooks: (state) => {
      const { books, searchTerm } = state;
      // console.log(state);

      const searchResults = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      state.searchResults = searchResults;
    },
  },
});

export const { setFilter, setSearchTerm, searchBooks } = bookSlice.actions;

export default bookSlice.reducer;
