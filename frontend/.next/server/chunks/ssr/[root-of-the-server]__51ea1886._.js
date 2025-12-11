module.exports = [
"[project]/Desktop/Smart-Engine/frontend/.next-internal/server/app/(components)/ResetPassword/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResetPassword/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// //ResetPassword.js 
// "use client";
// import { React } from "react";
// import { useSearchParams,useRouter } from "next/navigation";
// import axios from "axios";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import LockResetIcon from "@mui/icons-material/LockReset";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { Card,CardContent } from "@mui/material";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// // import { useRouter } from "next/navigation";
// const ResetPassword = () => {
//     const searchParams = useSearchParams();
//     // const router = useRouter()
//     const userId = searchParams.get("UserId");
//     const token = searchParams.get("token");
//     console.log("UserId:", userId, "token:",token);
//     const submitHandle = async (e) => {
//         e.preventDefault();
//         const data = new FormData(e.currentTarget);
//         const newpassword = data.get("newpassword");
//         const confirmpassword = data.get("confirmpassword");
//         console.log("New Password:", newpassword, "Confirm Password:", confirmpassword);
//         if (newpassword !== confirmpassword)
//             toast.error(`New Password and 
//                          Confirm Password do not match !`, {
//                 autoClose: 5000,
//                 position: "top-right",
//             });
//         else {
//             const url = "http://localhost:5000/api/auth/reset-password";
//                 // process.env.REACT_APP_BACKEND_URL 
//                 //                             + "/api/resetPassword";
//             const res = await axios.post(url, {
//                 password: newpassword,
//                 token: token,
//                 userId: userId,
//             });
//             if (res.data.success === false) {
//                 toast.error(res.data.message, {
//                     autoClose: 5000,
//                     position: "top-right",
//                 });
//             }
//             if(res.status === 400){
//                 toast.error(res.data.message, {
//                     autoClose: 5000,
//                     position: "top-right",
//                 });
//             } else {
//                 toast.success(res.data.message, {
//                     autoClose: 5000,
//                     position: "top-right",
//                 });
//                 setTimeout(() => {
//                     navigation.navigate('/Login');
//                     //   router.push('/Login');;
//                 }, 2000);
//             }
//         }
//     };
//     return (
//         <Container maxWidth="sm">
//             <Box
//                 sx={{
//                     marginTop: 10,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                 }}
//             >
//                 <Card sx={{ boxShadow: "4" }}>
//                     <CardContent sx={{ m: 3 }}>
//                         <Avatar sx={{ m: "auto", 
//                                       bgcolor: "primary.main" }}>
//                             <LockResetIcon />
//                         </Avatar>
//                         <Typography component="h1" 
//                                     variant="h5" 
//                                     sx={{ mt: 1 }}>
//                             Reset Password
//                         </Typography>
//                         <Box component="form"
//                              onSubmit={submitHandle} 
//                              sx={{ mt: 1 }}>
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 type="password"
//                                 name="newpassword"
//                                 id="newpassword"
//                                 label="New Password"
//                                 autoFocus
//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 type="password"
//                                 name="confirmpassword"
//                                 id="confirmpassword"
//                                 label="Confirm Password"
//                             />
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                             >
//                                 Submit
//                             </Button>
//                         </Box>
//                     </CardContent>
//                 </Card>
//             </Box>
//         </Container>
//     );
// };
// export default ResetPassword;
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResetPassword/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResetPassword/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__51ea1886._.js.map