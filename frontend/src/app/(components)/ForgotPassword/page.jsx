"use client"

import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="login-card">
      <h1 className="title">Forgot Password</h1>
      <form>
        <div className="mb-3 input-wrapper grid">
          <label htmlFor="email" className="form-label">Email address </label>
          <input type="email" className="form-control input-field" id="email" aria-describedby="emailHelp" />
          <h1>Or</h1>
          <label htmlFor="phone" className="form-label">Mobile Number </label>
          <input type="tel" className="form-control input-field" id="phone" aria-describedby="phoneHelp" />
          <div id="phoneHelp" className="form-text">We'll never share your phone number with anyone else.</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <a href="/Login" className="forgot-link">Back to Login</a>
    </div>
  )
}

export default ForgotPassword
