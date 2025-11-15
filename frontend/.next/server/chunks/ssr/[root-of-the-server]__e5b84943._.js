module.exports = [
"[project]/Desktop/Smart-Engine/frontend/.next-internal/server/app/(components)/Signup/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client"
// import Link from "next/link";
// import axios from "axios";
// import React, { use, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { TextField, IconButton, InputAdornment } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { toast,ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// const Signup = () => {
//   // initialize router
//   const router = useRouter()
//   // 1. Initialize sate for form data
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword:"",
//     userType:""
//   });
//   // 2. Initialize state for validation/submission status
//     const [errors,setErrors] = useState({});
//     const [loading,setLoading] = useState(true);
//     const [isSubmitting,setIsSubmitting] = useState(false);
//     const [submitMessage,setSubmitMessage] = useState('');
//   // 3. Handle input changes
//     const changeHandler = (e) => {
//     const {name,value} = e.target;
//     setUserData(prevState => ({
//       ...prevState,[name]:value
//     }));
//   // Clear error for the field as the user types
//     if(errors[name]){
//       setErrors(prevState =>({
//         ...prevState,[name]:null
//       }))
//     }
//   }
//   // logic for password hide and unhide
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const handleClickShowPassword = () => setShowPassword(!showPassword);
//     const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
//     const handleMouseDownPassword = (event) => {
//       event.preventDefault();
//     };
//   // 4. Validation logic
//     const validate = (e) =>{
//       let newErrors = {};
//       if (!userData.userType) newErrors.userType = "Please select a user type.";
//       if(!userData.username) newErrors.username = 'Username is required';
//       if(!userData.email){
//         newErrors.email = 'Email is required';
//       }else if(!/\S+@\S+\.\S+/.test(userData.email)){
//         newErrors.email = 'Email address is invalid.';
//       }
//       if (!result.data.error) {
//             toast.success(res.data.message, { position: "top-right", autoClose: 5000,
//               onClose: () => {
//                   router.push('/Login');
//               }
//             });
//           } else {
//             toast.error(res.data.message, { position: "top-right", autoClose: 5000 });
//           }
//        if (!userData.password) {
//         newErrors.password = 'Password is required.';
//       } else if (userData.password.length < 6) {
//        toast.error('Password must be at least 6 characters', { position: "top-right", autoClose: 5000 }) 
//       newErrors.password = 'Password must be at least 6 characters.';
//     }
//     if (userData.password !== userData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match.';
//       toast.error('Passwords do not match', { position: "top-right", autoClose: 5000 })
//       console.log('Password and Confirm Password do not match');
//     }
//     if(!userData.userType){
//       newErrors.userType = 'Please select a user type.';
//     }
//     return newErrors;
//   };
//   // 5. Handle form submission
//   const submitHandler = async (e) => {
//   e.preventDefault();
//   // Collect form values safely using FormData
//   const data = new FormData(e.currentTarget);
//   // const username = data.get("username");
//   // const email = data.get("email");
//   const password = data.get("password");
//   const confirmPassword = data.get("confirmPassword");
//   // const userType = data.get("userType"); // e.g. "Recruiter" or "Candidate"
//   // Optional client-side validation before sending request
//   if (password !== confirmPassword) {
//     toast.error("Password and Confirm Password do not match", {
//       position: "top-right",
//       autoClose: 5000,
//     });
//     return; // stop if mismatch
//   }
//   const url = "http://localhost:5000/api/auth/register";
//   try {
//     const res = await axios.post(url, {
//       username: userData.username,
//       email: userData.email,
//       password: userData.password,
//       confirmPassword: userData.confirmPassword,
//       userType: userData.userType,
//     });
//     // Success
//     if (!res.data.error) {
//       toast.success(res.data.message || "Registration successful!", {
//         position: "top-right",
//         autoClose: 5000,
//         onClose: () => {
//           router.push("/Login");
//         },
//       });
//     } else {
//       toast.error(res.data.message || "Registration failed", {
//         position: "top-right",
//         autoClose: 5000,
//       });
//     }
//   } catch (error) {
//     // Axios error handling (just like your other handler)
//     if (error.response) {
//       console.log("Error response data:", error.response.data.error[0].message);
//       toast.error(
//         `${error.response.data.error[0].message}`,
//         {
//           position: "top-right",
//           autoClose: 5000,
//         }
//       );
//     } else if (error.request) {
//       toast.error("Network error: Server did not respond", {
//         position: "top-right",
//         autoClose: 5000,
//       });
//     } else {
//       toast.error(`Error: ${error.message}`, {
//         position: "top-right",
//         autoClose: 5000,
//       });
//     }
//   }
// };
//   // Tailwind CSS classes for error styling (conditional class application)
//     const getErrorClass = (fieldName) => 
//       errors[fieldName] 
//         ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
//         : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500';
//   useEffect(() => {
//     // Any side effects or data fetching can go here
//     setLoading(false);
//   }, []);
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading Registration...</p>
//         </div>
//       </div>
//     );
//   }
//   const getButtonErrorClass = () =>
//     errors.userType ? "border-red-500" : "border-gray-300";
//   // return (
//   //   <div>
//   //       <div className="min-h-screen flex bg-white" style={{ background: '#ffffff', minHeight: '100vh' }}>
//   //     {/* Left Side - Pink/Magenta Promotional Section */}
//   //     <div className="hidden lg:flex flex-col justify-center w-1/2 min-h-screen p-12 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E91E63 0%, #FF6B9D 100%)' }}>
//   //       <div className="relative z-10">
//   //         <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
//   //           <h1 className="text-4xl font-bold mb-6">
//   //             Powerful, <span className="bg-white text-pink-600 px-3 py-1 rounded-lg">FREE</span> recruiting tools
//   //           </h1>
//   //           <p className="text-xl mb-6">to find your perfect match!</p>
//   //         </div>
//   //         <div className="space-y-6">
//   //           <div className="flex items-start space-x-4">
//   //             <div className="flex-shrink-0 mt-1">
//   //               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//   //                 <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//   //                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//   //                 </svg>
//   //               </div>
//   //             </div>
//   //             <div>
//   //               <h3 className="text-lg font-semibold">Post your job and source candidates for FREE</h3>
//   //             </div>
//   //           </div>
//   //           <div className="flex items-start space-x-4">
//   //             <div className="flex-shrink-0 mt-1">
//   //               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//   //                 <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//   //                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//   //                 </svg>
//   //               </div>
//   //             </div>
//   //             <div>
//   //               <h3 className="text-lg font-semibold">Save time with intelligent applicant sorting</h3>
//   //             </div>
//   //           </div>
//   //           <div className="flex items-start space-x-4">
//   //             <div className="flex-shrink-0 mt-1">
//   //               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//   //                 <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//   //                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//   //                 </svg>
//   //               </div>
//   //             </div>
//   //             <div>
//   //               <h3 className="text-lg font-semibold">Free built-in ATS to manage your pipeline</h3>
//   //             </div>
//   //           </div>
//   //           <div className="flex items-start space-x-4">
//   //             <div className="flex-shrink-0 mt-1">
//   //               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//   //                 <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//   //                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//   //                 </svg>
//   //               </div>
//   //             </div>
//   //             <div>
//   //               <h3 className="text-lg font-semibold">Industry high 40% candidate response rate</h3>
//   //             </div>
//   //           </div>
//   //         </div>
//   //         <div className="mt-12">
//   //           <p className="text-center text-pink-200 font-semibold mb-6">Powering recruiters at:</p>
//   //           <div className="grid grid-cols-3 gap-6 items-center opacity-80">
//   //             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
//   //               <span className="text-sm font-semibold">PLAID</span>
//   //             </div>
//   //             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
//   //               <span className="text-sm font-semibold">ROBLOX</span>
//   //             </div>
//   //             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
//   //               <span className="text-sm font-semibold">OpenAI</span>
//   //             </div>
//   //             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
//   //               <span className="text-sm font-semibold">Airtable</span>
//   //             </div>
//   //             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
//   //               <span className="text-sm font-semibold">nerdwallet</span>
//   //             </div>
//   //             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
//   //               <span className="text-sm font-semibold">IFTTT</span>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //       {/* Background decoration */}
//   //       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
//   //       <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
//   //     </div>
//   //     {/* Right Side - Signup Form */}
//   //     <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
//   //       <div className="w-full max-w-md">
//   //         {/* Header */}
//   //         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6"><p className="text-blue-400">Create Account</p>
//   //               <div className="border border-green-700 mt-2 m-auto lg:w-100"></div>
//   //             </h2>
//   //         {submitMessage && (
//   //           <div className={`p-3 mb-4 text-sm rounded-lg ${
//   //             submitMessage.includes('✅') 
//   //               ? 'text-green-700 bg-green-100' 
//   //               : 'text-red-700 bg-red-100'
//   //           }`} role="alert">
//   //             {submitMessage}
//   //           </div>
//   //         )}
//   //         <form onSubmit={submitHandler} className="space-y-2">
//   //                             <div className="flex gap-3">
//   //             {["Job Seeker", "Recruiter"].map((type) => (
//   //               <button
//   //                 key={type}
//   //                 type="button"
//   //                 onClick={() =>
//   //                   changeHandler({
//   //                     target: { name: "userType", value: type },
//   //                   })
//   //                 }
//   //                 className={`px-4 py-2 rounded-md border transition m-auto 
//   //                   ${userData.userType === type
//   //                     ? "bg-blue-600 text-white border-blue-600"
//   //                     : "bg-gray-100 text-gray-700 " + getButtonErrorClass()
//   //                   }`}
//   //               >
//   //                 {type}
//   //               </button>
//   //             ))}
//   //           </div>
//   //         {errors.userType && (
//   //           <p className="mt-1 text-sm text-red-500">{errors.userType}</p>
//   //         )}
//   //               {/* Username Field */}
//   //               <div>
//   //                 <TextField  
//   //                   margin="normal"
//   //                   required
//   //                   fullWidth
//   //                   id="username"
//   //                   label="Username"
//   //                   name="username"
//   //                   autoComplete="username"
//   //                   autoFocus
//   //                   value={userData.username} 
//   //                   onChange={changeHandler}
//   //                   // className={`${getErrorClass('username')}`}
//   //                 />
//   //               </div> 
//   //                 {/* Email Field */} 
//   //                 <div>
//   //                   <TextField
//   //                     margin="normal"
//   //                     required
//   //                     fullWidth
//   //                     id="email"
//   //                     label="Email Address"
//   //                     name="email"
//   //                     autoComplete="email"
//   //                     autoFocus
//   //                     value={userData.email} 
//   //                     onChange={changeHandler}
//   //                   />
//   //                 </div>
//   //                 {/* Password Field */} 
//   //                 <div>
//   //                   <TextField
//   //                     margin="normal"
//   //                     required
//   //                     fullWidth
//   //                     id="password"
//   //                     label="Password"
//   //                     name="password"
//   //                     type={showPassword ? "text" : "password"}
//   //                     autoComplete="current-password"
//   //                     value={userData.password}
//   //                     onChange={changeHandler}
//   //                     InputProps={{
//   //                       endAdornment: (
//   //                         <InputAdornment position="end">
//   //                           <IconButton
//   //                             aria-label="toggle password visibility"
//   //                             onClick={handleClickShowPassword}
//   //                             onMouseDown={handleMouseDownPassword}
//   //                             edge="end"
//   //                           >
//   //                             {showPassword ? <VisibilityOff /> : <Visibility />}
//   //                           </IconButton>
//   //                         </InputAdornment>
//   //                       ),
//   //                     }}
//   //                   />
//   //                 </div>
//   //                 {/* Confirm Password Field */} 
//   //                 <div> 
//   //                   <TextField
//   //                     margin="normal"
//   //                     required
//   //                     fullWidth
//   //                     id="confirmPassword"
//   //                     label="Confirm Password"
//   //                     name="confirmPassword"
//   //                     type={showConfirmPassword ? "text" : "password"}
//   //                     autoComplete="current-password"
//   //                     value={userData.confirmPassword}
//   //                     onChange={changeHandler}
//   //                     InputProps={{
//   //                       endAdornment: (
//   //                         <InputAdornment position="end">
//   //                           <IconButton
//   //                             aria-label="toggle confirm password visibility"
//   //                             onClick={handleClickShowConfirmPassword}
//   //                             onMouseDown={handleMouseDownPassword}
//   //                             edge="end"
//   //                           >
//   //                             {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//   //                           </IconButton>
//   //                         </InputAdornment>
//   //                       ),
//   //                     }}
//   //                   />
//   //                 </div>
//   //                 <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50" disabled={isSubmitting} > {isSubmitting ? 'Registering...': 'Register'} </button> 
//   //           </form>
//   //         {/* Login Link */}
//   //         <div className="mt-4 text-center border-t pt-4 border-gray-200">
//   //                 <p className="text-sm text-gray-600 mb-3">Already have an account?</p>
//   //                 <Link href="/Login" passHref className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm bg-indigo-700 font-medium text-gray-700 hover:bg-blue-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
//   //                     Go to Login
//   //                 </Link>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //         <ToastContainer />
//   //       </div> 
//   //       )
//   return (
//   <div>
//     <div className="min-h-screen flex flex-col lg:flex-row bg-white">
//       {/* Left Side - Visible only on large screens */}
//       <div className="hidden lg:flex flex-col justify-center w-1/2 p-12 text-white relative overflow-hidden"
//         style={{ background: 'linear-gradient(135deg, #E91E63 0%, #FF6B9D 100%)' }}>
//         <div className="relative z-10 space-y-6">
//           <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
//             <h1 className="text-4xl font-bold mb-6">
//               Powerful, <span className="bg-white text-pink-600 px-3 py-1 rounded-lg">FREE</span> recruiting tools
//             </h1>
//             <p className="text-xl mb-6">to find your perfect match!</p>
//           </div>
//           {/* Feature list now responsive */}
//           <div className="space-y-4">
//             {[ 
//               "Post your job and source candidates for FREE",
//               "Save time with intelligent applicant sorting",
//               "Free built-in ATS to manage your pipeline",
//               "Industry high 40% candidate response rate"
//             ].map((text, i) => (
//               <div key={i} className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
//                   <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold">{text}</h3>
//               </div>
//             ))}
//           </div>
//           {/* Company grid responsive */}
//           <div className="mt-12">
//             <p className="text-center text-pink-200 font-semibold mb-4">Powering recruiters at:</p>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 opacity-90">
//               {["PLAID", "ROBLOX", "OpenAI", "Airtable", "nerdwallet", "IFTTT"].map((name) => (
//                 <div key={name} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
//                   <span className="text-sm font-semibold">{name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Background decorations */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
//         <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
//       </div>
//       {/* Right Side - Sign Up Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 bg-white">
//         <div className="w-full max-w-md">
//           {/* Header */}
//           <h2 className="text-3xl font-extrabold text-center mb-6">
//             <p className="text-blue-400">Create Account</p>
//             <div className="border border-green-700 mt-2 w-24 mx-auto"></div>
//           </h2>
//           {/* Form */}
//           <form onSubmit={submitHandler} className="space-y-4">
//             {/* User Type Buttons - stack on mobile */}
//             <div className="flex flex-col sm:flex-row gap-3">
//               {["Job Seeker", "Recruiter"].map((type) => (
//                 <button
//                   key={type}
//                   type="button"
//                   onClick={() => changeHandler({ target: { name: "userType", value: type } })}
//                   className={`w-full px-4 py-2 rounded-md border transition
//                     ${userData.userType === type
//                       ? "bg-blue-600 text-white border-blue-600"
//                       : "bg-gray-100 text-gray-700 border-gray-300"
//                     }`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>
//             {/* Username */}
//             <TextField fullWidth margin="normal" label="Username" name="username"
//               value={userData.username} onChange={changeHandler} required />
//             {/* Email */}
//             <TextField fullWidth margin="normal" label="Email Address" name="email"
//               value={userData.email} onChange={changeHandler} required />
//             {/* Password */}
//             <TextField fullWidth margin="normal" label="Password" type={showPassword ? "text" : "password"}
//               name="password" value={userData.password} onChange={changeHandler}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleClickShowPassword}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }} required />
//             {/* Confirm Password */}
//             <TextField fullWidth margin="normal" label="Confirm Password"
//               type={showConfirmPassword ? "text" : "password"} name="confirmPassword"
//               value={userData.confirmPassword} onChange={changeHandler}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleClickShowConfirmPassword}>
//                       {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }} required />
//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full py-2 rounded-md shadow-sm text-sm font-medium text-white 
//                 bg-blue-500 hover:bg-blue-600 transition disabled:opacity-50"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Registering..." : "Register"}
//             </button>
//           </form>
//           {/* Login Link */}
//           <div className="mt-6 text-center border-t pt-4">
//             <p className="text-sm text-gray-600 mb-2">Already have an account?</p>
//             <Link href="/Login"
//               className="inline-block w-full py-2 bg-indigo-700 text-white rounded-md hover:bg-blue-500 transition">
//               Go to Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     <ToastContainer />
//   </div>
// );
//       }
// export default Signup
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e5b84943._.js.map