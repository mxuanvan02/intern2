import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import Cookies from "universal-cookie";

import AuthContext from "../../context/AuthProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();

  const { auth, setAuth, isAuth, setIsAuth, getMe } = useContext(AuthContext);

  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { name, value: val } = e.target;
    setData({
      ...data,
      [name]: val,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAuth(false);
    await axios
      .post("/auth/signin", data)
      .then((response) => {
        cookie.set("access_token", response.data.access_token);
        setIsAuth(true);
        navigate("/", {replace: true})
      })
      .catch((err) => console.log(err));
    getMe();
  };


  return (
    <div className="flex-container login__wrap">
      <form
        className="login-form flex-container"
        id="loginForm"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="flex-row">
          <h1 className="login__title">Đăng nhập</h1>
          <div className="login-form__item">
            <label className="login-form__label">Email</label>
            <br />
            <input
              type="text"
              id="userEmail"
              placeholder="Email"
              className="login-form__control"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-form__item">
            <label className="login-form__label">Mật khẩu</label>
            <br />
            <input
              type="password"
              id="userPassword"
              placeholder="Mật khẩu"
              className="login-form__control"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-form__check">
            <input
              type="checkbox"
              id="rememberMe"
              value="IsRememberMe"
              className="login-form__check-input"
            />
            <label className="form-check-label">Nhớ tên đăng nhập</label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              id="login_btn"
              value="login"
              onclick="onLogin()"
              className="btn login-form__btn"
            >
              Đăng nhập
            </button>
          </div>
          <div className="login-form__redirect-wrap">
            <div className="login-form__to-main-page">
              <Link to="/">Đến trang chủ.</Link>
            </div>
            <div className="login-form__forgot">
              <Link to="#">Quên mật khẩu?</Link>
            </div>
            <div className="login-form__register">
              <Link to="/register">Đăng ký tài khoản.</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
