"use client"

import Link from "next/link";
import axios from "axios";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {

  // initialize router
  const router = useRouter()

  // 1. Initialize sate for form data
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword:"",
  });

  // 2. Initialize state for validation/submission status
    const [errors,setErrors] = useState({});
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
    const validate = () =>{
      let newErrors = {};
      if(!userData.username) newErrors.username = 'Username is required';
      if(!userData.email){
        newErrors.email = 'Email is required';
      }else if(!/\S+@\S+\.\S+/.test(userData.email)){
        newErrors.email = 'Email address is invalid.';
      }
       if (!userData.password) {
        newErrors.password = 'Password is required.';
      } else if (userData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    
    if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    
    return newErrors;
  };

  // 5. Handle form submission
    const submitHandler = (e) => {
      e.preventDefault();
      setSubmitMessage(''); // Clear previous messages
      const validationErrors = validate();
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate an async submission (e.g., API call)
      setTimeout(() => {
        console.log('Form Submitted Successfully:', userData);
        axios.post('http://localhost:5000/register',userData).then(
            res => {alert(res.userData);setUserData({
                username:'',
                email:'',
                password:'',
                confirmpassword:''
            })}
        )
        setSubmitMessage('Registration successful! You can now log in.');
        setIsSubmitting(false);
        // Optionally, clear the form after success
        setUserData({ username: '', email: '', password: '', confirmPassword: '' });
        }, 1500);
        // Navigate to the login page after a short delay
        setTimeout(()=>{
          router.push('/components/Login');
        },1000)
      }
    }

  // Tailwind CSS classes for error styling (conditional class application)
    const getErrorClass = (fieldName) => 
      errors[fieldName] 
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
        : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500';

  return (
          <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6"><p className="text-blue-400">Create Account</p>
                <div className="border border-green-700 mt-2 m-auto lg:w-70"></div>
              </h2>
                
              {/* Submission Success/Error Message */}
                {submitMessage && (<div className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                  {submitMessage}
                  </div>)}
              <form onSubmit={submitHandler} className="space-y-4">
                {/* Username Field */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input type="text" id="username" name="username" value={userData.username} onChange={changeHandler} placeholder="Your unique username" className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm transition duration-150 ease-in-out ${getErrorClass('username')}`} />
                    {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username}</p>} </div>
                  {/* Email Field */} 
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="email" id="email" name="email" value={userData.email} onChange={changeHandler} placeholder="you@example.com" className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm transition duration-150 ease-in-out ${getErrorClass('email')}`} /> 
                    {errors.email && 
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>} 
                  </div>
                  {/* Password Field */} 
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label> 
                    <input type="password" id="password" name="password" value={userData.password} onChange={changeHandler} placeholder="••••••••" className={`mt-1 block w-full text-gray-700 px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm transition duration-150 ease-in-out ${getErrorClass('password')}`}/> {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>} </div>
                  {/* Confirm Password Field */} 
                  <div> 
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label> 
                    <input type="password" id="confirmPassword" name="confirmPassword" value={userData.confirmPassword} onChange={changeHandler} placeholder="••••••••" className={`mt-1 block w-full text-gray-700 px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm transition duration-150 ease-in-out ${getErrorClass('confirmPassword')}`} /> 
                    {errors.confirmPassword && 
                    <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>} 
                  </div>
                  {/* Submit Button */} 
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50" disabled={isSubmitting} > {isSubmitting ? 'Registering...': 'Register'} </button> 
              </form> 
              {/* Login Button/Link Section */}
              <div className="mt-4 text-center border-t pt-4 border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">Already have an account?</p>
                  <Link href="/components/Login" passHref className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm bg-indigo-700 font-medium text-gray-700 hover:bg-blue-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                      Go to Login
                  </Link>
              </div>
            </div> 
          </div>
          
        )
      }


export default Signup
