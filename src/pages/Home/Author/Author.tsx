const Author = () => {
  const authors = [
    {
      name: "Robert Greene ",
      book: "29 publish book",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Robert_Greene_B%26W.jpg",
    },
    {
      name: "Robert Greene ",
      book: "32 publish book",
      img: "https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3772623.jpg&fm=jpg",
    },
    {
      name: "Robert Greene ",
      book: "23 publish book",
      img: "https://i.pinimg.com/236x/d7/37/94/d737946d153beb56555ed95ab0af1ee1--key-west-vacations-couple-photography.jpg",
    },
    {
      name: "Robert Greene ",
      book: "16 publish book",
      img: "https://scribemedia.com/wp-content/uploads/2015/09/eric-ries.png",
    },
    {
      name: "Robert Greene ",
      book: "21 publish book",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRT17gU221qOPXQqi8BfTAoCU2UQRPmz_BfP-lv_jtp70CL94Dxkd0-lWDSCIKFMK1FOo&usqp=CAU",
    },
    {
      name: "Robert Greene ",
      book: "23 publish book",
      img: "https://www.theparisreview.org/blog/wp-content/uploads/2018/10/elie-wiesel-.jpg",
    },
    {
      name: "Robert Greene ",
      book: "22 publish book",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmfg6HtFyYJb6KxYmVcXhNOGP0gyvIFNziQ&usqp=CAU",
    },
  ];

  return (
    <div className="mb-10 w-11/12 mx-auto py-12">
      <div>
        <h1 className="mb-3 text-4xl font-semibold text-center">
          Popular Author
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mx-auto">
        {authors?.map((author, i) => (
          <div key={i} className="">
            <div className="text-center">
              <img
                src={author?.img}
                alt="card image"
                className="mx-auto pt-4 w-32 h-32 rounded-full"
              />
              <p className="text-center mt-3 text-sm font-medium">
                {author?.name}
              </p>
              <p className="text-center mt-3 text-sm font-medium">
                {author?.book}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
