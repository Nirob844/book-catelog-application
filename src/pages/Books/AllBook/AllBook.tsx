import { Link } from "react-router-dom";

export default function AllBook({ book }) {
  const { title, image, genre, publicationDate } = book;

  return (
    <Link to="" aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
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
          <p className="text-sm tracking-wide text-gray-300">Genre:{genre}</p>
          <br />
          <p className="text-sm tracking-wide text-gray-300">
            Publication Date: {publicationDate}
          </p>
        </div>
      </div>
    </Link>
  );
}
