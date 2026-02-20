"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoogleLogin } from '@react-oauth/google';
import { FaGithub } from "react-icons/fa";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "Job Seeker", // Default to Job Seeker
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Debug: Log state changes
  useEffect(() => {
    console.log('🔄 Form state updated:', formData);
  }, [formData]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    // Validation
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage("❌ Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match");
      setIsLoading(false);
      return;
    }

    console.log('📝 Attempting signup with:', {
      username: formData.username,
      email: formData.email,
      userType: formData.userType
    });

    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000").trim().replace(/\/$/, "");
      const res = await fetch(`${baseUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          userType: formData.userType
        }),
      });

      const data = await res.json();
      console.log('📨 Signup response:', { status: res.status, data });

      if (res.ok && data.success) {
        setMessage('✅ Registration successful! Redirecting to login...');

        // Optional: Auto-login or just redirect
        setTimeout(() => {
          window.location.href = "/Login";
        }, 1500);
      } else {
        setMessage('❌ ' + (data?.message || 'Registration failed'));
      }
    } catch (error) {
      console.error('❌ Signup error:', error);
      setMessage('❌ Network error: Could not connect to server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked - Logic to be implemented`);
    // Example: window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/${provider}`;
    setMessage(`⚠️ ${provider} login is currently unavailable`);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-black text-white overflow-x-hidden">

      {/* Branding - Top on mobile, Right on desktop */}
      <div
        className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center items-center p-8 md:p-12 relative min-h-[300px] md:min-h-screen shrink-0"
        style={{
          background: `
            radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%),
            radial-gradient(at 50% 0%, hsla(280, 80%, 40%, 1) 0, transparent 50%),
            radial-gradient(at 100% 100%, hsla(339,49%,30%,1) 0, transparent 50%),
            #000
          `
        }}
      >
        <div className="text-center max-w-md relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tighter">
            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">FUTURE</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-2 md:mb-12 font-medium">
            Elevate your career with AI-driven insights and premium community access.
          </p>
          <div className="hidden md:flex flex-wrap justify-center gap-4 mt-8 opacity-50">
            <div className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest">AI Matching</div>
            <div className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest">Smart Resume</div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-pink-600 rounded-full blur-[120px]"></div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center items-center px-6 py-12 md:p-12 lg:p-20 bg-black shrink-0">
        <div className="w-full max-w-md space-y-8">

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Create Account</h2>
            <p className="text-white/50 font-medium">
              Join as a <span className="text-white">{formData.userType}</span>
            </p>
          </div>

          {/* User Type Toggle */}
          <div className="flex bg-white/5 p-1 rounded-2xl mb-8 relative border border-white/10">
            <div
              className="absolute top-1 bottom-1 bg-white/10 rounded-xl transition-all duration-300 ease-in-out shadow-lg"
              style={{
                left: formData.userType === 'Job Seeker' ? '4px' : '50%',
                width: 'calc(50% - 4px)'
              }}
            />
            <button
              onClick={() => setFormData({ ...formData, userType: 'Job Seeker' })}
              className={`flex-1 py-3 text-sm font-bold z-10 transition-all ${formData.userType === 'Job Seeker' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
              type="button"
            >
              JOB SEEKER
            </button>
            <button
              onClick={() => setFormData({ ...formData, userType: 'Recruiter' })}
              className={`flex-1 py-3 text-sm font-bold z-10 transition-all ${formData.userType === 'Recruiter' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
              type="button"
            >
              RECRUITER
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex justify-center w-full">
              <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  setIsLoading(true);
                  try {
                    const { credential } = credentialResponse;
                    const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000").trim().replace(/\/$/, "");
                    const res = await fetch(`${baseUrl}/api/auth/google`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        token: credential,
                        userType: formData.userType
                      }),
                    });
                    const data = await res.json().catch(() => ({}));
                    if (res.ok && data.success) {
                      setMessage('✅ ' + data.message);
                      if (data.data && data.data.token) {
                        localStorage.setItem('token', data.data.token);
                        localStorage.setItem('user', JSON.stringify(data.data.user));
                      }
                      setTimeout(() => {
                        window.location.href = data.data.user.userType === 'Recruiter' ? '/recruiter-dashboard' : '/jobseeker-dashboard';
                      }, 1500);
                    } else {
                      // Show the real error from backend
                      setMessage('❌ ' + (data?.message || `Server error (${res.status})`));
                    }
                  } catch (err) {
                    console.error('Google login error', err);
                    setMessage('❌ Network error: Could not reach server. Check your connection.');
                  } finally {
                    setIsLoading(false);
                  }
                }}
                onError={() => {
                  setMessage('❌ Google login failed');
                }}
                theme="filled_black"
                shape="pill"
                width="100%"
              />
            </div>
            <button
              onClick={() => handleSocialLogin('Github')}
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-full py-2.5 px-6 hover:bg-white/10 transition-all text-sm font-semibold w-full"
              type="button"
            >
              <FaGithub size={20} />
              Github
            </button>
          </div>

          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="text-white/30 text-[10px] sm:text-xs uppercase font-bold tracking-widest">OR REGISTER WITH EMAIL</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-white/50">Username</label>
              <input
                type="text"
                placeholder="Unique username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-white/30 focus:ring-4 focus:ring-white/5 transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-white/50">Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-white/30 focus:ring-4 focus:ring-white/5 transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-white/50">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pr-12 text-white outline-none focus:border-white/30 focus:ring-4 focus:ring-white/5 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-1"
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-white/50">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pr-12 text-white outline-none focus:border-white/30 focus:ring-4 focus:ring-white/5 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-1"
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
            </div>

            {message && (
              <div className={`p-4 rounded-2xl text-sm font-medium border animate-fade-in ${message.includes('✅')
                ? 'bg-green-500/10 text-green-400 border-green-500/20'
                : 'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                {message}
              </div>
            )}

            <button
              disabled={isLoading}
              className={`w-full bg-white text-black font-bold p-4 rounded-2xl transition-all hover:bg-gray-200 hover:scale-[0.98] active:scale-[0.95] shadow-xl shadow-white/5 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                  <span>CREATING ACCOUNT...</span>
                </div>
              ) : "CREATE ACCOUNT"}
            </button>

            <p className="text-center text-white/40 text-sm pt-4 font-medium">
              Already have an account? <Link href="/Login" className="text-white hover:underline underline-offset-4 decoration-white/30">Sign in</Link>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
}
