import React from "react";
import "./signForm.scss";
import { useState } from "react";

const SignForm = () => {
  const [container, setContainer] = useState("");

  return (
    <div className="SignForm">
      <div className={`container ${container}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="https://www.google.com">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setContainer("")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setContainer("right-panel-active")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignForm;
