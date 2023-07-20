import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToReading,
  removeFromReading,
} from "../../../redux/features/reading/readingSlice";
import { removeFromWishList } from "../../../redux/features/wishList/wishListSlice";
import { IBook } from "../../../types/globalTypes";

interface WishListCartProps {
  book: IBook;
  payload: string;
}

const WishListCart: React.FC<WishListCartProps> = ({ book, payload }) => {
  const { title, author, genre, image } = book;
  const dispatch = useDispatch();

  const handleBookSlice = () => {
    if (payload === "Make Reading") {
      dispatch(removeFromWishList(book));
      dispatch(addToReading(book));
      //   const updatedData = {
      //     email: user?.email,
      //     reading: [book?._id],
      //   };
      //   updateUserMutation(updatedData);
      toast.success("Book is added in Reading");
    }
    if (payload === "Make Finished") {
      dispatch(removeFromReading(book));
      // dispatch(addToFinished(book));
      //   const updatedData = {
      //     email: user?.email,
      //     finished: [book?._id],
      //   };
      //   updateUserMutation(updatedData);
      toast.success("Book is added in Finished");
    }
    //     if (payload === "Remove") {
    //       dispatch(removeFromFinished(book));
    //       toast.success("Remove is successfull.");
    //     }
  };

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
        <div onClick={handleBookSlice} className="btn btn-accent w-full">
          {payload}
        </div>
      </div>
    </div>
  );
};

export default WishListCart;
