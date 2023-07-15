export default function SearchBar() {
  return (
    <div className="">
      <input
        placeholder="search here"
        className="input input-bordered w-4/5 mt-5"
        type="text"
      />
      <button className="mr-3 btn btn-ghost">search</button>
    </div>
  );
}
