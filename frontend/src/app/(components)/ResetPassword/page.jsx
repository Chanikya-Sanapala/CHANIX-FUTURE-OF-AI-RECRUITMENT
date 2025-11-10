// ResetPassword.js
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockResetIcon from "@mui/icons-material/LockReset";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CardContent } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const userId = searchParams.get("UserId");
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // You could check token validity here if needed
    setLoading(false);
  }, []);

  const submitHandle = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newPassword = data.get("newpassword");
    const confirmPassword = data.get("confirmpassword");

    if (newPassword !== confirmPassword) {
      toast.error("New Password and Confirm Password do not match!", {
        autoClose: 5000,
        position: "top-right",
      });
      return;
    }

    try {
      setSubmitting(true);

      const url = "http://localhost:5000/api/auth/update-password";
      const res = await axios.post(url, {
        password: newPassword,
        token: token,
        userId: userId,
      });

      if (res.data.success === false) {
        toast.error(res.data.message, { autoClose: 5000, position: "top-right" });
      } else {
        toast.success(res.data.message, { autoClose: 5000, position: "top-right" });
        setTimeout(() => {
          router.push("/Login");
        }, 2000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!", {
        autoClose: 5000,
        position: "top-right",
      });
    } finally {
      setSubmitting(false);
    }
  };

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
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ boxShadow: 4 }}>
          <CardContent sx={{ m: 3 }}>
            <Avatar sx={{ m: "auto", bgcolor: "primary.main" }}>
              <LockResetIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
              Reset Password
            </Typography>

            <Box component="form" onSubmit={submitHandle} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                name="newpassword"
                id="newpassword"
                label="New Password"
                autoFocus
                autoComplete="new-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                label="Confirm Password"
                autoComplete="new-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default ResetPassword;
