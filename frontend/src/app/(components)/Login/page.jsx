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
      const res = await fetch("http://localhost:5000/api/auth/login", {
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
      setMessage('❌ Network error: Could not connect to server. Make sure backend is running on port 4000.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f3f3', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '16px' 
    }}>
      <form className="login-card" onSubmit={handleLogin}>
        <h1 className="title">AI Job Portal</h1>

        {message && (
          <div style={{
            textAlign: 'center',
            fontSize: '14px',
            marginBottom: '12px',
            padding: '8px 12px',
            borderRadius: '6px',
            color: message.includes('✅') ? '#166534' : '#991b1b',
            backgroundColor: message.includes('✅') ? '#dcfce7' : '#fee2e2',
            border: `1px solid ${message.includes('✅') ? '#bbf7d0' : '#fecaca'}`
          }}>
            {message}
          </div>
        )}

        <div className="input-wrapper">
          <span className="icon email-icon">✉️</span>
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            value={formData.email}
            onChange={(e) => {
              console.log('Email changed to:', e.target.value);
              setFormData({ ...formData, email: e.target.value });
            }}
            required
          />
        </div>

        <div className="input-wrapper">
          <span className="icon">👤</span>
          <select
            className="input-field"
            value={formData.userType}
            onChange={(e) => {
              console.log('User type changed to:', e.target.value);
              setFormData({ ...formData, userType: e.target.value });
            }}
            style={{ paddingLeft: '36px' }}
            required
          >
            <option value="">Select User Type</option>
            <option value="jobseeker"> Job Seeker</option>
            <option value="recruiter"> Recruiter</option>
            <option value="admin"> Administrator</option>
          </select>
        </div>

        <div className="input-wrapper">
          <span className="icon password-icon">🔒</span>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={(e) => {
              console.log('Password changed, length:', e.target.value.length);
              setFormData({ ...formData, password: e.target.value });
            }}
            required
          />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>{showPassword ? '🙈' : '👁️'}</span>
        </div>

        <div className="forgot-wrapper">
          <Link href="/ForgotPassword" className="forgot-link">Forgot password?</Link>
        </div>

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <p className="footer-text">
          Don&apos;t have an account? <Link href="/Signup" className="link">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
