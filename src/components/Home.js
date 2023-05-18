import React from "react";
import Articles from "./Articles";
import Hots from "./Hots";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
  const { auth, isAuth, setIsAuth } = useContext(AuthContext);
  console.log(auth)
  return (
    <div className="body-contents">
      <Hots />
      <Articles />
    </div>
  );
};

export default Home;
