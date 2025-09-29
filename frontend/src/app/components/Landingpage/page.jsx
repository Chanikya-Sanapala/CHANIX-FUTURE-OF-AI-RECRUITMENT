'use client'

import React from 'react'

const Landingpage = () => {
  return (
    <div>
      <h1>Landing Page</h1>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Smart AI</a>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/components/Login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/components/Signup">Sign Up</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Welcome to Smart AI</h1>
          <p className="lead text-muted">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>
            <a href="/components/Signup" className="btn btn-primary my-2">Sign Up</a>
            <a href="/components/Login" className="btn btn-secondary my-2">Login</a>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Landingpage

