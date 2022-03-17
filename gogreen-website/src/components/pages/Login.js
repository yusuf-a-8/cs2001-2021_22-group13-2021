import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Login.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login">
        <h2>Login with GoGreen</h2>
        <br></br>
        <br></br>
        <form action="/action_page.php" method="post"></form>
        <div class="imgcontainer"></div>

        <div class="container">
          
          <label for="email ">
            <small>Email</small>
          </label>  
          <input type="text" placeholder="Enter email" name="email" required />
          
          <label for="psw">
            <small>Password</small>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
        </div>
        <div>
            <Link to = "/ForgotPsw">
                <button type="button" class="forgot password">
                    Forgot password?
                </button>
            </Link>
        </div>
        <div className="SignUp">
            <Link to = "/signup">
                <button type="submit">Not registered? Signup</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
