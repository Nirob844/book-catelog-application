/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetRecentBooksQuery } from "../../../redux/features/book/bookApi";
import { IBook } from "../../../types/globalTypes";
import AllBook from "../../Books/AllBook/AllBook";

const RecentBooks = () => {
  const { data, isLoading } = useGetRecentBooksQuery(undefined);
  console.log(data);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const bookData: IBook[] = data?.book || []; // Assign a default empty array if data is undefined

  if (isLoading) {
    return <div>Loading...</div>; // Placeholder or loading indicator while data is being fetched
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center">Recently public book </h1>
      <div className="">
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-10 lg:px-8 lg:py-10">
          {/* all books  */}
          <div className="grid gap-12 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            {bookData.map((book: IBook) => (
              <AllBook key={book.title} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBooks;
