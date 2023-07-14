import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../lib/firebase";
import { setUser } from "../../../redux/features/user/UserSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log("Logout");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setUser(null));
      })
      .catch((error) => {
        // Handle the error
        console.log("Logout error:", error);
      });
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
      <li>
        <Link to="/blog">blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </React.Fragment>
  );

  const navbarEnd = (
    <React.Fragment>
      {user?.email ? (
        <>
          <li className="lg:hidden">
            <button>Sign out</button>
          </li>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              <div className="flex flex-col items-center justify-center">
                <div className="flex space-x-5">
                  <img
                    alt=""
                    className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
                    src="https://source.unsplash.com/40x40/?portrait?4"
                  />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 w-32"
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Sign out</button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar bg-gray-900 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            {" "}
            PhoneSwap{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end mr-5">
          <ul>{navbarEnd}</ul>
        </div>
      </div>
    </div>
  );
}
