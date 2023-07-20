import Cookies from "js-cookie";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Main from "./layout/Main";
import { setUser } from "./redux/features/user/UserSlice";
import { useAppDispatch } from "./redux/hook";

interface DecodedToken extends JwtPayload {
  email: string;
}

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

  const dispatch = useAppDispatch();

  const token: string | undefined = Cookies.get("token");

  const verifyUserToken = () => {
    if (token) {
      try {
        const decodedToken: DecodedToken = jwt_decode(token);
        if (decodedToken && decodedToken?.email) {
          dispatch(setUser(decodedToken?.email));
        }
      } catch (error) {
        console.error("Error decoding JWT token:", error);
      }
    }
  };

  useEffect(() => {
    verifyUserToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <Toaster />
      <Main />
    </>
  );
}

export default App;
