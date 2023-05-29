import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import Cookies from "universal-cookie";
import AuthContext from "../../context/AuthProvider";

const RegisterPage = () => {
  const navigate = useNavigate();
  const cookie = new Cookies()
  const {auth, setAuth, isAuth, setIsAuth, getMe} = useContext(AuthContext)
  
  const [data, setData] = useState(null)
  const handleChange = (e) => {
    const {name, value: val} = e.target
    setData({
      ...data,
      [name]: val,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAuth(false)
    await axios
      .post("/auth/signup", data)
      .then((response) => {
        cookie.set("access_token", response.data.access_token)
        setIsAuth(true)
        getMe()
        console.log("DANG KY THANH CONG")
        navigate("/", {replace: true})
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="flex-container register__wrap">
      <form id="registerForm" className="register-form flex-container" onSubmit={handleSubmit}>
        <div className="flex-row">
          <h1 className="register__title">Đăng ký</h1>
          <div className="register-form__item">
            <label className="register-form__label">Họ và tên</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Họ và tên"
              className="register-form__control"
              onChange={handleChange}
              name="fullName"
              required
            ></input>
          </div>
          <div className="register-form__item">
            <label className="register-form__label">Email</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="register-form__control"
              onChange={handleChange}
              name="email"
              required
            ></input>
          </div>
          <div className="register-form__item">
            <label className="register-form__label">Mật khẩu</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Mật khẩu"
              className="register-form__control"
              onChange={handleChange}
              name="password"
              required
            ></input>
          </div>
          {/* <ul className="helper-text">
            <li className="helper-text__length">
              Mật khẩu phải chứa ít nhất 8 kí tự.
            </li>
            <li className="helper-text__lowercase">
              Mật khẩu phải chứa ít nhất 1 kí tự thường.
            </li>
            <li className="helper-text__uppercase">
              Mật khẩu phải chứa ít nhất 1 kí tự hoa.
            </li>
            <li className="helper-text__special">
              Mật khẩu phải chứa ít nhất 1 kí tự số.
            </li>
          </ul> */}
          <div className="text-center">
            <button
              type="submit"
              id="btn_register"
              value="register"
              onclick="onRegister()"
              className="btn register-form__btn"
            >
              Đăng ký
            </button>
          </div>
          <div className="register-form__redirect-wrap">
            <div className="register-form__to-main-page">
              <Link to="/">Đến trang chủ.</Link>
            </div>
            <div className="register-form__login">
              <Link to="/login">Đã có tài khoản?</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
