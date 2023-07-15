import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Main from "./layout/Main";
import { auth } from "./lib/firebase";
import { setLoading, setUser } from "./redux/features/user/UserSlice";
import { useAppDispatch } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <Main />
    </>
  );
}

export default App;
