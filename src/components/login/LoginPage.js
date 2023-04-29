
const  LoginPage  = () => {
    return ( 
        <div class="flex-container login__wrap">
        <form class="login-form flex-container" id="loginForm" >
          <div class="flex-row">
            <h1 class="login__title">Đăng nhập</h1>
            <div class="login-form__item">
              <label class="login-form__label">Tên đăng nhập</label>
              <br />
              <input 
              type="text" 
              id="userUserName" 
              placeholder="Tên đăng nhập" 
              class="login-form__control" 
              
              required/>
            </div>
            <div class="login-form__item">
              <label class="login-form__label">Mật khẩu</label>
              <br />
              <input 
              type="password" 
              id="userPassword" 
              placeholder="Mật khẩu" 
              class="login-form__control" 
              
              required />
            </div>
            <div class="login-form__check">
            <input type="checkbox" id="rememberMe" value="IsRememberMe" class="login-form__check-input"/>
              <label class="form-check-label">Nhớ tên đăng nhập</label>
            </div>
            <div class="text-center"><button type="submit" id="login_btn" value="login" onclick="onLogin()" class="btn login-form__btn">Đăng nhập</button></div>
            <div class="login-form__redirect-wrap">
              <div class="login-form__to-main-page"><a href="/">Đến trang chủ.</a></div>
              <div class="login-form__forgot"><a href="#">Quên mật khẩu?</a></div>
              <div class="login-form__register"><a href="/register">Đăng ký tài khoản.</a></div>
            </div>
          </div>
        </form>
      </div>
     );
}
 
export default  LoginPage;