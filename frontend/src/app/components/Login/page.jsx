import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1> 
      {/* <Link href="/components/Signup"><div>Sign Up</div></Link>
      <Link href="/"><div>Home</div></Link>  */}

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Smart AI</a>

            {/* <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/components/Signup">SignUp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
 
    </div>
  )
}

export default Login
