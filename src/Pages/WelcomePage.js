import React from "react";
import { Link, Outlet } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <h1>Hello, Welcome to Live Chat</h1>
      <div className="dropdown">
        <button
          className="btn btn-info dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          SignUp / Login
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <Link to="/SignUpPage" className="dropdown-item">
              SignUp
            </Link>
          </li>
          <li>
            <Link to="/LoginPage" className="dropdown-item">
              Login
            </Link>
          </li>
          
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default WelcomePage;
