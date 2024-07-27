import React from 'react';
import {Link} from 'react-router-dom'
import {useAuth} from './Security/AuthContext'




export default  function Header() {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated
    console.log("Is Authenticated:", isAuthenticated);
     function logout(){
        authContext.logout()

     }
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="https://www.youtube.com">
                  Yug
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    
                        <li className="nav-item fs-5">
                        {isAuthenticated &&
                          <Link className="nav-link" to="welcome/yug123">
                            Home
                          </Link>}
                        </li>
                        <li className="nav-item fs-5">
                        {isAuthenticated &&
                          <Link className="nav-link" to="/todos">
                            Todos
                          </Link> }

                        </li>
                        <li className="nav-item fs-5">
                            {isAuthenticated &&
                          <Link className="nav-link" to="/logout" onClick={logout}> Logout
                          </Link>}
                          
                        </li>
                     
                    
                    {!isAuthenticated && (
                      <li className="nav-item fs-5">
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      );
  }

 
