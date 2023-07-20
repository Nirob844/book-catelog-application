import { Link } from "react-router-dom";
import { IBook } from "../../../types/globalTypes";

interface IProps {
  book: IBook;
}

export default function AllBook({ book }: IProps) {
  const { title, image, genre, author, publicationDate } = book;

  return (
    <div>
      <div>
        <Link to={`/book-details/${book._id}`} aria-label="View Item">
          {/* <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={image}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Book Name: {title}
              </p>
              <br />
              <p className="text-sm tracking-wide text-gray-300">
                Author: {author}
              </p>
              <br />
              <p className="text-sm tracking-wide text-gray-300">
                Genre: {genre}
              </p>
              <br />
              <br />
              <p className="text-sm tracking-wide text-gray-300">
                Publication Date: {publicationDate}
              </p>
            </div>
          </div> */}
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-xl hover:-translate-y-2 hover:shadow-2xl">
            <div>
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
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
