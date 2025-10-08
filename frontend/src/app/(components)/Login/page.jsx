"use client";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md"; 
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

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
        />
      </div>

      
      <div className="input-wrapper">
        <MdLock className="icon password-icon" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="input-field"
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

      
      <button className="btn-primary">Login</button>

      <p className="footer-text">
        Don’t have an account? <a href="/Signup" className="link">Sign up</a>
      </p>
    </div>
  );
}
