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
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../../../redux/features/book/bookApi";

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const bookData = data?.book;
  const { image, title, author, publicationDate, price, reviews } = bookData;
  const bookReviews: Review[] = reviews; // Update the type to Review[]

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
          setDeleteLoad(true);
          const response: any = await deleteBook(id);
          if (response?.data) {
            swal(response?.data?.message, "", "success");
            navigate("/books");
            setDeleteLoad(false);
          } else {
            swal("Book delete operation failed!", "", "error");
            setDeleteLoad(false);
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
            <div>
              <h6 className="mb-2 mt-6 text-xl font-semibold">Reviews:</h6>
              {bookReviews.map((review, index) => (
                <div key={index} className="mb-2">
                  <p className="text-white">Rating: {review.rating} / 5</p>
                  <p className="text-white">Comment: {review.comment}</p>
                </div>
              ))}
            </div>
            <button className="my-3 btn btn-primary">Add To Cart</button>
            <button className="btn btn-secondary">wished</button>
          </div>
          <button className=" btn btn-sm btn-active btn-ghost">Edit</button>
          <button onClick={handleDeleteBook} className="btn btn-sm btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
