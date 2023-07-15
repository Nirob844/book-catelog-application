export default function FilterBooks() {
  const genres = [
    "Mystery",
    "Thriller",
    "Science Fiction",
    "Historical Fiction",
    "Poetry",
  ];

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
  return (
    <div className="">
      {/* Sidebar */}
      <div className=" bg-gray-800 p-4">
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
  );
}
