import React from 'react'
import { Link, Outlet } from 'react-router-dom';
function NavBar() {
  return (
    <>
    <nav className="navbar position-relative border-bottom pb-5 navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="position-absolute p-2 top-0 start-3"><a className="navbar-brand" href="/">Random</a></div>
        <div className="collapse position-absolute top-0 end-0 p-2 navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
          <Link to="/SignUpPage">
            <button className="btn me-2 btn-outline-success" type="button">SignUp</button>
          </Link>
           
            <Link to="/LoginPage">
               <button className="btn ms-2 me-2 btn-outline-success" type="button">Login</button>
            </Link> 
            
          </form>
        </div>
      </div>
    </nav>
    <Link to="/"></Link>
    <Outlet/>
    </>
  )
}
export default NavBar;