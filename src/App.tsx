import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Main from "./layout/Main";
import { setUser } from "./redux/features/user/UserSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(setLoading(true));

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  //       dispatch(setUser(user.email!));
  //       dispatch(setLoading(false));
  //     } else {
  //       dispatch(setLoading(false));
  //     }
  //   });
  // }, [dispatch]);

  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // Authenticate user info extract function
  const userState = () => {
    if (user.email) {
      try {
        dispatch(setUser(user.email));
      } catch (error) {
        console.error("Error decoding JWT token:", error);
      }
    }
  };
  useEffect(() => {
    userState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email]);

  return (
    <>
      <Toaster />
      <Main />
    </>
  );
}

export default App;
