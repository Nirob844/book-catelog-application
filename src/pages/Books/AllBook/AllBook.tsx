import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { addToWishList } from "../../../redux/features/wishList/wishListSlice";
import { useAppDispatch } from "../../../redux/hook";
import { IBook } from "../../../types/globalTypes";

interface IProps {
  book: IBook;
}

export default function AllBook({ book }: IProps) {
  const { title, image, genre, author, publicationDate } = book;
  const dispatch = useAppDispatch();

  const handleWishList = () => {
    dispatch(addToWishList(book));
    toast.success("Book is added in Wishlist");
  };

  return (
    <div>
      <div>
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-xl hover:-translate-y-2 hover:shadow-2xl">
          <div>
            <Link to={`/book-details/${book._id}`} aria-label="View Item">
              <div className="rounded-t-md px-5 py-3">
                <img className="w-60 h-64" src={image} alt="" />
              </div>
              <div className="px-5 py-3">
                <p className="mb-2 text-md text-slate-500 font-bold">
                  Name: {title}
                </p>
                <p className="mb-2 text-sm text-slate-500 font-semibold">
                  Author: {author}
                </p>
                <p className="mb-2 text-sm text-slate-500 font-semibold">
                  Genre: {genre}
                </p>
                <p className="mb-2 text-sm text-slate-500 font-semibold">
                  Publication Date : {publicationDate}
                </p>
              </div>
            </Link>
          </div>
          <button onClick={handleWishList} className="w-full btn btn-secondary">
            wished
          </button>
        </div>
      </div>
    </div>
  );
}
