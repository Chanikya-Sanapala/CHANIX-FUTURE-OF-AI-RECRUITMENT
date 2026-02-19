"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import LockResetIcon from "@mui/icons-material/LockReset";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPasswordContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const userId = searchParams.get("UserId");
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setLoading(false);
  }, []);

  const submitHandle = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      setMessage("❌ Passwords do not match!");
      return;
    }

    try {
      setSubmitting(true);
      const url = process.env.NEXT_PUBLIC_BACKEND_URL
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/update-password`
        : "http://localhost:5000/api/auth/update-password";

      const res = await axios.post(url, {
        password: newPassword,
        token: token,
        userId: userId,
      });

      if (!res.data.error) {
        toast.success(res.data.message || "Password updated!");
        setMessage("✅ Success! Redirecting to login...");
        setTimeout(() => {
          router.push("/Login");
        }, 3000);
      } else {
        toast.error(res.data.message);
        setMessage("❌ " + res.data.message);
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || "Something went wrong!";
      toast.error(errMsg);
      setMessage("❌ " + errMsg);
    } finally {
      setSubmitting(false);
    }
  };

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
            <LockResetIcon className="text-white text-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-white font-black text-2xl uppercase tracking-tighter leading-none mb-2">New <br /> Identity</h2>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Secure Reset</p>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16 blur-xl"></div>
        </div>

        {/* Form Side */}
        <div className="flex-1 p-8 sm:p-12">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-black text-[#78350f] uppercase tracking-tight mb-2 leading-none">Reset <br className="hidden sm:block md:hidden" /> Password</h1>
            <p className="text-gray-400 font-bold text-sm tracking-wide uppercase">Set your new strong password below.</p>
          </div>

          <form onSubmit={submitHandle} className="space-y-6">
            <div>
              <label className="block mb-2 text-xs font-black uppercase tracking-widest text-[#78350f]/40">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 pr-12 text-gray-900 outline-none focus:border-[#D97706]/30 focus:ring-4 focus:ring-[#D97706]/5 transition-all font-medium"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D97706] transition-colors p-1"
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-xs font-black uppercase tracking-widest text-[#78350f]/40">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 pr-12 text-gray-900 outline-none focus:border-[#D97706]/30 focus:ring-4 focus:ring-[#D97706]/5 transition-all font-medium"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D97706] transition-colors p-1"
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
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
              disabled={submitting}
              className={`w-full bg-[#D97706] text-white font-black p-4 rounded-2xl transition-all hover:bg-[#b45309] hover:scale-[0.98] active:scale-[0.95] shadow-xl shadow-[#D97706]/20 uppercase tracking-widest ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {submitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  <span>SUBMITTING...</span>
                </div>
              ) : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ResetPassword = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
};

export default ResetPassword;
