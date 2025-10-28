"use client"

// import React from 'react'

// const ForgotPassword = () => {
//   return (
//     <div className="login-card">
//       <h1 className="title">Forgot Password</h1>
//       <form>
//         <div className="mb-3 input-wrapper grid">
//           <label htmlFor="email" className="form-label">Email address </label>
//           <input type="email" className="form-control input-field" id="email" aria-describedby="emailHelp" />
//           {/* <h1>Or</h1>
//           <label htmlFor="phone" className="form-label">Mobile Number </label>
//           <input type="tel" className="form-control input-field" id="phone" aria-describedby="phoneHelp" />
//           <div id="phoneHelp" className="form-text">We'll never share your phone number with anyone else.</div> */}
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//       <a href="/Login" className="forgot-link">Back to Login</a>
//     </div>
//   )
// }

// export default ForgotPassword


//ForgotPassword.js

import { React } from "react";
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
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const ForgotPassword = () => {
    const router = useRouter();
    const submitHandler = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get("email");
        const url = "http://localhost:5000/api/auth/request-password-reset";
        router.push('/Login');
        // ...
        Swal.fire({
        icon: 'success',
        title: 'Password reset email sent. Please check your inbox.',
        text: data.message
        });

        const res = await axios.post(url, { email: email });
        if (res.data.success === false) {
            toast.error(res.data.message, {
                autoClose: 5000,
                position: "top-right",
            });
        } else {
            toast.success(res.data.message, {
                autoClose: 5000,
                position: "top-right",
            });
        }
    };
    return (
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
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default ForgotPassword;
