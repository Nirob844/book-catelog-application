/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../../../redux/features/book/bookApi";

interface Review {
  rating: number;
  comment: string;
}

export default function BookDetails() {
  const { id } = useParams();

  const { data, isLoading } = useSingleBookQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { image, title, author, publicationDate, price, reviews } = data;

  const bookReviews: Review[] = reviews; // Update the type to Review[]

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
        </div>
      </div>
    </div>
  );
}
