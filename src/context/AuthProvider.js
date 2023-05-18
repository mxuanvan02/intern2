import { createContext, useState } from "react";
import axios from "../api/axios";
import Cookies from "universal-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const cookie = new Cookies()

  const getMe = async () => {
    const token = cookie.get("access_token") || null;
    if (token) {
      await axios
        .get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data;
          setAuth(data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, isAuth, setIsAuth, getMe }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;