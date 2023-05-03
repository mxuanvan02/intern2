import { Link } from "react-router-dom";

const  LoginPage  = () => {
    return ( 
        <div className="flex-container login__wrap">
        <form className="login-form flex-container" id="loginForm" >
          <div className="flex-row">
            <h1 className="login__title">Đăng nhập</h1>
            <div className="login-form__item">
              <label className="login-form__label">Tên đăng nhập</label>
              <br />
              <input 
              type="text" 
              id="userUserName" 
              placeholder="Tên đăng nhập" 
              className="login-form__control" 
              
              required/>
            </div>
            <div className="login-form__item">
              <label className="login-form__label">Mật khẩu</label>
              <br />
              <input 
              type="password" 
              id="userPassword" 
              placeholder="Mật khẩu" 
              className="login-form__control" 
              
              required />
            </div>
            <div className="login-form__check">
            <input type="checkbox" id="rememberMe" value="IsRememberMe" className="login-form__check-input"/>
              <label className="form-check-label">Nhớ tên đăng nhập</label>
            </div>
            <div className="text-center"><button type="submit" id="login_btn" value="login" onclick="onLogin()" className="btn login-form__btn">Đăng nhập</button></div>
            <div className="login-form__redirect-wrap">
              <div className="login-form__to-main-page"><Link to="/">Đến trang chủ.</Link></div>
              <div className="login-form__forgot"><Link to="#">Quên mật khẩu?</Link></div>
              <div className="login-form__register"><Link to="/register">Đăng ký tài khoản.</Link></div>
            </div>
          </div>
        </form>
      </div>
     );
}
 
export default  LoginPage;