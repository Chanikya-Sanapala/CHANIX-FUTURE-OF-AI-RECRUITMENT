"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoogleLogin } from '@react-oauth/google';
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [userType, setUserType] = useState('Job Seeker'); // Default to Job Seeker
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Debug: Log state changes
  useEffect(() => {
    console.log('🔄 Form state updated:', formData, userType);
  }, [formData, userType]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    // Validation
    if (!formData.email || !formData.password) {
      setMessage("❌ Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    console.log('🔐 Attempting login with:', {
      email: formData.email,
      userType: userType,
      passwordLength: formData.password.length
    });

    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000").trim().replace(/\/$/, "");
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ...formData, userType }),
      });
      const data = await res.json();
      console.log('📨 Login response:', { status: res.status, data });

      const payload = data?.data || {};
      const token = payload.token;
      const user = payload.user;

      if (res.ok && data.success && token && user) {
        setMessage('✅ ' + data.message);
        console.log('🎉 Login successful, redirecting...');

        // Store token in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        setTimeout(() => {
          // Prefer backend userType, but fall back to the selected form userType
          const type = (user?.userType || userType || '').toLowerCase();
          let path = '/jobseeker-dashboard';
          if (type === 'recruiter') path = '/recruiter-dashboard';
          else if (type === 'admin' || type === 'administrator') path = '/admin-dashboard';

          try {
            const encoded = btoa(JSON.stringify({ user, token, userType: user.userType }));
            window.location.href = `${path}?u=${encodeURIComponent(encoded)}`;
          } catch (_) {
            window.location.href = path;
          }
        }, 1200);
      } else {
        console.log('❌ Login failed:', data);
        setMessage('❌ ' + (data?.message || 'Login failed'));
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      setMessage('❌ Network error: Could not connect to server. Make sure backend is running on port 5000.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#D97706] text-white overflow-x-hidden">

      {/* Branding - Top on mobile, Left on desktop (Swapped) */}
      <div
        className="w-full md:w-1/2 order-1 flex flex-col justify-center items-center p-8 md:p-12 relative min-h-[300px] md:min-h-screen bg-gradient-to-br from-[#D97706] to-[#78350f] border-b md:border-b-0 md:border-r border-white/20"
      >
        <div className="text-center max-w-md relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tighter uppercase">
            Welcome <span className="text-white/40">Back</span>
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-4 font-medium italic">
            "Your next big opportunity is just a login away."
          </p>
        </div>
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 order-2 flex flex-col justify-center items-center px-6 py-12 md:p-12 lg:p-20 shrink-0 bg-white">
        <div className="w-full max-w-md space-y-8">

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-[#78350f] tracking-tight mb-2 uppercase">Log In</h2>
            <p className="text-[#D97706]/60 font-bold text-sm tracking-widest uppercase">
              Access your {userType} portal
            </p>
          </div>

          {/* User Type Toggle */}
          <div className="flex bg-[#D97706]/5 border-2 border-[#D97706]/10 p-1.5 rounded-2xl mb-8 relative">
            <div
              className="absolute top-1.5 bottom-1.5 bg-[#D97706] rounded-xl transition-all duration-300 ease-in-out shadow-lg"
              style={{
                left: userType === 'Job Seeker' ? '6px' : '50%',
                width: 'calc(50% - 6px)'
              }}
            />
            <button
              onClick={() => setUserType('Job Seeker')}
              className={`flex-1 py-3 text-xs font-black z-10 transition-all tracking-widest ${userType === 'Job Seeker' ? 'text-white' : 'text-[#D97706]/50 hover:text-[#D97706]'}`}
              type="button"
            >
              JOB SEEKER
            </button>
            <button
              onClick={() => setUserType('Recruiter')}
              className={`flex-1 py-3 text-xs font-black z-10 transition-all tracking-widest ${userType === 'Recruiter' ? 'text-white' : 'text-[#D97706]/50 hover:text-[#D97706]'}`}
              type="button"
            >
              RECRUITER
            </button>
          </div>

        </div>

        {/* Social Login */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex justify-center w-full">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                try {
                  setIsLoading(true);
                  const { credential } = credentialResponse;
                  const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000").trim().replace(/\/$/, "");
                  const res = await fetch(`${baseUrl}/api/auth/google`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      token: credential,
                      userType: userType
                    }),
                  });
                  const data = await res.json();

                  if (res.ok && data.success) {
                    setMessage('✅ ' + data.message);
                    if (data.data && data.data.token) {
                      localStorage.setItem('token', data.data.token);
                      localStorage.setItem('user', JSON.stringify(data.data.user));
                    }

                    setTimeout(() => {
                      const type = (data.data.user.userType || userType).toLowerCase();
                      let path = '/jobseeker-dashboard';
                      if (type === 'recruiter') path = '/recruiter-dashboard';
                      else if (type === 'admin') path = '/admin-dashboard';
                      window.location.href = path;
                    }, 1500);
                  } else {
                    setMessage('❌ ' + (data?.message || 'Google login failed'));
                    setIsLoading(false);
                  }
                } catch (err) {
                  console.error('Google login error', err);
                  setMessage('❌ Google login failed');
                  setIsLoading(false);
                }
              }}
              onError={() => {
                setMessage('❌ Google login failed');
                setIsLoading(false);
              }}
              theme="filled_black"
              shape="pill"
              width="100%"
            />
          </div>
          <button
            disabled={isLoading}
            className="flex items-center justify-center gap-2 bg-gray-50 border-2 border-gray-100 rounded-full py-2.5 px-6 hover:bg-gray-100 text-gray-700 transition-all text-sm font-bold w-full"
            type="button"
          >
            <FaGithub size={20} />
            Github
          </button>
        </div>

        <div className="flex items-center gap-4 py-2 mb-6">
          <div className="h-px flex-1 bg-gray-200"></div>
          <span className="text-gray-400 text-[10px] sm:text-xs uppercase font-bold tracking-widest">OR LOG IN WITH EMAIL</span>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-2 text-xs font-black uppercase tracking-widest text-[#78350f]/40">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-gray-900 outline-none focus:border-[#D97706]/30 focus:ring-4 focus:ring-[#D97706]/5 transition-all font-medium"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#78350f]/40">Password</label>
              <Link href="/ForgotPassword" size="sm" className="text-xs font-bold text-[#D97706] hover:underline underline-offset-4">RESET PASSWORD?</Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

          {message && (
            <div className={`p-4 rounded-2xl text-sm font-bold border animate-fade-in text-center ${message.includes('✅')
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
                <span>AUTHENTICATING...</span>
              </div>
            ) : "Sign In"}
          </button>

          <p className="text-center text-gray-400 text-sm font-bold pt-4">
            NEW HERE? <Link href="/Signup" className="text-[#D97706] hover:underline underline-offset-4 decoration-[#D97706]/30 uppercase">Create an account</Link>
          </p>
        </form>

      </div>
    </div>
  );
}
