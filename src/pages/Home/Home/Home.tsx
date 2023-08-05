import Author from "../Author/Author";
import Banner from "../Banner/Banner";
import RecentBooks from "../RecentBooks/RecentBooks";

function Home() {
  return (
    <div>
      <Banner />
      <RecentBooks />
      <Author />
    </div>
  );
}

export default Home;
