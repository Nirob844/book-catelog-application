/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../../../redux/features/book/bookApi";
import { addToWishList } from "../../../redux/features/wishList/wishListSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

interface IBook {
  _id: string;
  email: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  summary: string;
  customerReviews: [];
}

interface Review {
  rating: number;
  comment: string;
}

export default function BookDetails() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { data, isLoading } = useSingleBookQuery(id);
  const [deleteBook] = useDeleteBookMutation();
  const [isDeleteLoad, setDeleteLoad] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const bookData = data?.book;
  const { image, title, author, publicationDate, price, reviews } = bookData;
  const bookReviews: Review[] = reviews; // Update the type to Review[]

  const handleWishList = () => {
    dispatch(addToWishList(bookData));
    // const updatedData = {
    //   email: user?.email,
    //   wishList: book?._id,
    // };
    // updateUserMutation(updatedData);
    toast.success("Book is added in Wishlist");
  };
  // Update book
  // useEffect(() => {
  //   if (bookData) {
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //     setBook(bookData);
  //   }
  // }, [bookData, id]);
  //delete book
  const handleDeleteBook = () => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: ["Cancel", "Yes"],
      dangerMode: false,
    }).then(async (willDelete) => {
      if (willDelete) {
        console.log(id);

        if (id) {
          //setDeleteLoad(true);
          const response: any = await deleteBook(id);
          if (response?.data) {
            toast.success("delete successful");
            navigate("/books");
          } else {
            toast.error("Book delete operation failed!");
          }
        }
      }
    });
  };

  return (
    <div className="w-3/5 h-2/4 mx-auto">
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-gray-800 border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="lg:w-1/2">
            <img
              src={image}
              alt=""
              className="object-cover w-full h-80 lg:h-full"
            />
          </div>
          <div className="flex flex-col justify-center p-8 bg-gray-800 lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                Brand new
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {title}
            </h5>
            <p className="mb-5 text-white">Authors: {author}</p>
            <p className="mb-5 text-white">Publisher: {publicationDate}</p>
            <p className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-deep-purple-800">
              Price: {price}
            </p>
            <button onClick={handleWishList} className="my-3 btn btn-secondary">
              wished
            </button>
          </div>
          {user.email && (
            <>
              <Link to={`/edit-book/${bookData?._id}`}>
                <button className="btn btn-sm btn-ghost">Edit</button>
              </Link>
              <button
                onClick={handleDeleteBook}
                className="ml-2 btn btn-sm btn-error"
              >
                Delete
              </button>
            </>
          )}
        </div>
        <div className="mt-5">
          <h1 className="text-4xl">Comment:</h1>
          <div className="flex items-center my-5">
            <input
              className="border p-2 mr-2 flex-grow"
              type="text"
              placeholder="comment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
