import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../../types/globalTypes";

interface WishListCartProps {
  book: IBook;
  payload: string;
}

const ReadingBookCart: React.FC<WishListCartProps> = ({ book, payload }) => {
  const { title, author, genre, image } = book;
  return (
    <div className="rounded-lg border">
      <div>
        <Link to={`/book-details/${book?._id}`}>
          {" "}
          <div className="rounded-t-md px-5 py-3">
            <img className="w-48 h-52" src={image} alt="" />
          </div>
        </Link>
        <div className="px-5 py-3">
          <p className="mb-2 text-md text-slate-500 font-bold">Name: {title}</p>
          <p className="mb-2 text-sm text-slate-500 font-semibold">
            Author: {author}
          </p>
          <p className="mb-2 text-sm text-slate-500 font-semibold">
            Genre: {genre}
          </p>
        </div>
        <div className="btn btn-accent w-full">{payload}</div>
      </div>
    </div>
  );
};

export default ReadingBookCart;
