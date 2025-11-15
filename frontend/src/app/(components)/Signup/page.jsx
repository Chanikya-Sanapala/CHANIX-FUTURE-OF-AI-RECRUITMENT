
"use client";

// import Link from "next/link";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { TextField, IconButton, InputAdornment } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signup = () => {
//   const router = useRouter();

//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     userType: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setUserData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: null }));
//     }
//   };

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const handleClickShowPassword = () => setShowPassword(!showPassword);
//   const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const password = userData.password;
//     const confirmPassword = userData.confirmPassword;

//     if (password !== confirmPassword) {
//       toast.error("Password and Confirm Password do not match", {
//         position: "top-right",
//         autoClose: 5000,
//       });
//       return;
//     }

//     const url = "http://localhost:5000/api/auth/register";

//     try {
//       const res = await axios.post(url, {
//         username: userData.username,
//         email: userData.email,
//         password: userData.password,
//         confirmPassword: userData.confirmPassword,
//         userType: userData.userType,
//       });

//       if (!res.data.error) {
//         toast.success(res.data.message || "Registration successful!", {
//           position: "top-right",
//           autoClose: 3000,
//           onClose: () => router.push("/Login"),
//         });
//       } else {
//         toast.error(res.data.message || "Registration failed", {
//           position: "top-right",
//           autoClose: 5000,
//         });
//       }
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.error?.[0]?.message || "Error occurred", {
//           position: "top-right",
//           autoClose: 5000,
//         });
//       } else if (error.request) {
//         toast.error("Network error: Server did not respond");
//       } else {
//         toast.error(`Error: ${error.message}`);
//       }
//     }
//   };

//   useEffect(() => {
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin h-12 w-12 border-b-2 border-blue-600 rounded-full mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading Registration...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="min-h-screen flex flex-col lg:flex-row bg-white">

//         {/* LEFT PANEL - visible on all screens */}
//         <div
//           className="flex flex-col justify-center w-full lg:w-1/2 p-8 sm:p-10 text-white relative overflow-hidden"
//           style={{ background: "linear-gradient(135deg, #E91E63 0%, #FF6B9D 100%)" }}
//         >
//           <div className="space-y-6">

//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 mb-6">
//               <h1 className="text-3xl sm:text-4xl font-bold mb-4">
//                 Powerful,{" "}
//                 <span className="bg-white text-pink-600 px-3 py-1 rounded-lg">FREE</span> recruiting tools
//               </h1>
//               <p className="text-lg sm:text-xl mb-4">to find your perfect match!</p>
//             </div>

//             {/* FEATURES */}
//             <div className="space-y-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:shadow-lg transition transform hover:-translate-y-1">
//                   <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">Recruiter</h2>
//                   <p className="text-sm sm:text-base text-white/90 leading-relaxed">
//                     Stop wasting time on resumes. With{" "}
//                     <span className="font-semibold bg-white text-pink-600 px-2 rounded">Hyrinpro</span>, recruiters get{" "}
//                     <span className="font-semibold">AI driven voice interviews</span> and{" "}
//                     <span className="font-semibold">skill insights</span> that cut screening time by{" "}
//                     <span className="font-semibold">60%</span>. Build diverse, high‑performing teams with confidence.
//                   </p>
//                 </div>

//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:shadow-lg transition transform hover:-translate-y-1">
//                   <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">Job Seeker</h2>
//                   <p className="text-sm sm:text-base text-white/90 leading-relaxed">
//                     Showcase your talent through <span className="font-semibold">voice interviews</span> and{" "}
//                     <span className="font-semibold">skill challenges</span>. No more being overlooked because of where you studied or your resume format — with{" "}
//                     <span className="font-semibold bg-white text-pink-600 px-2 rounded">Hyrinpro</span>, your skills speak louder.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* COMPANIES */}
//             <div className="mt-10">
//               <p className="text-center text-pink-200 font-semibold mb-4">Powering recruiters at:</p>

//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 opacity-90">
//                 {["PLAID", "ROBLOX", "OpenAI", "Airtable", "nerdwallet", "IFTTT"].map((name) => (
//                   <div key={name} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
//                     <span className="text-sm font-semibold">{name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT SIDE - SIGNUP FORM */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 bg-white">
//         <div className="w-full max-w-md">

//           {/* Header */}
//           <h2 className="text-3xl font-extrabold text-center mb-6">
//             <p className="text-blue-400">Create Account</p>
//             <div className="border border-green-700 mt-2 w- mx-auto"></div>
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
//           <div className="mt-6 text-center pt-4">
//             <p className="text-sm text-gray-600 mb-2">Already have an account?</p>

//             <Link href="/Login"
//               className="inline-block w-full py-2 bg-indigo-700 text-white rounded-md hover:bg-blue-500 transition">
//               Go to Login
//             </Link>
//           </div>

//         </div>
//       </div>

//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Signup;




// changed signup pages


import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const submitHandler = async (e) => {
    e.preventDefault();

    const password = userData.password;
    const confirmPassword = userData.confirmPassword;

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    const url = "http://localhost:5000/api/auth/register";

    try {
      const res = await axios.post(url, {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
        userType: userData.userType,
      });

      if (!res.data.error) {
        toast.success(res.data.message || "Registration successful!", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => router.push("/Login"),
        });
      } else {
        toast.error(res.data.message || "Registration failed", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error?.[0]?.message || "Error occurred", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (error.request) {
        toast.error("Network error: Server did not respond");
      } else {
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-b-2 border-blue-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Registration...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col lg:flex-row bg-white">

        {/* LEFT PANEL - visible on all screens */}
        <div
          className="flex flex-col justify-center w-full lg:w-1/2 p-8 sm:p-10 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #065f46 100%)" }}
        >
          {/* Decorative blurs */}
          <div className="absolute -right-16 -top-20 w-72 h-72 rounded-full bg-white/5 blur-3xl transform rotate-12" />
          <div className="absolute -left-24 bottom-8 w-56 h-56 rounded-full bg-white/3 blur-2xl" />

          <div className="space-y-6 relative z-10">
            <div className="bg-white/6 backdrop-blur-sm rounded-3xl p-6 sm:p-8 mb-6 border border-white/8">
              <h1 className="text-3xl sm:text-4xl font-semibold mb-2 leading-tight">
                {userData.userType === "Recruiter"
                  ? "Hire smarter — faster"
                  : userData.userType === "Job Seeker"
                  ? "Let your skills speak"
                  : "Intelligent recruiting, simplified"}
              </h1>

              <p className="text-sm sm:text-base text-white/85 mb-3">
                <span className="inline-flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-white text-indigo-900 font-medium text-xs">PRO</span>
                  <span className="font-medium">
                    {userData.userType === "Recruiter"
                      ? "AI-driven voice screening & structured insights"
                      : userData.userType === "Job Seeker"
                      ? "Voice interviews + skill challenges to showcase talent"
                      : "AI tools that reduce screening time and highlight skills"}
                  </span>
                </span>
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="text-xs bg-white/8 px-3 py-1 rounded-full">Secure</span>
                <span className="text-xs bg-white/8 px-3 py-1 rounded-full">GDPR-friendly</span>
                <span className="text-xs bg-white/8 px-3 py-1 rounded-full">Bias-aware</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div
                className={`rounded-2xl p-5 sm:p-6 transition transform hover:-translate-y-1 ${
                  userData.userType === "Job Seeker"
                    ? "bg-white/10 ring-2 ring-emerald-300/25"
                    : "bg-white/6"
                }`}
              >
                <h2 className="text-lg sm:text-2xl font-semibold mb-2">Job Seeker</h2>
                <p className="text-sm sm:text-base text-white/85">
                  Showcase real ability — recorded voice interviews, live challenges, and portfolio links
                  that employers actually evaluate.
                </p>
              </div>
              
              <div
                className={`rounded-2xl p-5 sm:p-6 transition transform hover:-translate-y-1 ${
                  userData.userType === "Recruiter"
                    ? "bg-white/10 ring-2 ring-indigo-300/25"
                    : "bg-white/6"
                }`}
              >
                <h2 className="text-lg sm:text-2xl font-semibold mb-2">Recruiter</h2>
                <p className="text-sm sm:text-base text-white/85">
                  Reduce manual screening with structured voice assessments, calibrated skill scores,
                  and diversity-aware matching that helps you build stronger teams faster.
                </p>
              </div>

            </div>

            {/* Trusted companies */}
            <div className="mt-6">
              <p className="text-center text-white/75 font-medium mb-4">Trusted by modern teams</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 opacity-90">
                {["Plaid", "Roblox", "OpenAI", "Airtable", "NerdWallet", "IFTTT"].map((name) => (
                  <div
                    key={name}
                    className="bg-white/4 rounded-lg p-3 text-center flex items-center justify-center text-xs font-medium"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - SIGNUP FORM */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 bg-white">
          <div className="w-full max-w-lg">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              {/* Header */}
              <h2 className="text-4xl font-extrabold text-center mb-6">
                <span className="block text-blue-500">Create Account</span>
                <span className="mx-auto mt-2 block h-0.5 w-20 bg-emerald-600 rounded-full w-auto" />
              </h2>

              {/* Form */}
              <form onSubmit={submitHandler} className="space-y-5">
                {/* User Type Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {["Job Seeker", "Recruiter"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => changeHandler({ target: { name: "userType", value: type } })}
                      aria-pressed={userData.userType === type}
                      className={`w-full px-4 py-2 rounded-xl transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                        userData.userType === type
                          ? "bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-md ring-2 ring-indigo-200/30"
                          : "bg-gray-50 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Username */}
                <TextField
                  fullWidth
                  margin="normal"
                  label="Username"
                  name="username"
                  value={userData.username}
                  onChange={changeHandler}
                  required
                  inputProps={{ "aria-label": "username" }}
                />

                {/* Email */}
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email Address"
                  name="email"
                  value={userData.email}
                  onChange={changeHandler}
                  required
                  inputProps={{ "aria-label": "email" }}
                />

                {/* Password */}
                <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={userData.password}
                  onChange={changeHandler}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Confirm Password */}
                <TextField
                  fullWidth
                  margin="normal"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={changeHandler}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed shadow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
              </form>

              {/* Login Link */}
              <div className="mt-6 text-center pt-3">
                <p className="text-sm text-gray-600 mb-2">Already have an account?</p>
                <Link
                  href="/Login"
                  className="inline-block w-full py-2 bg-indigo-700 text-white rounded-xl hover:bg-indigo-600 transition"
                >
                  Go to Login
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;

