import { Link } from "react-router-dom";
import { IBook } from "../../../types/globalTypes";

interface WishListCartProps {
  book: IBook;
  payload: string;
}

const WishListCart: React.FC<WishListCartProps> = ({ book, payload }) => {
  // const { title, author, genre, image } = book;
  return (
    <div className="rounded-lg border">
      <div>
        <Link to={`/book-details/${book?._id}`}>
          {" "}
          <div className="rounded-t-md px-5 py-3 w-60 h-64">
            <img className="w-48 h-52" src={book?.image} alt="" />
          </div>
        </Link>
        <div className="px-2">
          <p className="text-md text-slate-500 font-semibold">{book?.title}</p>
          <p className="text-sm text-slate-500 font-semibold">{book?.author}</p>
          <h4 className="text-sm text-slate-500 font-semibold">
            {book?.genre}
          </h4>
        </div>
        <div className="btn btn-sm rounded-t-sm bg-teal-700 hover:bg-teal-800 text-white font-semibold w-full">
          {payload}
        </div>
      </div>
    </div>
  );
};

export default WishListCart;
