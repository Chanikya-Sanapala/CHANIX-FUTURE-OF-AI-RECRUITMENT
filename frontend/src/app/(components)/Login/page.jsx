"use client";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md"; 
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm() {
const router = useRouter()

  const [userData, setUserData] = useState({ 
    email: "", 
    password: "" 
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Submitting login for:", userData);
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
    // router.push('/Dashboard');
  }
  return (
    <div className="login-card">
      {/* Title */}
      <h1 className="title">AI job portal</h1>

      <form className="login-form" onSubmit={submitHandler}>
      {/* Email Field */}
      <div className="input-wrapper">
        <MdEmail className="icon email-icon" />
        <input type="email" id="email" name="email" value={userData.email} onChange={changeHandler} placeholder="email" className={`mt-1 block w-full px-10 py-2 border rounded-md shadow-sm placeholder-gray-700 focus:outline-none focus:ring-1 sm:text-sm transition duration-150 ease-in-out`} />
      </div>
      {/* Password Field */}       
      <div className="input-wrapper">
        <div>
          <MdLock className="icon password-icon" />
          <input type={showPassword ? "text" : "password"} id="password" name="password" value={userData.password} onChange={changeHandler} placeholder="••••••••" className={`mt-1 block w-full text-gray-700 px-9 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm transition duration-150 ease-in-out`}/> 
        </div>
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

      
      <button className="btn-primary" >Login</button>
      </form>
      <p className="footer-text">
        Don’t have an account? <a href="/Signup" className="link">Sign up</a>
      </p>
    </div>
  );
}
