"use client"
// ForgotPassword

import { React, useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
    Card,
    CardContent
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// // import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const ForgotPassword = () => {

  const [loading,setLoading] = useState(true)
    const router = useRouter();
    const submitHandler = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get("email");
        const url = "http://localhost:5000/api/auth/request-password-reset";
        // setTimeout(() => {
        //     router.push('/Login');
        // },8000);
//         // ...
//         // Swal.fire({
//         // icon: 'success',
//         // title: 'Password reset email sent. Please check your inbox.',
//         // text: data.message
//         // });
        // console.log("Email:", data);


        // const res = await axios.post(url, { email: email });
        // if(!res.data.success){
        //     toast.error(res.data.message, {
        //         autoClose: 5000,
        //         position: "top-right",
        //     });
        // }
        // if (res.data.success === false) {
        //     toast.error(res.data.message, {
        //         autoClose: 5000,
        //         position: "top-right",
        //     });
        // } else {
        //     toast.success(res.data.message, {
        //         autoClose: 3000,
        //         position: "top-right",
        //         onClose: () => {
        //             router.push('/Login');
        //         }
        //     });
        // }


    try {
    const res = await axios.post(url, { email });
    
    // Success
    if (!res.data.error) {
      toast.success(res.data.message, { position: "top-right", autoClose: 5000,
        onClose: () => {
            router.push('/Login');
        }
      });
    } else {
      toast.error(res.data.message, { position: "top-right", autoClose: 5000 });
    }
  } catch (error) {
    // Axios errors have a response object
    if (error.response) {
      // Backend responded with a status code out of 2xx range
      toast.error(`Error: ${error.response.data.message || error.response.statusText}`, {
        position: "top-right",
        autoClose: 5000,
      });
    } else if (error.request) {
      // Request was made but no response
      toast.error("Network error: Server did not respond", {
        position: "top-right",
        autoClose: 5000,
      });
    } else {
      // Something else happened
      toast.error(`Error: ${error.message}`, { position: "top-right", autoClose: 5000 });
    }
  }
    };

    useEffect(() => {
        // Any side effects or data fetching can go here
        setLoading(false);
      }, []);
      
      if (loading) {
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading Forgot Password...</p>
            </div>
          </div>
        );
      }
    

    return (
        <div>
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Card sx={{ boxShadow: "4" }}>
                    <CardContent sx={{ m: 3 }}>
                        <Avatar sx={{
                            m: "auto",
                            bgcolor: "primary.main"
                        }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1"
                            variant="h5" sx={{ mt: 1 }}>
                            Forgot Password
                        </Typography>

                        <Box component="form"
                            onSubmit={submitHandler} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Reset Password
                            </Button>
                            <a href="/Login" className="forgot-link">Back to Login</a>
                        </Box>
                        <ToastContainer />
                    </CardContent>
                </Card>
            </Box>
        </Container>
        <ToastContainer />
        </div>
    );
};

export default ForgotPassword;



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
