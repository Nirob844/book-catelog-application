/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from "../../../redux/features/book/bookApi";
import { IBook } from "../../../types/globalTypes";
import AllBook from "../AllBook/AllBook";
import FilterBooks from "../FilterBooks/FilterBooks";
import SearchBar from "../SearchBar/SearchBar";
import "./Books.css";

interface IProps {
  book: IBook;
}

export default function Books() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>; // Placeholder or loading indicator while data is being fetched
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const bookData: IBook[] = data?.data || []; // Assign a default empty array if data is undefined

  return (
    <div className="">
      <div className="book-container">
        <div>
          <FilterBooks />
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20">
          <SearchBar />
          <div className="grid gap-12 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
            {bookData.map((book: IBook) => (
              <AllBook key={book.title} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
