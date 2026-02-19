"use client"

import { React, useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage("");
    const url = process.env.NEXT_PUBLIC_BACKEND_URL ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/request-password-reset` : "http://localhost:5000/api/auth/request-password-reset";

    try {
      const res = await axios.post(url, { email });
      if (!res.data.error) {
        toast.success(res.data.message || "Reset link sent!");
        setMessage("✅ Success! Please check your email for the reset link.");
        setTimeout(() => router.push('/Login'), 5000);
      } else {
        toast.error(res.data.message);
        setMessage("❌ " + res.data.message);
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || "Network error: Could not connect to server.";
      toast.error(errMsg);
      setMessage("❌ " + errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#D97706] flex items-center justify-center p-6 sm:p-12 overflow-x-hidden">
      <ToastContainer theme="colored" />

      <div className="w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-4 border-white/20">

        {/* Visual Side */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-[#D97706] to-[#78350f] p-8 flex flex-col justify-between items-center text-center relative overflow-hidden">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md relative z-10">
            <LockOutlinedIcon className="text-white text-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-white font-black text-2xl uppercase tracking-tighter leading-none mb-2">Secure <br /> Access</h2>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Smart Engine Auth</p>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16 blur-xl"></div>
        </div>

        {/* Form Side */}
        <div className="flex-1 p-8 sm:p-12">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-black text-[#78350f] uppercase tracking-tight mb-2 leading-none">Forgot <br className="hidden sm:block md:hidden" /> Password?</h1>
            <p className="text-gray-400 font-bold text-sm tracking-wide uppercase">No worries, we'll send you reset instructions.</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label className="block mb-2 text-xs font-black uppercase tracking-widest text-[#78350f]/40">Email Address</label>
              <input
                type="email"
                placeholder="Enter registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-gray-900 outline-none focus:border-[#D97706]/30 focus:ring-4 focus:ring-[#D97706]/5 transition-all font-medium"
                required
              />
            </div>

            {message && (
              <div className={`p-4 rounded-2xl text-xs font-bold border animate-fade-in text-center ${message.includes('✅')
                ? 'bg-green-50 text-green-600 border-green-100'
                : 'bg-red-50 text-red-600 border-red-100'
                }`}>
                {message}
              </div>
            )}

            <button
              disabled={isLoading}
              className={`w-full bg-[#D97706] text-white font-black p-4 rounded-2xl transition-all hover:bg-[#b45309] hover:scale-[0.98] active:scale-[0.95] shadow-xl shadow-[#D97706]/20 uppercase tracking-widest ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  <span>SENDING...</span>
                </div>
              ) : "Reset Password"}
            </button>

            <div className="text-center pt-4">
              <Link href="/Login" className="text-sm font-black text-[#D97706] hover:underline underline-offset-4 uppercase tracking-widest">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
