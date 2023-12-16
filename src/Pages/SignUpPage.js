import React from 'react'

function SignUpPage() {

  const Pass =  function togglePasswordVisibility() {
        var passwordInput = document.getElementById("password");
        var toggleBtn = document.getElementById("toggleBtn");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleBtn.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            toggleBtn.textContent = "Show";
        }
    }

  return (
   <>
        <div className="card position-absolute top-50 start-50 translate-middle" style={{width : "25rem"}}>
        <div className="card-body ">
            <h1 className="text-center">Sign Up</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control floatingInput"  placeholder="Rahul Choudhary"/>
                <label>Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="number" className="form-control floatingInput" placeholder="+91 1234567890"/>
                <label>Mobile Number</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control floatingInput"  placeholder="name@example.com"/>
                <label>Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control floatingInput" id="password" placeholder="Password"/>
                <label>Password</label>
              </div>
              <input id="toggleBtn" className="ms-2 mt-3" type="checkbox" onClick={Pass}/>
                <label>Show Password</label> 
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"/> 
      </div>
   </>
  )
}

export default SignUpPage;