module.exports = [
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ForgotPassword/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
"use client";
;
;
;
;
;
;
;
;
 // import { toast, ToastContainer } from "react-toastify";
 // import "react-toastify/dist/ReactToastify.css";
 // // import Swal from "sweetalert2";
 // import { useRouter } from "next/navigation";
 // const ForgotPassword = () => {
 //     const router = useRouter();
 //     const submitHandler = async (e) => {
 //         e.preventDefault();
 //         const data = new FormData(e.currentTarget);
 //         const email = data.get("email");
 //         const url = "http://localhost:5000/api/auth/request-password-reset";
 //         router.push('/Login');
 //         // ...
 //         // Swal.fire({
 //         // icon: 'success',
 //         // title: 'Password reset email sent. Please check your inbox.',
 //         // text: data.message
 //         // });
 //         const res = await axios.post(url, { email: email });
 //         if (res.data.success === false) {
 //             toast.error(res.data.message, {
 //                 autoClose: 5000,
 //                 position: "top-right",
 //             });
 //         } else {
 //             toast.success(res.data.message, {
 //                 autoClose: 5000,
 //                 position: "top-right",
 //             });
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
 //                         <Avatar sx={{
 //                             m: "auto",
 //                             bgcolor: "primary.main"
 //                         }}>
 //                             <LockOutlinedIcon />
 //                         </Avatar>
 //                         <Typography component="h1"
 //                             variant="h5" sx={{ mt: 1 }}>
 //                             Forgot Password
 //                         </Typography>
 //                         <Box component="form"
 //                             onSubmit={submitHandler} sx={{ mt: 1 }}>
 //                             <TextField
 //                                 margin="normal"
 //                                 required
 //                                 fullWidth
 //                                 id="email"
 //                                 label="Email Address"
 //                                 name="email"
 //                                 autoComplete="email"
 //                                 autoFocus
 //                             />
 //                             <Button
 //                                 type="submit"
 //                                 fullWidth
 //                                 variant="contained"
 //                                 sx={{ mt: 3, mb: 2 }}
 //                             >
 //                                 Reset Password
 //                             </Button>
 //                             <a href="/Login" className="forgot-link">Back to Login</a>
 //                         </Box>
 //                         <ToastContainer />
 //                     </CardContent>
 //                 </Card>
 //             </Box>
 //         </Container>
 //     );
 // };
 // export default ForgotPassword;
 // import { useRouter } from "next/navigation";
 // import { useState } from "react";
 // import axios from "axios";
 // import { toast, ToastContainer } from "react-toastify";
 // import "react-toastify/dist/ReactToastify.css";
 // export default function ForgotPassword() {
 //   const router = useRouter();
 //   const [email, setEmail] = useState("");
 //   const [loading, setLoading] = useState(false);
 //   const submitHandler = async (e) => {
 //     e.preventDefault();
 //     setLoading(true);
 //     try {
 //       const res = await axios.post("http://localhost:5000/api/auth/request-password-reset", { email });
 //       if (res.data.success) {
 //         toast.success(res.data.message, { autoClose: 5000, position: "top-right" });
 //         setTimeout(() => {
 //           router.push("/Login"); // navigate after toast
 //         }, 1500);
 //       } else {
 //         toast.error(res.data.message || "Something went wrong", { autoClose: 5000, position: "top-right" });
 //       }
 //     } catch (err) {
 //       toast.error(err.response?.data?.message || "Network error. Try again.", { autoClose: 5000, position: "top-right" });
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   return (
 //     <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
 //       {/* <h2>Forgot Password</h2> */}
 //       <Container maxWidth="sm">
 //              <Box
 //                 sx={{
 //                     marginTop: 10,
 //                     display: "flex",
 //                     flexDirection: "column",
 //                     alignItems: "center",
 //                 }}
 //             >
 //                 <Card sx={{ boxShadow: "4" }}>
 //                     <CardContent sx={{ m: 3 }}>
 //                         <Avatar sx={{
 //                             m: "auto",
 //                             bgcolor: "primary.main"
 //                         }}>
 //                             <LockOutlinedIcon />
 //                         </Avatar>
 //                         <Typography component="h1"
 //                             variant="h5" sx={{ mt: 1 }}>
 //                             Forgot Password
 //                         </Typography>
 //                         <Box component="form"
 //                             onSubmit={submitHandler} sx={{ mt: 1 }}>
 //                             <TextField
 //                                 margin="normal"
 //                                 required
 //                                 fullWidth
 //                                 id="email"
 //                                 label="Email Address"
 //                                 name="email"
 //                                 autoComplete="email"
 //                                 autoFocus
 //                             />
 //                             <Button
 //                                 type="submit"
 //                                 fullWidth
 //                                 variant="contained"
 //                                 sx={{ mt: 3, mb: 2 }}
 //                             >
 //                                 Reset Password
 //                             </Button>
 //                             <a href="/Login" className="forgot-link">Back to Login</a>
 //                         </Box>
 //                         <ToastContainer />
 //                     </CardContent>
 //                 </Card>
 //             </Box>
 //         </Container>
 //       <ToastContainer />
 //     </div>
 //   );
 // }
}),
];

//# sourceMappingURL=3d860_Smart-Engine_frontend_src_app_%28components%29_ForgotPassword_page_jsx_f6816263._.js.map