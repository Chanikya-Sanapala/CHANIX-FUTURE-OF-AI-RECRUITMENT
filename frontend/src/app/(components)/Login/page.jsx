"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '', userType: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Debug: Log state changes
  useEffect(() => {
    console.log('🔄 Form state updated:', formData);
  }, [formData]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    // Validation
    if (!formData.email || !formData.password) {
      setMessage('❌ Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    if (!formData.userType) {
      setMessage('❌ Please select a user type');
      setIsLoading(false);
      return;
    }

    console.log('🔐 Attempting login with:', {
      email: formData.email,
      userType: formData.userType,
      passwordLength: formData.password.length
    });

    try {
      // Call the backend API
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5005";
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
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
          const type = (user?.userType || formData.userType || '').toLowerCase();
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
      setMessage('❌ Network error: Could not connect to server. Make sure backend is running on port 5005.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: '0',
      zIndex: 50,
      backgroundColor: '#000000',
      backgroundImage: `
        radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
        radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
        radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)
      `,
      overflowY: 'auto'
    }}>
      <div style={{
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}>
        <style jsx global>{`
        .glass-login-card {
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          padding: 48px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          margin: 0 !important;
        }

        .glass-title {
          color: white;
          font-size: 32px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 32px;
          letter-spacing: -0.5px;
        }

        .glass-input-wrapper {
          position: relative;
          margin-bottom: 20px;
        }

        .glass-input-field {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px 16px 16px 48px;
          color: white;
          font-size: 15px;
          outline: none;
          transition: all 0.2s ease;
        }

        .glass-input-field::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .glass-input-field:focus {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .glass-input-field option {
          background: #1a1a1a;
          color: white;
        }

        .glass-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          opacity: 0.7;
          z-index: 10;
        }

        .glass-toggle-password {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 18px;
          opacity: 0.7;
        }

        .glass-toggle-password:hover {
          opacity: 1;
        }

        .glass-btn-primary {
          width: 100%;
          background: white;
          color: black;
          font-weight: 600;
          padding: 16px;
          border-radius: 12px;
          border: none;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 24px;
        }

        .glass-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .glass-btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .glass-forgot-wrapper {
          text-align: right;
          margin-top: 8px;
        }

        .glass-forgot-link {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s;
        }

        .glass-forgot-link:hover {
          color: white;
        }

        .glass-footer-text {
          text-align: center;
          margin-top: 24px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .glass-link {
          color: white;
          font-weight: 600;
          text-decoration: none;
        }

        .glass-link:hover {
          text-decoration: underline;
        }
      `}</style>

        <form className="glass-login-card" onSubmit={handleLogin}>
          <h1 className="glass-title">Welcome Back</h1>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', marginTop: '-24px', fontSize: '15px' }}>
            Enter your credentials to access your account
          </p>

          {message && (
            <div style={{
              textAlign: 'center',
              fontSize: '14px',
              marginBottom: '24px',
              padding: '12px',
              borderRadius: '12px',
              color: message.includes('✅') ? '#86efac' : '#fca5a5',
              backgroundColor: message.includes('✅') ? 'rgba(22, 101, 52, 0.2)' : 'rgba(153, 27, 27, 0.2)',
              border: `1px solid ${message.includes('✅') ? 'rgba(134, 239, 172, 0.2)' : 'rgba(252, 165, 165, 0.2)'}`,
              backdropFilter: 'blur(4px)'
            }}>
              {message}
            </div>
          )}

          <div className="glass-input-wrapper">
            <span className="glass-icon email-icon">✉️</span>
            <input
              type="email"
              placeholder="Email address"
              className="glass-input-field"
              value={formData.email}
              onChange={(e) => {
                console.log('Email changed to:', e.target.value);
                setFormData({ ...formData, email: e.target.value });
              }}
              required
            />
          </div>

          <div className="glass-input-wrapper">
            <span className="glass-icon">👤</span>
            <select
              className="glass-input-field"
              value={formData.userType}
              onChange={(e) => {
                console.log('User type changed to:', e.target.value);
                setFormData({ ...formData, userType: e.target.value });
              }}
              style={{ paddingLeft: '48px', appearance: 'none' }}
              required
            >
              <option value="">Select User Type</option>
              <option value="jobseeker">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
              <option value="admin">Administrator</option>
            </select>
            <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>▼</span>
          </div>

          <div className="glass-input-wrapper">
            <span className="glass-icon password-icon">🔒</span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="glass-input-field"
              value={formData.password}
              onChange={(e) => {
                console.log('Password changed, length:', e.target.value.length);
                setFormData({ ...formData, password: e.target.value });
              }}
              required
            />
            <span className="glass-toggle-password" onClick={() => setShowPassword(!showPassword)}>{showPassword ? '🙈' : '👁️'}</span>
          </div>
          <div className="glass-forgot-wrapper">
            <Link href="/ForgotPassword" className="glass-forgot-link">Forgot password?</Link>
          </div>

          <button type="submit" className="glass-btn-primary" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

          <p className="glass-footer-text">
            Don&apos;t have an account? <Link href="/Signup" className="glass-link">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
