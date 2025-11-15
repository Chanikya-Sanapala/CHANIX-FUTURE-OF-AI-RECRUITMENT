module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
"use client";
;
;
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
const Signup = ()=>{
    const router = useRouter();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: ""
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
        // small entrance delay so animations feel more natural
        const t = setTimeout(()=>{
            setMounted(true);
            setLoading(false);
        }, 80);
        return ()=>clearTimeout(t);
    }, []);
    const changeHandler = (e)=>{
        const { name, value } = e.target;
        setUserData((prev)=>({
                ...prev,
                [name]: value
            }));
        if (errors[name]) setErrors((prev)=>({
                ...prev,
                [name]: null
            }));
    };
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowPassword = ()=>setShowPassword((s)=>!s);
    const handleClickShowConfirmPassword = ()=>setShowConfirmPassword((s)=>!s);
    const submitHandler = async (e)=>{
        e.preventDefault();
        if (isSubmitting) return;
        if (userData.password !== userData.confirmPassword) {
            toast.error("Password and Confirm Password do not match", {
                position: "top-right",
                autoClose: 5000
            });
            return;
        }
        setIsSubmitting(true);
        try {
            const url = "http://localhost:5000/api/auth/register";
            const res = await axios.post(url, {
                username: userData.username,
                email: userData.email,
                password: userData.password,
                confirmPassword: userData.confirmPassword,
                userType: userData.userType
            });
            if (!res.data.error) {
                toast.success(res.data.message || "Registration successful!", {
                    position: "top-right",
                    autoClose: 2500,
                    onClose: ()=>router.push("/Login")
                });
            } else {
                toast.error(res.data.message || "Registration failed", {
                    position: "top-right",
                    autoClose: 5000
                });
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error?.[0]?.message || "Error occurred", {
                    position: "top-right",
                    autoClose: 5000
                });
            } else if (error.request) {
                toast.error("Network error: Server did not respond");
            } else {
                toast.error(`Error: ${error.message}`);
            }
        } finally{
            setIsSubmitting(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin h-12 w-12 border-b-2 border-blue-600 rounded-full mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading Registration..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                lineNumber: 365,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
            lineNumber: 364,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-bd89264b0d2dbd82" + " " + `min-h-screen ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-400`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-bd89264b0d2dbd82" + " " + "min-h-screen flex flex-col lg:flex-row bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "linear-gradient(135deg, #0f172a 0%, #065f46 100%)"
                        },
                        className: "jsx-bd89264b0d2dbd82" + " " + `flex flex-col justify-center w-full lg:w-1/2 p-8 sm:p-10 text-white relative overflow-hidden transform transition-transform duration-700 ease-out
            ${mounted ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-60"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bd89264b0d2dbd82" + " " + "absolute -right-16 -top-20 w-72 h-72 rounded-full bg-white/5 blur-3xl transform rotate-12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bd89264b0d2dbd82" + " " + "absolute -left-24 bottom-8 w-56 h-56 rounded-full bg-white/3 blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bd89264b0d2dbd82" + " " + "space-y-6 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bd89264b0d2dbd82" + " " + `bg-white/6 backdrop-blur-sm rounded-3xl p-6 sm:p-8 mb-6 border border-white/8 transition-all duration-600 ease-out card-entrance`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + "text-3xl sm:text-4xl font-semibold mb-2 leading-tight",
                                                children: userData.userType === "Recruiter" ? "Hire smarter — faster" : userData.userType === "Job Seeker" ? "Let your skills speak" : "Intelligent recruiting, simplified"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 388,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + "text-sm sm:text-base text-white/85 mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-bd89264b0d2dbd82" + " " + "inline-flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bd89264b0d2dbd82" + " " + "px-2 py-1 rounded bg-white text-indigo-900 font-medium text-xs",
                                                            children: "PRO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                            lineNumber: 398,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bd89264b0d2dbd82" + " " + "font-medium",
                                                            children: userData.userType === "Recruiter" ? "AI-driven voice screening & structured insights" : userData.userType === "Job Seeker" ? "Voice interviews + skill challenges to showcase talent" : "AI tools that reduce screening time and highlight skills"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                            lineNumber: 399,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 396,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + "mt-4 flex flex-wrap gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-bd89264b0d2dbd82" + " " + "text-xs bg-white/8 px-3 py-1 rounded-full",
                                                        children: "Secure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-bd89264b0d2dbd82" + " " + "text-xs bg-white/8 px-3 py-1 rounded-full",
                                                        children: "GDPR-friendly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 411,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-bd89264b0d2dbd82" + " " + "text-xs bg-white/8 px-3 py-1 rounded-full",
                                                        children: "Bias-aware"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 412,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bd89264b0d2dbd82" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + `rounded-2xl p-5 sm:p-6 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:scale-101 hover:shadow-2xl
                  ${userData.userType === "Job Seeker" ? "bg-white/10 ring-2 ring-emerald-300/25" : "bg-white/6"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-bd89264b0d2dbd82" + " " + "text-lg sm:text-2xl font-semibold mb-2",
                                                        children: "Job Seeker"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 421,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bd89264b0d2dbd82" + " " + "text-sm sm:text-base text-white/85",
                                                        children: "Showcase real ability — recorded voice interviews, live challenges, and portfolio links that employers evaluate."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 422,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + `rounded-2xl p-5 sm:p-6 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:scale-101 hover:shadow-2xl
                  ${userData.userType === "Recruiter" ? "bg-white/10 ring-2 ring-indigo-300/25" : "bg-white/6"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-bd89264b0d2dbd82" + " " + "text-lg sm:text-2xl font-semibold mb-2",
                                                        children: "Recruiter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 431,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bd89264b0d2dbd82" + " " + "text-sm sm:text-base text-white/85",
                                                        children: "Reduce manual screening with structured voice assessments, calibrated skill scores, and diversity-aware matching."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 432,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 427,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bd89264b0d2dbd82" + " " + "mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + "text-center text-white/75 font-medium mb-4",
                                                children: "Trusted by modern teams"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 439,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + "grid grid-cols-2 sm:grid-cols-3 gap-4 opacity-90",
                                                children: [
                                                    "Plaid",
                                                    "Roblox",
                                                    "OpenAI",
                                                    "Airtable",
                                                    "NerdWallet",
                                                    "IFTTT"
                                                ].map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-bd89264b0d2dbd82" + " " + "bg-white/4 rounded-lg p-3 text-center flex items-center justify-center text-xs font-medium transition-transform duration-400 hover:scale-[1.02]",
                                                        children: name
                                                    }, name, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 442,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 440,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bd89264b0d2dbd82" + " " + `w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 bg-white transform transition-transform duration-700 ease-out
            ${mounted ? "translate-x-0 opacity-100" : "translate-x-6 opacity-60"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-bd89264b0d2dbd82" + " " + "w-full max-w-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bd89264b0d2dbd82" + " " + "bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:shadow-2xl card-float",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-bd89264b0d2dbd82" + " " + "text-4xl font-extrabold text-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + "block text-blue-500",
                                                children: "Create Account"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 460,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + "mx-auto mt-2 block h-0.5 w-20 bg-emerald-600 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 461,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: submitHandler,
                                        className: "jsx-bd89264b0d2dbd82" + " " + "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + "flex flex-col sm:flex-row gap-3",
                                                children: [
                                                    "Job Seeker",
                                                    "Recruiter"
                                                ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>changeHandler({
                                                                target: {
                                                                    name: "userType",
                                                                    value: type
                                                                }
                                                            }),
                                                        "aria-pressed": userData.userType === type,
                                                        className: "jsx-bd89264b0d2dbd82" + " " + `w-full px-4 py-2 rounded-xl transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] focus:outline-none focus:ring-2 focus:ring-offset-1 btn-smooth
                        ${userData.userType === type ? "bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-md ring-2 ring-indigo-200/30 transform scale-[1.01]" : "bg-gray-50 text-gray-700 border border-gray-200 hover:shadow-md hover:translate-y-[-1px]"}`,
                                                        children: type
                                                    }, type, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 467,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                                fullWidth: true,
                                                margin: "normal",
                                                label: "Username",
                                                name: "username",
                                                value: userData.username,
                                                onChange: changeHandler,
                                                required: true,
                                                inputProps: {
                                                    "aria-label": "username"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 483,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                                fullWidth: true,
                                                margin: "normal",
                                                label: "Email Address",
                                                name: "email",
                                                value: userData.email,
                                                onChange: changeHandler,
                                                required: true,
                                                inputProps: {
                                                    "aria-label": "email"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 494,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                                fullWidth: true,
                                                margin: "normal",
                                                label: "Password",
                                                type: showPassword ? "text" : "password",
                                                name: "password",
                                                value: userData.password,
                                                onChange: changeHandler,
                                                required: true,
                                                InputProps: {
                                                    endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputAdornment, {
                                                        position: "end",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                                            "aria-label": showPassword ? "Hide password" : "Show password",
                                                            onClick: handleClickShowPassword,
                                                            edge: "end",
                                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VisibilityOff, {}, void 0, false, {
                                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                                lineNumber: 522,
                                                                columnNumber: 43
                                                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Visibility, {}, void 0, false, {
                                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                                lineNumber: 522,
                                                                columnNumber: 63
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                            lineNumber: 517,
                                                            columnNumber: 25
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 516,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 505,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                                fullWidth: true,
                                                margin: "normal",
                                                label: "Confirm Password",
                                                type: showConfirmPassword ? "text" : "password",
                                                name: "confirmPassword",
                                                value: userData.confirmPassword,
                                                onChange: changeHandler,
                                                required: true,
                                                InputProps: {
                                                    endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputAdornment, {
                                                        position: "end",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                                            "aria-label": showConfirmPassword ? "Hide confirm password" : "Show confirm password",
                                                            onClick: handleClickShowConfirmPassword,
                                                            edge: "end",
                                                            children: showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VisibilityOff, {}, void 0, false, {
                                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                                lineNumber: 546,
                                                                columnNumber: 50
                                                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Visibility, {}, void 0, false, {
                                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                                lineNumber: 546,
                                                                columnNumber: 70
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                            lineNumber: 541,
                                                            columnNumber: 25
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                        lineNumber: 540,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 529,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                className: "jsx-bd89264b0d2dbd82" + " " + "w-full py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] disabled:opacity-60 disabled:cursor-not-allowed shadow btn-primary",
                                                children: isSubmitting ? "Registering..." : "Register"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 553,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bd89264b0d2dbd82" + " " + "mt-6 text-center pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-bd89264b0d2dbd82" + " " + "text-sm text-gray-600 mb-2",
                                                children: "Already have an account?"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 563,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                                href: "/Login",
                                                className: "inline-block w-full py-2 bg-indigo-700 text-white rounded-xl hover:bg-indigo-600 transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] focus:outline-none focus:ring-2",
                                                children: "Go to Login"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                                lineNumber: 564,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 562,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                            lineNumber: 457,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                lineNumber: 375,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContainer, {}, void 0, false, {
                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                lineNumber: 577,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "bd89264b0d2dbd82",
                children: ".card-float.jsx-bd89264b0d2dbd82{will-change:transform,box-shadow}@media (prefers-reduced-motion:no-preference){.card-float.jsx-bd89264b0d2dbd82:hover{transform:translateY(-6px)scale(1.006)}}.btn-smooth.jsx-bd89264b0d2dbd82{will-change:transform,box-shadow;transition-property:transform,box-shadow,background-color;transition-duration:.28s;transition-timing-function:cubic-bezier(.16,1,.3,1)}.btn-smooth.jsx-bd89264b0d2dbd82:hover{transform:translateY(-4px)scale(1.01);box-shadow:0 10px 25px #1018281f}.btn-primary.jsx-bd89264b0d2dbd82{transition:transform .26s cubic-bezier(.16,1,.3,1),box-shadow .26s}.btn-primary.jsx-bd89264b0d2dbd82:hover{transform:translateY(-3px);box-shadow:0 12px 30px #3b82f62e}.card-entrance.jsx-bd89264b0d2dbd82{transform-origin:50%}@media (prefers-reduced-motion:reduce){.card-entrance.jsx-bd89264b0d2dbd82,.card-float.jsx-bd89264b0d2dbd82,.btn-smooth.jsx-bd89264b0d2dbd82,.btn-primary.jsx-bd89264b0d2dbd82{box-shadow:none!important;transition:none!important;transform:none!important}.min-h-screen.opacity-0.jsx-bd89264b0d2dbd82{opacity:1!important}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
        lineNumber: 374,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Signup;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)");
var React = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = "undefined" !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if ("undefined" !== "undefined" && this._optimizeForSpeed) //TURBOPACK unreachable
        ;
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        //TURBOPACK unreachable
        ;
        var sheet;
        var insertionPoint;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || "undefined" === "undefined") {
            var sheet = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else //TURBOPACK unreachable
        {
            var tag;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if ("TURBOPACK compile-time truthy", 1) {
            this._serverSheet.deleteRule(index);
            return;
        }
        //TURBOPACK unreachable
        ;
        var tag;
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if ("TURBOPACK compile-time truthy", 1) {
            return this._serverSheet.cssRules;
        }
        //TURBOPACK unreachable
        ;
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if ("TURBOPACK compile-time truthy", 1) {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if ("undefined" !== "undefined" && !this._fromServer) //TURBOPACK unreachable
        ;
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        registry.add(props);
        return null;
    }
    //TURBOPACK unreachable
    ;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)").style;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5e752172._.js.map