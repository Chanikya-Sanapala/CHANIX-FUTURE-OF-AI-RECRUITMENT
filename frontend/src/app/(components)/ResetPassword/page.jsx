//ResetPassword.js 
"use client";

import { React, useState, useEffect } from "react";
import { useSearchParams,useRouter } from "next/navigation";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockResetIcon from "@mui/icons-material/LockReset";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card,CardContent } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from "next/navigation";

const ResetPassword = () => {
    const searchParams = useSearchParams();
    const [loading,setLoading] = useState(true)
    // const router = useRouter()
    const userId = searchParams.get("UserId");
    const token = searchParams.get("token");
    console.log("UserId:", userId, "token:",token);

    const submitHandle = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const newpassword = data.get("newpassword");
        const confirmpassword = data.get("confirmpassword");
        console.log("New Password:", newpassword, "Confirm Password:", confirmpassword);
        if (newpassword !== confirmpassword)
            toast.error(`New Password and 
                         Confirm Password do not match !`, {
                autoClose: 5000,
                position: "top-right",
            });
        else {
            const url = "http://localhost:5000/api/auth/update-password/";
                // process.env.REACT_APP_BACKEND_URL 
                //                             + "/api/resetPassword";
            const res = await axios.post(url, {
                password: newpassword,
                token: token,
                userId: userId,
            });
            if (res.data.success === false) {
                toast.error(res.data.message, {
                    autoClose: 5000,
                    position: "top-right",
                });
            }
            if(res.status === 400){
                toast.error(res.data.message, {
                    autoClose: 5000,
                    position: "top-right",
                });
            } else {
                toast.success(res.data.message, {
                    autoClose: 5000,
                    position: "top-right",
                });
                setTimeout(() => {
                    navigation.navigate('/Login');
                    //   router.push('/Login');;
                }, 2000);
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
              <p className="mt-4 text-gray-600">Loading Reset Password...</p>
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
                        <Avatar sx={{ m: "auto", 
                                      bgcolor: "primary.main" }}>
                            <LockResetIcon />
                        </Avatar>
                        <Typography component="h1" 
                                    variant="h5" 
                                    sx={{ mt: 1 }}>
                            Reset Password
                        </Typography>

                        <Box component="form"
                             onSubmit={submitHandle} 
                             sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                name="newpassword"
                                id="newpassword"
                                label="New Password"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                name="confirmpassword"
                                id="confirmpassword"
                                label="Confirm Password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
        <ToastContainer />
        </div>
    );
};

export default ResetPassword;