"use client";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md"; 
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import axios from "axios";

export default function LoginForm() {

  const [userData, setUserData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle login submission logic here
    axios.post('http://localhost:5000/api/auth/login',{
      email: userData.email,
      password: userData.password
    }).then(response => {
      console.log("Login successful:", response.data);
      setUserData({ email: '', password: '' });
    }).catch(error => {
      console.error("Login failed:", error);
    });
  }
  return (
    <div className="login-card">
      {/* Title */}
      <h1 className="title">AI job portal</h1>

      
      <div className="input-wrapper">
        <MdEmail className="icon email-icon" />
        <input
          type="email"
          placeholder="Email address"
          className="input-field"
          onChange={changeHandler}
        />
      </div>

      
      <div className="input-wrapper">
        <MdLock className="icon password-icon" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="input-field"
          onChange={changeHandler}
        />
        
        <span
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash className="eye-icon" /> : <FaEye className="eye-icon" />}
        </span>
      </div>

      <div className="forgot-wrapper">
        <a href="/ForgotPassword" className="forgot-link">Forgot password?</a>
      </div>

      
      <button className="btn-primary" onClick={submitHandler}>Login</button>

      <p className="footer-text">
        Don’t have an account? <a href="/Signup" className="link">Sign up</a>
      </p>
    </div>
  );
}
