/* eslint-disable @typescript-eslint/no-unsafe-call */
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
import { Key, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  useBookReviewMutation,
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../../../redux/features/book/bookApi";
import { addToWishList } from "../../../redux/features/wishList/wishListSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useSingleBookQuery(id);
  const [deleteBook] = useDeleteBookMutation();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [reviewComment, setReviewComment] = useState("");
  const [loading, setLoading] = useState(false);

  // Hook to add a review
  const [addReview] = useBookReviewMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const bookData = data?.book;
  const { image, title, author, publicationDate, price } = bookData;

  const handleWishList = () => {
    dispatch(addToWishList(bookData));
    toast.success("Book is added in Wishlist");
  };

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
  //review
  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response: any = await addReview({
      id: id,
      data: { email: user.email, comment: reviewComment },
    });
    if (response?.data) {
      setReviewComment("");
      setLoading(false);
    } else {
      setLoading(false);
    }
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
          {user.email == bookData.email && (
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
          {user.email && (
            <form onSubmit={handleAddReview}>
              <label htmlFor="review" className="text-lg font-[500] my-3">
                Write Review
              </label>
              <textarea
                id="review"
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                className="w-full h-32 p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Write your review here..."
                required
              ></textarea>
              {loading ? (
                <button
                  disabled
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                >
                  Loading...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit Review
                </button>
              )}
            </form>
          )}
          <div className="mb-4">
            {bookData?.customerReviews?.length > 0 ? ( // Add optional chaining here
              <ul className="space-y-4">
                {bookData?.customerReviews?.map(
                  (
                    review: { email: string; comment: string },
                    index: Key | null | undefined
                  ) => (
                    <li key={index} className="flex items-start mt-4">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://source.unsplash.com/40x40/?portrait?4"
                        alt="User Profile"
                      />
                      <div className="ml-4">
                        <p className="font-[600]">{review.email}</p>
                        <p className="py-2 rounded">{review.comment}</p>
                      </div>
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
