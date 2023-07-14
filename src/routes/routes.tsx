import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetails from "../pages/Books/BookDetails/BookDetails";
import Books from "../pages/Books/Books/Books";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Register/Login/Login";

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
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
