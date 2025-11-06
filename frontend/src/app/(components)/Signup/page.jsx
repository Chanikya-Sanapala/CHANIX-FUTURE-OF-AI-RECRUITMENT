"use client"

import Link from "next/link";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import { MdEmail, MdLock } from "react-icons/md";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Users from "../../../../../backend/src/controllers/profileController.js";

const Signup = () => {

  // initialize router
  const router = useRouter()

  // 1. Initialize sate for form data
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword:"",
    userType:""
  });

  // 2. Initialize state for validation/submission status
    const [errors,setErrors] = useState({});
    const [loading,setLoading] = useState(true);
    const [emailExists,setEmailExists] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [submitMessage,setSubmitMessage] = useState('');

  // 3. Handle input changes
    const changeHandler = (e) => {
    const {name,value} = e.target;
    setUserData(prevState => ({
      ...prevState,[name]:value
    }));
  
  // Clear error for the field as the user types
    if(errors[name]){
      setErrors(prevState =>({
        ...prevState,[name]:null
      }))
    }
  }

  // 4. Validation logic
    const validate = (e) =>{
      let newErrors = {};
      const data = new FormData(e.currentTarget);
      const email = data.get("email");
      if(!userData.username) newErrors.username = 'Username is required';
      if(!userData.email){
        newErrors.email = 'Email is required';
      }else if(!/\S+@\S+\.\S+/.test(userData.email)){
        newErrors.email = 'Email address is invalid.';
      }
      if (!result.data.error) {
            toast.success(res.data.message, { position: "top-right", autoClose: 5000,
              onClose: () => {
                  router.push('/Login');
              }
            });
          } else {
            toast.error(res.data.message, { position: "top-right", autoClose: 5000 });
          }
      // if(emailExists){
      //   toast.error('Email already exists. Please use a different email.', { position: "top-right", autoClose: 5000 })
      //   newErrors.email = 'Email already exists. Please use a different email.';
      // }
       if (!userData.password) {
        newErrors.password = 'Password is required.';
      } else if (userData.password.length < 6) {
       toast.error('Password must be at least 6 characters', { position: "top-right", autoClose: 5000 }) 
      newErrors.password = 'Password must be at least 6 characters.';
    }
    
    if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      toast.error('Passwords do not match', { position: "top-right", autoClose: 5000 })
      console.log('Password and Confirm Password do not match');
    }
    if(!userData.userType){
      newErrors.userType = 'Please select a user type.';
    }
    
    return newErrors;
  };

  // 5. Handle form submission
  const submitHandler = async (e) => {
  e.preventDefault();

  // Collect form values safely using FormData
  const data = new FormData(e.currentTarget);
  const username = data.get("username");
  const email = data.get("email");
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");
  const userType = data.get("userType"); // e.g. "Recruiter" or "Candidate"

  // Optional client-side validation before sending request
  if (password !== confirmPassword) {
    toast.error("Password and Confirm Password do not match", {
      position: "top-right",
      autoClose: 5000,
    });
    return; // stop if mismatch
  }

  const url = "http://localhost:5000/api/auth/register";

  try {
    const res = await axios.post(url, {
      username,
      email,
      password,
      confirmPassword,
      userType,
    });

    // Success
    if (!res.data.error) {
      toast.success(res.data.message || "Registration successful!", {
        position: "top-right",
        autoClose: 5000,
        onClose: () => {
          router.push("/Login");
        },
      });
    } else {
      toast.error(res.data.message || "Registration failed", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  } catch (error) {
    // Axios error handling (just like your other handler)
    if (error.response) {
      console.log("Error response data:", error.response.data.error[0].message);
      toast.error(
        `${error.response.data.error[0].message}`,
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    } else if (error.request) {
      toast.error("Network error: Server did not respond", {
        position: "top-right",
        autoClose: 5000,
      });
    } else {
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }
};

  // Tailwind CSS classes for error styling (conditional class application)
    const getErrorClass = (fieldName) => 
      errors[fieldName] 
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
        : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500';

  useEffect(() => {
    // Any side effects or data fetching can go here
    setLoading(false);
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Registration...</p>
        </div>
      </div>
    );
  }


  return (
    <div>
          <div className="flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-md bg-white p-6 px-8 rounded-xl bg-shadow shadow-2xl">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6"><p className="text-blue-400">Create Account</p>
                <div className="border border-green-700 mt-2 m-auto lg:w-70"></div>
              </h2>
                
              {/* Submission Success/Error Message */}
                {/* {submitMessage && (<div className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                  {submitMessage}
                  </div>)} */}
              <form onSubmit={submitHandler} className="space-y-2">
                {/* Username Field */}
                <div>
                  <TextField  
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={userData.username} 
                    onChange={changeHandler}
                    // className={`${getErrorClass('username')}`}
                  />
                </div> 
                  {/* Email Field */} 
                  <div>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={userData.email} 
                      onChange={changeHandler}
                    />
                  </div>
                  {/* Password Field */} 
                  <div>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={userData.password}
                      onChange={changeHandler}
                    />
                  </div>
                  {/* Confirm Password Field */} 
                  <div> 
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="confirmPassword"
                      label="Confirm Password"
                      name="confirmPassword"
                      autoComplete="current-password"
                      type="password"
                      value={userData.confirmPassword}
                      onChange={changeHandler}
                    />
                    </div>
                    <select name="userType" value={userData.userType} onChange={changeHandler} className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm transition duration-150 ease-in-out ${getErrorClass('userType')}`} required>
                      <option value="" disabled>Select User Type</option>
                      <option value="Job Seeker" className="default">Job Seeker</option>
                      <option value="Recruiter">Recruiter</option>
                      <option value="Entrepreneur" disabled>Entreprise Coming Soon</option>
                      {errors.userType && <p className="mt-1 text-sm text-red-500">{errors.userType}</p>}
                    </select>
                    {errors.userType && <p className="mt-1 text-sm text-red-500">{errors.userType}</p>}
                  {/* Submit Button */} 
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50" disabled={isSubmitting} > {isSubmitting ? 'Registering...': 'Register'} </button> 
              </form> 
              {/* Login Button/Link Section */}
              <div className="mt-4 text-center border-t pt-4 border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">Already have an account?</p>
                  <Link href="/Login" passHref className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm bg-indigo-700 font-medium text-gray-700 hover:bg-blue-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                      Go to Login
                  </Link>
                  {/* <button onClick={test}>test</button> */}
              </div>
            </div> 
          </div>
          <ToastContainer />
        </div> 
        )
      }


export default Signup

