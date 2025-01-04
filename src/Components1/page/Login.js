import React from 'react'

const Login = () => {
  return (
   <>
   <div>
  <div className="theme-layout gray-bg vh-100">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-lg-8">
          <div className="logo-up">
            <figure className="logo"><img alt src="images/logo.png" /><span>Socimo</span></figure>
          </div>
          <div className="box">
            <input type="checkbox" id="toggle" className="box__toggle" hidden />
            <img src="images/resources/login-top.jpg" alt="Picture by Autumn Studio" className="box__image" />
            <form className="form form--register">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg></span>
              <h1 className="form__title">Sign up</h1>
              <div className="form__helper">
                <input type="text" name="user" id="new-user" placeholder="User" className="form__input" />
                <label className="form__label" htmlFor="new-user">User</label>
              </div>
              <div className="form__helper">
                <input type="email" name="email" id="email" placeholder="Email" className="form__input" />
                <label className="form__label" htmlFor="email">Email</label>
              </div>
              <div className="form__helper">
                <input type="password" name="password" id="new-user-password" placeholder="Password" className="form__input" />
                <label className="form__label" htmlFor="new-user-password">Password</label>
              </div>
              <div className="form__helper">
                <input type="password" name="password" id="confirm-password" placeholder="Confirm password" className="form__input" />
                <label className="form__label" htmlFor="confirm-password">Confirm password</label>
              </div>
              <button type="submit" className="form__button">Register</button>
              <p className="form__text">Already have an account?
                <label htmlFor="toggle" className="form__link">Sign in!</label>
              </p>
            </form>
            <form className="form form--login">
              <span><svg id="login" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
              <h1 className="form__title">Sign in</h1>
              <div className="form__helper">
                <input type="text" name="user" id="user" placeholder="User" className="form__input" />
                <label className="form__label" htmlFor="user">User</label>
              </div>
              <div className="form__helper">
                <input type="password" name="password" id="password" placeholder="Password" className="form__input" />
                <label className="form__label" htmlFor="password">Password</label>
              </div>
              <button type="submit" className="form__button">Login</button>
              <p className="form__text">Don't have an account?
                <label htmlFor="toggle" className="form__link">Sign up!</label>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <figure className="bottom-mockup"><img alt src="images/footer.png" /></figure>
    <div className="bottombar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className>© Copyright All rights reserved by socimo 2020</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Mirrored from wpkixx.com/html/socimo-panel/login-register.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 02 Dec 2024 11:15:29 GMT */}
</div>
   </>
  )
}

export default Login;
