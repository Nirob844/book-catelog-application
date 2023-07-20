import { useAppSelector } from "../../../redux/hook";
import WishListCart from "../WishListCart/WishListCart";

const ReadingBook = () => {
  const { books } = useAppSelector((state) => state.reading);
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-8 min-h-[70vh]">
        <div>
          <div>
            <h2 className="text-center mb-4 text-4xl font-semibold font-serif text-slate-500">
              Your all reading book is here.
            </h2>
          </div>
          <div className="mx-auto">
            <div className="flex  gap-4 justify-center  items-center flex-wrap">
              {books.map((book) => (
                <WishListCart
                  key={book.title}
                  book={book}
                  payload="Make Finished"
                ></WishListCart>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingBook;
