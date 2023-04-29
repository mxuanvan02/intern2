import React from 'react'
const  RegisterPage  = () => {
    return ( 
        <div class="flex-container register__wrap">
        <form id="registerForm" class="register-form flex-container">
        <div class="flex-row">
          <h1 class="register__title">Đăng ký</h1>
          <div class="register-form__item">
            <label class="register-form__label">Họ và tên</label>
            <br />
            <input type="text" id="name" placeholder="Họ và tên" class="register-form__control" required></input>
          </div>
          <div class="register-form__item">
            <label class="register-form__label" >Email</label>
            <br />
            <input type="email" id="email" placeholder="Email" class="register-form__control" required></input>
          </div>
          <div class="register-form__item">
            <label class="register-form__label">Tên đăng nhập</label>
            <br />
            <input type="text" id="userName" placeholder="Tên đăng nhập" class="register-form__control" required></input>
          </div>
          <div class="register-form__item">
            <label class="register-form__label">Mật khẩu</label>
            <br />
            <input type="password" id="password" placeholder="Mật khẩu" class="register-form__control" required></input>
          </div>
          <div class="register-form__item">
            <label class="register-form__label">Nhập lại mật khẩu</label>
            <br />
            <input type="password" id="repeatPassword" placeholder="Nhập lại mật khẩu" class="register-form__control" required></input>
          </div>
          <ul class="helper-text">
            <li class="helper-text__length">Mật khẩu phải chứa ít nhất 8 kí tự.</li>
            <li class="helper-text__lowercase">Mật khẩu phải chứa ít nhất 1 kí tự thường.</li>
            <li class="helper-text__uppercase">Mật khẩu phải chứa ít nhất 1 kí tự hoa.</li>
            <li class="helper-text__special">Mật khẩu phải chứa ít nhất 1 kí tự số.</li>
          </ul>
          <div class="text-center"><button type="submit" id="btn_register" value="register" onclick="onRegister()" class="btn register-form__btn">Đăng ký</button></div>
          <div class="register-form__redirect-wrap">
            <div class="register-form__to-main-page"><a href="/">Đến trang chủ.</a></div>
            <div class="register-form__login"><a href="/login">Đã có tài khoản?</a></div>
          </div>
        </div>
      </form>
    </div>
     );
}
 
export default  RegisterPage;