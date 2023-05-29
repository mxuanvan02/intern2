import { createContext, useState } from "react";
import axios from "../api/axios";
import Cookies from "universal-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const cookie = new Cookies()

  const getMe = async () => {
    setIsLoading(true)
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
          setIsAuth(true)
        })
        .catch((err) => setIsAuth(false));
    }
    setIsLoading(false)
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, isAdmin, setIsAdmin, isAuth, setIsAuth, isLoading, setIsLoading, getMe }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;