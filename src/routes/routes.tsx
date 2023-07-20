import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import AddNewBook from "../pages/Books/AddNewBook/AddNewBook";
import BookDetails from "../pages/Books/BookDetails/BookDetails";
import Books from "../pages/Books/Books/Books";
import FinishedBook from "../pages/Books/FinishedBook/FinishedBook";
import ReadingBook from "../pages/Books/ReadingBook/ReadingBook";
import Wishlist from "../pages/Books/WishList/Wishlist";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Register/Login/Login";
import SignUp from "../pages/Register/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-new-book",
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/wish-list",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/reading",
        element: (
          <PrivateRoute>
            <ReadingBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/finished",
        element: (
          <PrivateRoute>
            <FinishedBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
