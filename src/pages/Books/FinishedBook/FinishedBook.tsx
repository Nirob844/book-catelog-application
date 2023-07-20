import { useAppSelector } from "../../../redux/hook";
import WishListCart from "../WishListCart/WishListCart";

const FinishedBook = () => {
  const { books } = useAppSelector((state) => state.finished);
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-8 min-h-[70vh]">
        <div>
          <div>
            <h2 className="text-center mb-4 text-4xl font-semibold font-serif text-slate-500">
              Your all finished book is here.
            </h2>
          </div>
          <div className="mx-auto">
            <div className="flex  gap-4 justify-center  items-center flex-wrap">
              {books.map((book) => (
                <WishListCart
                  key={book.title}
                  book={book}
                  payload="Remove"
                ></WishListCart>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedBook;
