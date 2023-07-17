/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { useGetBooksQuery } from "../../../redux/features/book/bookApi";
import { IBook } from "../../../types/globalTypes";
import AllBook from "../AllBook/AllBook";
import "./Books.css";

interface IProps {
  book: IBook;
}

export default function Books() {
  const [selectGenre, setSelectGenre] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectpublicationYear, setSelectPublicationYear] = useState("");

  const { data, isLoading } = useGetBooksQuery({
    search: searchText,
    genre: selectGenre,
    publicationYear: selectpublicationYear,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const bookData: IBook[] = data?.data || []; // Assign a default empty array if data is undefined

  const genres = ["Mystery", "Fantasy", "Science Fiction", "Classic", "Poetry"];

  const publicationYears = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  if (isLoading) {
    return <div>Loading...</div>; // Placeholder or loading indicator while data is being fetched
  }

  return (
    <div className="">
      <div className="book-container">
        <div>
          {/* <FilterBooks /> */}
          <div className=" bg-gray-800 p-5">
            <h1 className="text-2xl font-semibold">Filter all books</h1>
            {/* Filter options */}
            <div className="space-y-2">
              <div className=" p-2 rounded">
                <h2 className="text-[15px] text-gray-400">By Genre:</h2>
                <div className="mt-2">
                  {genres?.map((genre, i) => {
                    return (
                      <div key={i} className="flex items-center mb-[8px]">
                        <input
                          className="h-[18px] w-[18px]"
                          id={genre}
                          type="radio"
                          name="genre"
                        />
                        <label className="text-[14px] ml-3" htmlFor={genre}>
                          {genre}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" p-2 rounded">
                <div className=" p-2 rounded">
                  <h2 className="text-[15px] text-gray-400">
                    By Publication Year:
                  </h2>
                  <div className="mt-2">
                    {publicationYears?.map((genre, i) => {
                      return (
                        <div key={i} className="flex items-center mb-[8px]">
                          <input
                            className="h-[18px] w-[18px]"
                            id={genre}
                            type="radio"
                            name="genre"
                          />
                          <label className="text-[14px] ml-3" htmlFor={genre}>
                            {genre}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-10 lg:px-8 lg:py-10">
          {/* SearchBar  */}
          <div className="flex items-center mb-10">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="border border-gray-300 p-2 mr-2 flex-grow"
              type="text"
              placeholder="Search..."
            />
          </div>
          {/* all books  */}
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
