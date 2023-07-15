import React, { useState } from "react";
import {
  searchBooks,
  setSearchTerm,
} from "../../../redux/features/book/bookSlice";
import { useAppDispatch } from "../../../redux/hook";

export default function SearchBar() {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchTerm(text));
    dispatch(searchBooks());
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="search here"
          className="input input-bordered w-4/5"
          value={text}
          onChange={handleInputChange}
        />
        <button type="submit" className="mr-3 btn btn-ghost">
          search
        </button>
      </form>
    </div>
  );
}
